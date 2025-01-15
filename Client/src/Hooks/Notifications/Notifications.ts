import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { useAppSelector } from "../../Hooks/ReduxHooks";
import { UserCurrentStatus } from "../../types/types";
import { GetNotificationsForTeamLeader, GetNotificationsPerUser, ServerUrl } from "../../Keys/envKeys";

const useFetchNotifications = () => {
  const [NotificationData, setNotificationData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);

  const unreadedNotifications = NotificationData.filter((notification) => !notification.is_read).length;
  // Connect to Socket.IO
  useEffect(() => {
    const socket = io(ServerUrl, {
      transports: ["websocket", "polling"],
      reconnection: true,
      reconnectionDelay: 5000,
      reconnectionAttempts: Infinity
    });

    socket.emit("join", userCurrentStatus.user.id);

    socket.on("newNotification", (notification) => {
      setNotificationData((prev) => [...prev, notification]);
    });

    return () => {
      socket.disconnect();
      socket.off('newNotification');
    };
  }, [userCurrentStatus.user.id]);



  const URL = userCurrentStatus.user.role === "Team Leader" ?
    `${ServerUrl}${GetNotificationsForTeamLeader}${userCurrentStatus.user.id}` :
    `${ServerUrl}${GetNotificationsPerUser}${userCurrentStatus.user.id}`

  const fetchNotifications = async () => {
    try {
      const response = await fetch(
        URL,
        {
          method: 'GET',
          credentials: 'include'
        }
      );
      const data = await response.json();
      setNotificationData([...data]);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  return {
    NotificationData, unreadedNotifications, setNotificationData,
    loading, setLoading, isOpen, setIsOpen, id: userCurrentStatus?.user?.id, fetchNotifications, Role: userCurrentStatus.user.role
  };
};

export default useFetchNotifications;