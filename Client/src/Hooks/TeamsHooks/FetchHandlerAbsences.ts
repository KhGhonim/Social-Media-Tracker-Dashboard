<<<<<<< HEAD
import { GetFetchHandlerAbsencesTE, ServerUrl } from "../../Logs/envLog";
=======
import { GetFetchHandlerAbsencesTE, ServerUrl } from "../../Keys/envKeys";
>>>>>>> 1c510ab (Sockets and Updates)
import { useState, useEffect } from "react";
import { useAppSelector } from "../ReduxHooks";
import { UserCurrentStatus } from "../../types/types";
import toast from "react-hot-toast";

const FetchHandlerAbsences = () => {
  const [FetchHandlerAbsencesTEData, setFetchHandlerAbsencesTEData] = useState([]);
  const [FetchHandlerAbsencesTELoading, setFetchHandlerAbsencesTELoading] = useState(true);
  const [error, setError] = useState(null);
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);
  useEffect(() => {
    const fetchData = async () => {
      setFetchHandlerAbsencesTELoading(true);
      setError(null);
      const queryParams = new URLSearchParams({
        projects: JSON.stringify(userCurrentStatus.user.projects)
      })
      try {
        const res = await fetch(`${ServerUrl}/${GetFetchHandlerAbsencesTE}?userID=${userCurrentStatus.user.id}&${queryParams}`, {
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
        setFetchHandlerAbsencesTEData(jsonData.accounts);
      } catch (err) {
        setError(err);
        console.error("Failed to fetch data:", err);
      } finally {
        setFetchHandlerAbsencesTELoading(false);
      }
    };

    fetchData();
  }, [userCurrentStatus.user.id, userCurrentStatus.user.projects]);

  return { FetchHandlerAbsencesTEData, FetchHandlerAbsencesTELoading, error };
};

export default FetchHandlerAbsences;