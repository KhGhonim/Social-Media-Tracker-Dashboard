import { GetFetchTeamLeadersLeaderboard, ServerUrl } from "../../Keys/envKeys";
import { useState, useEffect } from "react";
import { useAppSelector } from "../ReduxHooks";
import { UserCurrentStatus } from "../../types/types";
import toast from "react-hot-toast";

const FetchTeamLeadersLeaderboard = () => {
  const [FetchTeamLeadersLeaderboardTEData, setFetchTeamLeadersLeaderboardTEData] = useState([]);
  const [FetchTeamLeadersLeaderboardTELoading, setFetchTeamLeadersLeaderboardTELoading] = useState(true);
  const [error, setError] = useState(null);
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);
  useEffect(() => {
    const fetchData = async () => {
      setFetchTeamLeadersLeaderboardTELoading(true);
      setError(null);
      const queryParams = new URLSearchParams({
        projects: JSON.stringify(userCurrentStatus.user.projects)
      })
      try {
        const res = await fetch(`${ServerUrl}/${GetFetchTeamLeadersLeaderboard}?userID=${userCurrentStatus.user.id}&${queryParams}`, {
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
        setFetchTeamLeadersLeaderboardTEData(jsonData.users);
      } catch (err) {
        setError(err);
        console.error("Failed to fetch data:", err);
      } finally {
        setFetchTeamLeadersLeaderboardTELoading(false);
      }
    };

    fetchData();
  }, [userCurrentStatus.user.id, userCurrentStatus.user.projects]);

  return { FetchTeamLeadersLeaderboardTEData, FetchTeamLeadersLeaderboardTELoading, error };
};

export default FetchTeamLeadersLeaderboard;