import { GetSpecificUserAllFollowers, ServerUrl } from "../../Keys/envKeys";
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
        if (res.status === 429) {
          const retryAfter = res.headers.get('retry-after');
          const minutes = retryAfter ? Math.ceil(parseInt(retryAfter) / 60) : 15;

          toast.error(
            `Too many requests. Please try again in ${minutes} minutes.`
          );
          return;
        }

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