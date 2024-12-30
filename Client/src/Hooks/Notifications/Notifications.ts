import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { useAppSelector } from "../../Hooks/ReduxHooks";
import { UserCurrentStatus } from "../../types/types";
import {  ServerUrl } from "../../Keys/envKeys";

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
      transports: ["websocket"],
    });

    socket.emit("join", userCurrentStatus.user.id);

    socket.on("newNotification", (notification) => {
      setNotificationData((prev) => [...prev, notification]);
    });

    return () => {
      socket.disconnect();
    };
  }, [userCurrentStatus.user.id]);


  // useEffect(() => {
  //   if (userCurrentStatus.user.role === "Team Leader") {
  //     const fetchNotifications = async () => {
  //       try {
  //         const response = await fetch(
  //           `${ServerUrl}${GetNotificationsForTeamLeader}${userCurrentStatus.user.id}`,
  //           {
  //             method: 'GET',
  //             credentials: 'include'
  //           }
  //         );
  //         const data = await response.json();
  //         setNotificationData((prev) => [...data, ...prev]);
  //         setLoading(false);
  //       } catch (error) {
  //         console.error('Error fetching notifications:', error);
  //       }
  //     };

  //     if (userCurrentStatus?.user?.id) {
  //       fetchNotifications();
  //     }
  //   } else {
  //     const fetchNotifications = async () => {
  //       try {
  //         const response = await fetch(
  //           `${ServerUrl}${GetNotificationsPerUser}${userCurrentStatus.user.id}`,
  //           {
  //             method: 'GET',
  //             credentials: 'include'
  //           }
  //         );
  //         const data = await response.json();
  //         setNotificationData((prev) => [...data, ...prev]);
  //         setLoading(false);
  //       } catch (error) {
  //         console.error('Error fetching notifications:', error);
  //       }
  //     };

  //     if (userCurrentStatus?.user?.id) {
  //       fetchNotifications();
  //     }
  //   }


  // }, [userCurrentStatus.user.id, userCurrentStatus.user.role]);


  return {
    NotificationData, unreadedNotifications, setNotificationData,
    loading, setLoading, isOpen, setIsOpen, id: userCurrentStatus?.user?.id
  };
};

export default useFetchNotifications;