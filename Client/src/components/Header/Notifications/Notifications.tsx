import { useEffect, useRef, useState } from "react";
import { CiBellOn, CiLogin, CiLogout } from "react-icons/ci";
import { BiTask } from "react-icons/bi";
import { AiOutlineNotification } from "react-icons/ai";
import { GrWorkshop } from "react-icons/gr";
import { MdOutlineQueryStats, MdPayments } from "react-icons/md";
import { FaBirthdayCake } from "react-icons/fa";
import useFetchNotifications from "../../../Hooks/Notifications/Notifications";
import { format } from "date-fns";

import {
  MarkAsReadForTEAM_LEADER,
  MarkAsReadForUSER,
  ServerUrl,
} from "../../../Keys/envKeys";

export default function Notifications() {
  const [activeTab, setActiveTab] = useState("direct");

  const {
    NotificationData,
    isOpen,
    setIsOpen,
    unreadedNotifications,
    setNotificationData,
    id,
    fetchNotifications,
    Role,
  } = useFetchNotifications();

  useEffect(() => {
    fetchNotifications();
  }, [isOpen]);

  const ref = useRef(null);
  const handleClickOutside = (event) => {
    // If the click is outside the modal, close it
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMarkAsRead = async () => {
    setNotificationData(
      NotificationData.map((notification) => ({
        ...notification,
        is_read: true,
      }))
    );
    setIsOpen(!isOpen);

    const URL =
      Role === "Team Leader"
        ? `${ServerUrl}${MarkAsReadForTEAM_LEADER}?id=${id}`
        : `${ServerUrl}${MarkAsReadForUSER}?id=${id}`;

    // Change is_read to true in the server so that the notification is marked as read
    const res = await fetch(URL, {
      method: "POST",
      credentials: "include",
    });

    if (res.ok) {
      return await res.json();
    }
  };

  const Time = (isoString) => {
    return format(new Date(isoString), "yyyy-MM-dd HH:mm:ss");
  };

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
        <div
          className={`absolute ${
            NotificationData.length > 6
              ? "h-[25rem] overflow-y-scroll"
              : "h-auto"
          } -right-44 lg:right-0 mt-2 z-50 w-72 lg:w-80 rounded-lg bg-[--bg-color] shadow-lg ring-1 ring-black ring-opacity-5`}
        >
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="px-4 py-2 bg-[--bg-color] text-sm text-[--text-color] font-semibold rounded-t-lg">
              Notifications
            </div>
            {/* Tabs Header */}
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab("direct")}
                className={`w-1/2 py-2 text-sm ${
                  activeTab === "direct"
                    ? "font-bold border-b-2 border-[--navbar] text-[--text-color]"
                    : "text-[--text-color]"
                }`}
              >
                Direct
              </button>
              <button
                onClick={() => setActiveTab("pending")}
                className={`w-1/2 py-2 text-sm ${
                  activeTab === "pending"
                    ? "font-bold border-b-2 border-[--navbar] text-[--text-color]"
                    : "text-[--text-color]"
                }`}
              >
                Pending
              </button>
            </div>
            {/* Direct Notifications */}
            {activeTab === "direct" && (
              <div>
                {NotificationData.length > 0 ? (
                  NotificationData.filter((d) => d.direct === false).map(
                    (notification, i) => {
                      return (
                        <div
                          key={`notification-${i}+ ${notification.id}`}
                          className="px-4 py-3 hover:bg-[--rightSide-bg-color] transition-colors flex items-start gap-3 border-b last:border-b-0 border-gray-100"
                        >
                          <div className="flex-shrink-0 text-blue-500 text-lg">
                            {notification.type === "task" && <BiTask />}
                            {notification.type === "check-in" && <CiLogin />}
                            {notification.type === "check-out" && <CiLogout />}
                            {notification.type === "announcement" && (
                              <AiOutlineNotification />
                            )}
                            {notification.type === "workshop" && <GrWorkshop />}
                            {notification.type === "payment" && <MdPayments />}
                            {notification.type === "growth" && (
                              <MdOutlineQueryStats />
                            )}
                            {notification.type === "happy-birthday" && (
                              <FaBirthdayCake />
                            )}
                          </div>
                          {/* Notification Content */}
                          <div className="flex-1">
                            <p className="text-xs font-medium text-[--text-color]">
                              {notification.desc || notification.description} :{" "}
                              <span className="text-xs font-medium capitalize text-[--text-color]">
                                {notification.message}
                              </span>
                            </p>
                            <p className="mt-1 text-xs text-gray-500">
                              {Time(notification.created_at)}
                            </p>
                          </div>
                        </div>
                      );
                    }
                  )
                ) : (
                  <div className="px-4 py-3 text-xs text-gray-500 text-center">
                    No new notifications
                  </div>
                )}
              </div>
            )}
            {/* Pending Notifications */}
            {activeTab === "pending" && (
              <div>
                {NotificationData.length > 0 ? (
                  NotificationData.filter((d) => d.direct === true).map(
                    (notification, i) => {
                      return (
                        <div
                          key={`notification-${i}+ ${notification.id}`}
                          className="px-4 py-3 hover:bg-[--rightSide-bg-color] transition-colors flex items-start gap-3 border-b last:border-b-0 border-gray-100"
                        >
                          <div className="flex-shrink-0 text-blue-500 text-lg">
                            {/* Reuse icons */}
                            {notification.type === "task" && <BiTask />}
                            {notification.type === "check-in" && <CiLogin />}
                            {notification.type === "check-out" && <CiLogout />}
                            {notification.type === "announcement" && (
                              <AiOutlineNotification />
                            )}
                            {notification.type === "workshop" && <GrWorkshop />}
                            {notification.type === "payment" && <MdPayments />}
                            {notification.type === "growth" && (
                              <MdOutlineQueryStats />
                            )}
                            {notification.type === "happy-birthday" && (
                              <FaBirthdayCake />
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="text-xs font-medium text-[--text-color]">
                              {notification.desc || notification.description} :{" "}
                              <span className="text-xs font-medium capitalize text-[--text-color]">
                                {notification.message}
                              </span>
                            </p>
                            <p className="mt-1 text-xs text-gray-500">
                              {Time(notification.created_at)}
                            </p>
                          </div>
                        </div>
                      );
                    }
                  )
                ) : (
                  <div className="px-4 py-3 text-xs text-gray-500 text-center">
                    No pending notifications
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
