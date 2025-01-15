import { GetSpecificUserIG, ServerUrl } from "../../Keys/envKeys";
import { useState, useEffect } from "react";
import { useAppSelector } from "../ReduxHooks";
import { UserCurrentStatus } from "../../types/types";
import toast from "react-hot-toast";

const useFetchSMStatsIG = () => {
  const [IGData, setIGData] = useState([]);
  const [loadingIG, setLoadingIG] = useState(true);
  const [error, setError] = useState(null);
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      setLoadingIG(true);
      setError(null);
      try {
        const res = await fetch(`${ServerUrl}/${GetSpecificUserIG}?userID=${userCurrentStatus.user.id}`, {
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
        setIGData(jsonData.data);
      } catch (err) {
        setError(err);
        console.error("Failed to fetch data:", err);
      } finally {
        setLoadingIG(false);
      }
    };

    fetchData();
  }, [userCurrentStatus.user.id]);

  return { IGData, loadingIG, error };
};

export default useFetchSMStatsIG;