"use client";
import { useEffect, useState } from "react";
import { getToken, onMessage } from "firebase/messaging";
import { messaging } from "@/firebase/config";
import { HTTPRequest } from "@/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useSearchParams } from "next/navigation";
import SideNav from "./sidenav";
import DashboardNav from "./top-nav";
import { useAuth } from "@/hooks/useAuth";
import JoyRide from "./joy-ride";
import { useRouter } from "next/navigation";
import { DashboardSpinner } from "../ui/spinner";
import usePopUp from "@/hooks/usePopUp";
import PremiumPopUp from "../ui/premium-popup";
import NotificationPopup from "./notification-popup";
import SurveyPopUp from "../ui/survery-pop-up";
import ThoughtsPopup from "../ui/thoughts-popup";
import { isDue } from "@/lib/utils";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardWrapper({ children }: DashboardLayoutProps) {
  const router = useRouter();
  const { popUp } = usePopUp();
  const searchParams = useSearchParams();
  const [canRequestPermission, setCanRequestPermission] = useState(false);
  const { user, isLoading } = useAuth();
  const isVerified = user?.emailVerified || isLoading;
  const hasPhone = user?.phone || isLoading;
  const isLoggedIn = user || isLoading;
  const showTour = !!searchParams.get("tour") || false;

  const { mutateAsync, isError } = useMutation({
    mutationFn: (data: { fcmToken: string }) =>
      HTTPRequest.Post("users/edit-profile", data),
  });

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
          </div>,
        );
      });
    })();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || isLoading) return;

    const lastShown = Number(localStorage.getItem("notificationRequestShown"));

    // Check Notification API support
    if ("Notification" in window) {
      const permission = Notification.permission;

      if (permission === "default" && isDue({ last: lastShown, dur: 1 })) {
        const timer = setTimeout(() => {
          setCanRequestPermission(true);
          localStorage.setItem(
            "notificationRequestShown",
            Date.now().toString(),
          );
        }, 30000); // 30 seconds

        return () => clearTimeout(timer);
      }
    } else if (
      navigator.userAgent.includes("Safari") &&
      !navigator.userAgent.includes("Chrome")
    ) {
      console.log("Notification API not supported on Safari mobile.");
    }
  }, [isLoading]);

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
    if (isLoading) return;

    if (!isLoggedIn) {
      router.push("/auth/login");
      return;
    }

    if (!isVerified) {
      router.push("/auth/verify-email");
      return;
    }

    if (!hasPhone) {
      router.push("/auth/complete-profile");
    }
  }, [hasPhone, isLoading, isLoggedIn, isVerified, router]);

  if (isLoading) return <DashboardSpinner />;

  return (
    <div className="flex flex-col h-screen lg:flex-row w-full">
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
      {popUp === "premium" && <PremiumPopUp user={user} />}
      {popUp === "survey" && <SurveyPopUp user={user} />}

      {canRequestPermission && (
        <NotificationPopup
          handleClose={() => setCanRequestPermission(false)}
          handleNotificationSubscription={handleNotificationSubscription}
        />
      )}

      <ThoughtsPopup link="/acca-builder" />
    </div>
  );
}
