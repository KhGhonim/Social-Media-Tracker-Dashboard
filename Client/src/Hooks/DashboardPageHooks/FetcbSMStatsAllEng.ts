<<<<<<< HEAD
import { GetSpecificUserAllENG, ServerUrl } from "../../Logs/envLog";
=======
import { GetSpecificUserAllENG, ServerUrl } from "../../Keys/envKeys";
>>>>>>> 1c510ab (Sockets and Updates)
import { useState, useEffect } from "react";
import { useAppSelector } from "../ReduxHooks";
import { UserCurrentStatus } from "../../types/types";
import toast from "react-hot-toast";

const FetcbSMStatsAllENG = () => {
  const [AllENGData, setAllENGData] = useState([]);
  const [AllENGLoading, setAllENGLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);
  useEffect(() => {
    const fetchData = async () => {
      setAllENGLoading(true);
      setError(null);
      try {
        const res = await fetch(`${ServerUrl}/${GetSpecificUserAllENG}?userID=${userCurrentStatus.user.id}`, {
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
        setAllENGData(jsonData.data);
      } catch (err) {
        setError(err);
        console.error("Failed to fetch data:", err);
      } finally {
        setAllENGLoading(false);
      }
    };

    fetchData();
  }, [userCurrentStatus.user.id]);

  return { AllENGData, AllENGLoading, error };
};

export default FetcbSMStatsAllENG;