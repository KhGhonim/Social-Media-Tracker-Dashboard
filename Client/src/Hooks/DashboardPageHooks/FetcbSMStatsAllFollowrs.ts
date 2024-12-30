<<<<<<< HEAD
import { GetSpecificUserAllFollowers, ServerUrl } from "../../Logs/envLog";
=======
import { GetSpecificUserAllFollowers, ServerUrl } from "../../Keys/envKeys";
>>>>>>> 1c510ab (Sockets and Updates)
import { useState, useEffect } from "react";
import { useAppSelector } from "../ReduxHooks";
import { UserCurrentStatus } from "../../types/types";
import toast from "react-hot-toast";

const FetcbSMStatsAllFollowrs = () => {
  const [AllFollowersData, setAllFollowersData] = useState([]);
  const [AllFollowrsLoading, setAllFollowrsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);
  useEffect(() => {
    const fetchData = async () => {
      setAllFollowrsLoading(true);
      setError(null);
      try {
        const res = await fetch(`${ServerUrl}/${GetSpecificUserAllFollowers}?userID=${userCurrentStatus.user.id}`, {
          cache: "no-store",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        if (!res.ok) {
          toast.error("Failed to fetch data");
          return
        }

        const jsonData = await res.json();
        setAllFollowersData(jsonData.data);
      } catch (err) {
        setError(err);
        console.error("Failed to fetch data:", err);
      } finally {
        setAllFollowrsLoading(false);
      }
    };

    fetchData();
  }, [userCurrentStatus.user.id]);

  return { AllFollowersData, AllFollowrsLoading, error };
};

export default FetcbSMStatsAllFollowrs;