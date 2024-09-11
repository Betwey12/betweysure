"use client";
import useGetUser from "@/hooks/useGetUser";
import { useEffect, useState } from "react";
import { getToken, onMessage } from "firebase/messaging";
import { messaging } from "@/firebase/config";
import { HTTPRequest } from "@/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useParams } from "next/navigation";
import SideNav from "./sidnav";
import DashboardNav from "./top-nav";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { redirect } from "next/navigation";
import { FaSpinner } from "react-icons/fa";
import JoyRide from "./joy-ride";
import Modal from "../shared/modal";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardWrapper({ children }: DashboardLayoutProps) {
  const [canRequestPermission, setCanRequestPermission] = useState(false);
  const searchParams = useParams<{ tour: string }>();
  const router = useRouter();
  const { user, isLoading } = useGetUser();
  const { user: loggedInUser, isLoading: loggedInLoading } = useAuth();
  const isVerified = loggedInUser?.emailVerified || loggedInLoading;
  const hasPhone = user?.phone || loggedInLoading;

  const showTour = !!searchParams.tour || false;
  const { mutateAsync, isError } = useMutation({
    mutationFn: (data: { fcmToken: string }) =>
      HTTPRequest.Post("users/edit-profile", data),
  });

  function handleTourEnd(data: {
    action: string;
    index: number;
    status: string;
    type: string;
  }) {
    const { status, action } = data;
    console.log(status);

    if (status === "finished" || action === "close") {
      router.push("/dashboard");
    }
  }

  useEffect(() => {
    (async () => {
      const messagingResolve = await messaging;
      if (!messagingResolve) return;

      // Check if the user has already granted permission
      const permission = Notification.permission;
      if (permission === "default") {
        setCanRequestPermission(true); // User hasn't accepted or denied notifications yet
      }

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
  });

  async function handleNotificationSubscription() {
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

  if (isLoading || loggedInLoading)
    return (
      <div className="bg-gray-light min-h-screen flex flex-col justify-center items-center h-full dark:bg-blue-one dark:text-white">
        <FaSpinner className="animate-spin" />
      </div>
    );

  if (!loggedInUser) redirect("/auth/login");

  if (loggedInUser && !isVerified) redirect("/auth?mode=verifyEmail");

  if (!hasPhone && loggedInUser) redirect("/auth/complete-profile");

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
      {showTour && (
        <JoyRide handleTourEnd={handleTourEnd} showTour={showTour} />
      )}
      {canRequestPermission && (
        <Modal>
          <button onClick={handleNotificationSubscription}>
            Subscribe to Notifications
          </button>
        </Modal>
      )}
    </div>
  );
}
