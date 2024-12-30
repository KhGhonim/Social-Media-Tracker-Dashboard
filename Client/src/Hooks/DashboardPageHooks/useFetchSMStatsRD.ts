<<<<<<< HEAD
import { GetSpecificUserRD, ServerUrl } from "../../Logs/envLog";
=======
import { GetSpecificUserRD, ServerUrl } from "../../Keys/envKeys";
>>>>>>> 1c510ab (Sockets and Updates)
import { useState, useEffect } from "react";
import { useAppSelector } from "../ReduxHooks";
import { UserCurrentStatus } from "../../types/types";
import toast from "react-hot-toast";

const useFetchSMStatsRD = () => {
  const [RDData, setRDData] = useState([]);
  const [loadingRD, setLoadingRD] = useState(true);
  const [error, setError] = useState(null);
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      setLoadingRD(true);
      setError(null);
      try {
        const res = await fetch(`${ServerUrl}/${GetSpecificUserRD}?userID=${userCurrentStatus.user.id}`, {
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
        setRDData(jsonData.data);
      } catch (err) {
        setError(err);
        console.error("Failed to fetch data:", err);
      } finally {
        setLoadingRD(false);
      }
    };

    fetchData();
  }, [userCurrentStatus.user.id]);

  return { RDData, loadingRD, error };
};

export default useFetchSMStatsRD;