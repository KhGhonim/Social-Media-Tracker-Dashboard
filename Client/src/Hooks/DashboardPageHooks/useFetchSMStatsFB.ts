import { GetSpecificUserFB, ServerUrl } from "../../Keys/envKeys";
import { useState, useEffect } from "react";
import { useAppSelector } from "../ReduxHooks";
import { UserCurrentStatus } from "../../types/types";
import toast from "react-hot-toast";

const useFetchSMStatsTW = () => {
  const [fbDATA, setfbDATA] = useState([]);
  const [loadingFB, setLoadingFB] = useState(true);
  const [error, setError] = useState(null);
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      setLoadingFB(true);
      setError(null);
      try {
        const res = await fetch(`${ServerUrl}/${GetSpecificUserFB}?userID=${userCurrentStatus.user.id}`, {
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
        setfbDATA(jsonData.data);
      } catch (err) {
        setError(err);
        console.error("Failed to fetch data:", err);
      } finally {
        setLoadingFB(false);
      }
    };

    fetchData();
  }, [userCurrentStatus.user.id]);

  return { fbDATA, loadingFB, error };
};

export default useFetchSMStatsTW;