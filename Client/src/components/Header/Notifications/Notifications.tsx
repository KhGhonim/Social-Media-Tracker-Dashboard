<<<<<<< HEAD
import { NotificationData } from "../../../DB/Context";
import { useEffect, useRef, useState } from "react";
import { CiBellOn } from "react-icons/ci";
=======
import { useEffect, useRef } from "react";
import { CiBellOn, CiLogin, CiLogout } from "react-icons/ci";
>>>>>>> 1c510ab (Sockets and Updates)
import { BiTask } from "react-icons/bi";
import { AiOutlineNotification } from "react-icons/ai";
import { GrWorkshop } from "react-icons/gr";
import { MdOutlineQueryStats, MdPayments } from "react-icons/md";
import { FaBirthdayCake } from "react-icons/fa";
<<<<<<< HEAD
import { io } from "socket.io-client";

export default function Notifications() {
  const [isOpen, setIsOpen] = useState(false);
  const [NotificationsAfterReaded, setNotificationsAfterReaded] =
    useState(NotificationData);
=======
import useFetchNotifications from "../../../Hooks/Notifications/Notifications";
import { format } from "date-fns";
import { MarkAsRead, ServerUrl } from "../../../Keys/envKeys";

export default function Notifications() {
  const {
    NotificationData,
    isOpen,
    setIsOpen,
    unreadedNotifications,
    setNotificationData,
    id,
  } = useFetchNotifications();
>>>>>>> 1c510ab (Sockets and Updates)

  const ref = useRef(null);
  const handleClickOutside = (event) => {
    // If the click is outside the modal, close it
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
<<<<<<< HEAD

=======
>>>>>>> 1c510ab (Sockets and Updates)
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

<<<<<<< HEAD
  const unreadedNotifications = NotificationsAfterReaded.filter(
    (notification) => notification.unread
  ).length;

  const handleMarkAsRead = () => {
    setNotificationsAfterReaded(
      NotificationsAfterReaded.map((notification) => ({
        ...notification,
        unread: false,
      }))
    );
    setIsOpen(!isOpen);
  };

  const SocketURL = import.meta.env.VITE_APP_SOCKET_URL;

  useEffect(() => {
    // Connect to Socket.IO
    const socket = io(SocketURL);

    socket.on("newNotification", (notification) => {
      setNotificationsAfterReaded((prev) => [notification, ...prev]);
    });

    socket.disconnect(); // Disconnect
  }, [SocketURL]);
=======
  const handleMarkAsRead = async () => {
    setNotificationData(
      NotificationData.map((notification) => ({
        ...notification,
        is_read: true,
      }))
    );

    // Change is_read to true in the server so that the notification is marked as read
    const res = await fetch(`${ServerUrl}${MarkAsRead}?id=${id}`, {
      method: "POST",
      credentials: "include",
    });

    if (res.ok) {
      console.log("Marked as read");
    }

    setIsOpen(!isOpen);
  };

  const Time = (isoString) => {
    return format(new Date(isoString), "hh:mm:ss a");
  };
>>>>>>> 1c510ab (Sockets and Updates)

  return (
    <div ref={ref} className="relative ">
      <button
        onClick={handleMarkAsRead}
        className="relative text-gray-500 hover:text-gray-600 focus:outline-none"
      >
        <CiBellOn className="h-6 w-6" />
        {unreadedNotifications > 0 && (
          <div className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
            {unreadedNotifications}
          </div>
        )}
      </button>

      {isOpen && (
<<<<<<< HEAD
        <div className="absolute -right-28 lg:right-0 mt-2 z-50  w-72 lg:w-80 rounded-lg bg-[--bg-color] shadow-lg ring-1 ring-black ring-opacity-5">
=======
        <div
          className={`absolute  ${
            NotificationData.length > 6
              ? "h-[25rem] overflow-y-scroll"
              : "h-auto"
          } -right-44 lg:right-0 mt-2 z-50  w-72 lg:w-80 rounded-lg bg-[--bg-color] shadow-lg ring-1 ring-black ring-opacity-5`}
        >
>>>>>>> 1c510ab (Sockets and Updates)
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="px-4 py-2 bg-[--bg-color] text-sm text-[--text-color] font-semibold rounded-t-lg">
              Notifications
            </div>

            {NotificationData.length > 0 ? (
              NotificationData.map((notification) => (
                <div
                  key={notification.id}
<<<<<<< HEAD
                  className="px-4 py-3 hover:bg-[--rightSide-bg-color] transition-colors flex items-start gap-3 border-b border-gray-100"
                >
                  <div className="flex-shrink-0 text-blue-500 text-lg">
                    {notification.type === "task" && <BiTask />}
=======
                  className="px-4 py-3 hover:bg-[--rightSide-bg-color] transition-colors flex items-start gap-3 border-b last:border-b-0 border-gray-100"
                >
                  <div className="flex-shrink-0 text-blue-500 text-lg">
                    {notification.type === "task" && <BiTask />}
                    {notification.type === "check-in" && <CiLogin />}
                    {notification.type === "check-out" && <CiLogout />}
>>>>>>> 1c510ab (Sockets and Updates)
                    {notification.type === "announcement" && (
                      <AiOutlineNotification />
                    )}
                    {notification.type === "workshop" && <GrWorkshop />}
                    {notification.type === "payment" && <MdPayments />}
                    {notification.type === "growth" && <MdOutlineQueryStats />}
                    {notification.type === "happy-birthday" && (
                      <FaBirthdayCake />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-[--text-color]">
<<<<<<< HEAD
                      {notification.desc} :{" "}
=======
                      {notification.desc || notification.description} :{" "}
>>>>>>> 1c510ab (Sockets and Updates)
                      <span className="text-xs font-medium capitalize text-[--text-color]">
                        {" "}
                        {notification.message}
                      </span>
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
<<<<<<< HEAD
                      {notification.time}
=======
                      {Time(notification.created_at)}
>>>>>>> 1c510ab (Sockets and Updates)
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="px-4 py-3 text-xs text-gray-500 text-center">
                No new notifications
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
