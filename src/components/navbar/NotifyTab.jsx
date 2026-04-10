import React, { useEffect } from "react";
import { notificationsAPI } from "../../services/APIServices";
import { useUser } from "../../contexts/UserContext";
import { Badge } from "@heroui/react";

export default function NotifyTab() {
  // const { authToken } = useAuth();
  const {  notifications } = useUser();
 
  async function getNotificationCount() {
    const { data } = await notificationsAPI.fetchData({
      endPoint: "unread-count",
    });
    notifications.setUnreadCount(data.data.unreadCount);
  }
  const unreadCount = notifications.unreadCount;

  useEffect(() => {
    getNotificationCount()
  }, []);

  return (
    <>
      <div className="flex items-center lg:space-x-2 ">
        <Badge
          color="blue"
          placement="top-left"
          size="sm"
          content={unreadCount > 0 ? unreadCount : ""}
          shape="circle"
          className={unreadCount > 0 ? "" : "hidden"}
          classNames={{
            base: `top-1 font-bold  ${unreadCount > 0 ? "animate-pulse" : ""} `,
            badge:
              "bg-website-500 text-white dark:bg-white dark:text-black text-[10px] p-1 dark:border-0 w-4 h-4",
          }}
        >
          {/* <NotificationIcon size={24} /> */}
          <i className="fa-regular fa-bell"></i>
        </Badge>
        <span className="hidden lg:block">Notification</span>
      </div>
    </>
  );
}
