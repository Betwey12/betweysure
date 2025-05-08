import {
  FaBell,
  FaCaretDown,
  FaEdit,
  FaInfoCircle,
  FaSpinner,
  FaUser,
} from "react-icons/fa";
import avatar from "@/assets/images/avatar.webp";
import { useRef, useState } from "react";
import { IoMdChatboxes, IoMdClose, IoMdLogOut, IoMdMenu } from "react-icons/io";
import Notifications from "./notifications";
import { useOnClickOutside } from "usehooks-ts";
import { useQuery } from "@tanstack/react-query";
import { HTTPRequest } from "@/api";
import { cn } from "@/lib/utils";
import ToggleTheme from "../ui/toggle-theme";
import Link from "next/link";
import Image from "next/image";
import SideNav from "./sidenav";
import { useAuth } from "@/hooks/useAuth";
import useHandleLogout from "@/hooks/useHandleLogout";

export default function DashboardNav() {
  const [showMenu, setShowMenu] = useState(false);
  const [showDesktopMenu, setShowDesktopMenu] = useState(false);
  const [showSideNav, setShowSideNav] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const { user, isLoading: userLoading } = useAuth();
  const { handleLogout } = useHandleLogout();
  const sideNavEl = useRef(null);
  const menuEl = useRef(null);
  const desktopMenuEl = useRef(null);
  const { data: notificationData, isLoading } = useQuery({
    queryKey: ["notification"],
    queryFn: (): Promise<TNotificationResponse> =>
      HTTPRequest.Get(`notifications/me`),
    enabled: !!user || !userLoading,
  });
  const notifications = notificationData?.data || [];

  useOnClickOutside(sideNavEl, () => setShowSideNav(false));
  useOnClickOutside(menuEl, () => setShowMenu(false));
  useOnClickOutside(desktopMenuEl, () => setShowDesktopMenu(false));

  function handleChat() {
    const chatFloat = document.querySelector(
      ".zsiq_floatmain"
    ) as HTMLButtonElement;
    chatFloat.click();
  }

  return (
    <div className="w-full flex items-center border border-l-0 border-gray-two justify-between lg:justify-end bg-white text-blue-three px-4 lg:py-8 py-6 lg:pr-8 relative dark:bg-blue-two dark:text-white dark:border-0">
      <button
        className="p-0 text-2xl lg:hidden"
        onClick={() => setShowSideNav((prev) => !prev)}
      >
        {showSideNav ? <IoMdClose /> : <IoMdMenu />}
      </button>

      <div
        ref={menuEl}
        className={cn(
          "flex right-4 min-w-[280px] flex-col-reverse lg:flex-row items-center gap-4 absolute lg:relative bg-inherit lg:top-auto top-[calc(100%+16px)] rounded p-4 lg:p-0 z-[90] border border-gray-two lg:border-0 dark:border-0",
          {
            "hidden lg:flex": !showMenu,
          }
        )}
      >
        <ToggleTheme />
        <div
          ref={desktopMenuEl}
          className={cn(
            "flex flex-col lg:absolute right-0 top-[calc(100%+48px)] lg:border bg-gray-two text-left w-full bg-inherit rounded dark:lg:border-0",
            {
              "lg:hidden": !showDesktopMenu,
            }
          )}
        >
          {dropdownLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex gap-2 items-center py-4 capitalize lg:px-5"
              onClick={() => {
                setShowDesktopMenu(false);
                setShowMenu(false);
              }}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
          <button
            className="px-0 w-full text-center flex items-center gap-2 py-4 lg:pl-5"
            onClick={handleChat}
          >
            <IoMdChatboxes className="" />
            Chat with support
          </button>

          <button
            className="flex items-center gap-2 px-0 w-full text-center py-4 text-red-500 lg:pl-5"
            onClick={handleLogout}
          >
            <IoMdLogOut className="" />
            Logout
          </button>
        </div>
        <div className="hidden gap-4 items-center lg:flex">
          <button
            className="hidden relative p-0 lg:block"
            onClick={() => setShowNotifications((prev) => !prev)}
          >
            <FaBell />
            {notifications?.length > 0 && (
              <span className="bg-red-500 text-white animate-pulse w-3 h-3 absolute -top-2 -right-1 rounded-full text-[10px] flex items-center justify-center">
                {notifications.length}
              </span>
            )}
          </button>
          <div
            className="hidden gap-6 items-center cursor-pointer lg:flex"
            role="button"
            onClick={() => setShowDesktopMenu((prev) => !prev)}
          >
            <Image
              width={40}
              height={40}
              src={user?.photoURL ?? avatar}
              alt="avatar"
              className="w-6 h-6 rounded-full lg:w-8 lg:h-8"
              onError={(e) => {
                e.currentTarget.src = avatar.src;
              }}
            />
            <p className="capitalize select-none">
              {!user ? <FaSpinner className="animate-spin" /> : user.fullName}
            </p>
            <FaCaretDown className="hidden lg:block" />
          </div>
        </div>
      </div>
      <div className="flex gap-4 items-center lg:hidden">
        <button
          className="relative p-0"
          onClick={() => setShowNotifications((prev) => !prev)}
        >
          <FaBell />
          {notifications?.length > 0 && (
            <span className="bg-red-500 animate-ping lg:animate-pulse w-3 h-3 absolute -top-2 -right-1 rounded-full text-[10px] flex items-center justify-center">
              {notifications.length}
            </span>
          )}
        </button>

        <button onClick={() => setShowMenu((prev) => !prev)}>
          <Image
            width={40}
            height={40}
            src={avatar}
            alt="avatar"
            className="w-8 h-8 rounded-full"
          />
        </button>
      </div>
      <div
        ref={sideNavEl}
        className={cn(
          "overflow-y-scroll absolute top-0 left-0 transition-all lg:hidden min-w-[300px] z-[99]",
          {
            "-translate-x-full": !showSideNav,
          }
        )}
      >
        <SideNav setShowSideNav={setShowSideNav} />
      </div>
      {showNotifications && (
        <Notifications
          setShowNotifications={setShowNotifications}
          notifications={notifications}
          isLoading={isLoading}
        />
      )}
    </div>
  );
}

const dropdownLinks = [
  {
    name: "profile",
    icon: <FaUser />,
    href: "/dashboard/profile",
  },
  {
    name: "manage plans",
    icon: <FaEdit />,
    href: "/dashboard/buy-plan",
  },
  {
    name: "about betweysure",
    icon: <FaInfoCircle />,
    href: "/about-us",
  },
];
