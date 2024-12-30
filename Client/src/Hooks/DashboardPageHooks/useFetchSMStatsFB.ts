<<<<<<< HEAD
import { GetSpecificUserFB, ServerUrl } from "../../Logs/envLog";
=======
import { GetSpecificUserFB, ServerUrl } from "../../Keys/envKeys";
>>>>>>> 1c510ab (Sockets and Updates)
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