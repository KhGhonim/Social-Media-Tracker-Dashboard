<<<<<<< HEAD
import { GetSpecificUserAllFollowing, ServerUrl } from "../../Logs/envLog";
=======
import { GetSpecificUserAllFollowing, ServerUrl } from "../../Keys/envKeys";
>>>>>>> 1c510ab (Sockets and Updates)
import { useState, useEffect } from "react";
import { useAppSelector } from "../ReduxHooks";
import { UserCurrentStatus } from "../../types/types";
import toast from "react-hot-toast";

const FetcbSMStatsAllFollowing = () => {
  const [AllFollowingData, setAllFollowingData] = useState([]);
  const [AllFollowingsLoading, setAllFollowingsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);
  useEffect(() => {
    const fetchData = async () => {
      setAllFollowingsLoading(true);
      setError(null);
      try {
        const res = await fetch(`${ServerUrl}/${GetSpecificUserAllFollowing}?userID=${userCurrentStatus.user.id}`, {
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
        setAllFollowingData(jsonData.data);
      } catch (err) {
        setError(err);
        console.error("Failed to fetch data:", err);
      } finally {
        setAllFollowingsLoading(false);
      }
    };

    fetchData();
  }, [userCurrentStatus.user.id]);

  return { AllFollowingData, AllFollowingsLoading, error };
};

export default FetcbSMStatsAllFollowing;