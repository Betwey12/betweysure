import dayjs from "dayjs";
import Image from "next/image";
import { useRef } from "react";
import { FaSpinner } from "react-icons/fa";
import { useOnClickOutside } from "usehooks-ts";

interface NotificationsProps {
  setShowNotifications: React.Dispatch<React.SetStateAction<boolean>>;
  notifications?: TNotification[];
  isLoading: boolean;
}

export default function Notifications({
  setShowNotifications,
  notifications,
  isLoading,
}: NotificationsProps) {
  const notificationsEl = useRef(null);
  useOnClickOutside(notificationsEl, () => setShowNotifications(false));

  return (
    <div
      ref={notificationsEl}
      className="absolute right-10 top-[calc(100%+16px)] min-w-[300px] max-h-[280px] overflow-scroll z-50 bg-inherit flex flex-col items-center p-4 rounded lg:p-6"
    >
      {isLoading ? (
        <FaSpinner className="animate-spin" />
      ) : (
        <div className="w-full flex-col gap-4 flex">
          {notifications?.length === 0 ? (
            <p className="text-gray-one">No notifications</p>
          ) : (
            notifications?.map((notification) => (
              <div
                className="flex justify-between border-b pb-4"
                key={notification._id}
              >
                <div className="flex gap-4 items-center">
                  <Image
                    width={20}
                    height={20}
                    src="/betweysure.svg"
                    alt={notification.title}
                    className="w-4 h-4 rounded-full"
                  />

                  <div key={notification._id} className="flex flex-col">
                    <p className="">{notification.title}</p>
                    <p className="text-gray-one text-sm">{notification.body}</p>
                  </div>
                </div>
                <p className="text-xs">
                  {dayjs(notification?.createdAt).format("LT")}
                </p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
