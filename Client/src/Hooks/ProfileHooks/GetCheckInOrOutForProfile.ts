import { GetCheckInOrOutForProfileAPI, ServerUrl } from "../../Keys/envKeys";
import { useState, useEffect } from "react";
import {  useAppSelector } from "../ReduxHooks";
import { UserCurrentStatus } from "../../types/types";
import toast from "react-hot-toast";


const GetCheckInOrOutForProfile = () => {
  const [CheckInOrOutForProfile, setCheckInOrOutForProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);

  useEffect(() => {
    const fetchCheckInOrOutForProfile = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${ServerUrl}/${GetCheckInOrOutForProfileAPI}?userId=${userCurrentStatus.user.id}`, {
          cache: "no-store",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        if (!res.ok) {
          toast.error("Failed to fetch data:");
          return

        }

        const jsonData = await res.json();
        setCheckInOrOutForProfile(jsonData.data[0].is_active
        );
      } catch (err) {
        setError(err);
        console.error("Failed to fetch data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCheckInOrOutForProfile();
  }, [userCurrentStatus.user.id]);

  return { CheckInOrOutForProfile, loading, error };
};



export default GetCheckInOrOutForProfile;

