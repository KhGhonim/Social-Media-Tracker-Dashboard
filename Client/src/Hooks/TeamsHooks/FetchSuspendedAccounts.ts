<<<<<<< HEAD
import { GetSuspendedAccountsTeamLeader, ServerUrl } from "../../Logs/envLog";
=======
import { GetSuspendedAccountsTeamLeader, ServerUrl } from "../../Keys/envKeys";
>>>>>>> 1c510ab (Sockets and Updates)
import { useState, useEffect } from "react";
import { useAppSelector } from "../ReduxHooks";
import { UserCurrentStatus } from "../../types/types";
import toast from "react-hot-toast";

const FetcbSMSuspendedAccounts = () => {
  const [SuspendedAccTeamLeaders, setSuspendedAccTeamLeaders] = useState([]);
  const [SuspendedAccTeamLeaderLoading, setSuspendedAccTeamLeaderLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);
  useEffect(() => {
    const fetchData = async () => {
      setSuspendedAccTeamLeaderLoading(true);
      setError(null);
      const queryParams = new URLSearchParams({
        projects: JSON.stringify(userCurrentStatus.user.projects),
      });

      try {

        const res = await fetch(`${ServerUrl}/${GetSuspendedAccountsTeamLeader}?userID=${userCurrentStatus.user.id}&${queryParams}`, {
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
        setSuspendedAccTeamLeaders(jsonData.accounts);
      } catch (err) {
        setError(err);
        console.error("Failed to fetch data:", err);
      } finally {
        setSuspendedAccTeamLeaderLoading(false);
      }
    };

    fetchData();
  }, [userCurrentStatus.user.id, userCurrentStatus.user.projects]);

  return { SuspendedAccTeamLeaders, SuspendedAccTeamLeaderLoading, error };
};

export default FetcbSMSuspendedAccounts;