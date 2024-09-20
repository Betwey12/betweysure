"use client";
import useGetUser from "@/hooks/useGetUser";
import { useEffect, useState } from "react";
import { getToken, onMessage } from "firebase/messaging";
import { messaging } from "@/firebase/config";
import { HTTPRequest } from "@/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useParams } from "next/navigation";
import SideNav from "./sidenav";
import DashboardNav from "./top-nav";
import { useAuth } from "@/hooks/useAuth";
import { FaSpinner } from "react-icons/fa";
import JoyRide from "./joy-ride";
import Modal from "../shared/modal";
import NotificationPopup from "./notification-popup";
import { useRouter } from "next/navigation";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardWrapper({ children }: DashboardLayoutProps) {
  const router = useRouter();
  const [canRequestPermission, setCanRequestPermission] = useState(false);
  const searchParams = useParams<{ tour: string }>();
  const { user, isLoading } = useGetUser();
  const { user: loggedInUser, isLoading: loggedInLoading } = useAuth();
  const isVerified = loggedInUser?.emailVerified || loggedInLoading;
  const hasPhone = user?.phone || loggedInLoading;

  const showTour = !!searchParams.tour || false;
  const { mutateAsync, isError } = useMutation({
    mutationFn: (data: { fcmToken: string }) =>
      HTTPRequest.Post("users/edit-profile", data),
  });

  const loading = isLoading || loggedInLoading;

  useEffect(() => {
    (async () => {
      const messagingResolve = await messaging;
      if (!messagingResolve) return;

      onMessage(messagingResolve, (payload) => {
        console.log("Message received. ", payload);
        toast(
          <div>
            <p className="font-bold">{payload?.notification?.title}</p>
            <p>{payload?.notification?.body}</p>
            {payload?.fcmOptions?.link && (
              <a
                href={payload?.fcmOptions?.link}
                className="text-blue-500 flex items-center justify-end"
              >
                View
              </a>
            )}
          </div>
        );
      });
    })();
  }, []);

  useEffect(() => {
    const permission = Notification.permission;
    if (permission === "default" && !loading) {
      const timer = setTimeout(() => {
        setCanRequestPermission(true); // Show modal after 30 seconds
      }, 30000);

      // Cleanup function to clear the timeout
      return () => clearTimeout(timer);
    }
  }, [loading]);

  async function handleNotificationSubscription() {
    setCanRequestPermission(false);

    const messagingResolve = await messaging;
    if (!messagingResolve) return;

    getToken(messagingResolve, {
      vapidKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_VAPID_KEY,
    })
      .then(async (currentToken) => {
        if (!currentToken) {
          Notification.requestPermission().then((permission) => {
            if (permission === "granted") {
              console.log("Notification permission granted.");
            } else {
              console.log("Unable to get permission to notify.");
            }
          });
          return;
        }
        if (currentToken !== user?.fcmToken) {
          // Send the token to your server and update the UI if necessary
          const res = await mutateAsync({ fcmToken: currentToken });
          if (isError || !res.success)
            toast.error(res.message || "Something went wrong");
          toast.success("Saved");
        }
      })
      .catch((err) => {
        console.log("An error occurred while retrieving token. ", err);
      });
  }

  useEffect(() => {
    if (!loggedInUser) router.push("/auth/login");

    if (loggedInUser && !isVerified) router.push("/auth/verify-email");

    if (!hasPhone && loggedInUser) router.push("/auth/complete-profile");
  }, [hasPhone, isVerified, loggedInUser, router]);

  if (loading)
    return (
      <div className="bg-gray-light min-h-screen flex flex-col justify-center items-center h-full dark:bg-blue-one dark:text-white">
        <FaSpinner className="animate-spin" />
      </div>
    );

  return (
    <div className="flex flex-col h-screen lg:flex-row w-full overflow-hidden">
      <div className="hidden lg:block w-1/5">
        <SideNav />
      </div>
      <div className="flex flex-col lg:w-4/5 h-full">
        <DashboardNav />
        <div className="bg-gray-light p-4 lg:p-6 lg:pb-28 pb-28 overflow-y-scroll h-full relative dark:bg-blue-one dark:text-white">
          {children}
        </div>
      </div>
      {showTour && <JoyRide showTour={showTour} />}
      {canRequestPermission && (
        <Modal className="absolute top-6">
          <NotificationPopup
            handleClose={() => setCanRequestPermission(false)}
            handleNotificationSubscription={handleNotificationSubscription}
          />
        </Modal>
      )}
    </div>
  );
}
