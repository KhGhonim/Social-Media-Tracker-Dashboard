import { GetFetchTeamInsights, ServerUrl } from "../../Keys/envKeys";
import { useState, useEffect } from "react";
import { useAppSelector } from "../ReduxHooks";
import { UserCurrentStatus } from "../../types/types";
import toast from "react-hot-toast";

const useFetchTeamInsights = () => {
  const [FetchTeamInsights, setFetchTeamInsights] = useState([]);
  const [FetchTeamInsightsLoading, setFetchTeamInsightsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      setFetchTeamInsightsLoading(true);
      setError(null);
      const queryParams = new URLSearchParams({
        projects: JSON.stringify(userCurrentStatus.user.projects)
      })
      try {
        const res = await fetch(`${ServerUrl}/${GetFetchTeamInsights}?userID=${userCurrentStatus.user.id}&${queryParams}`, {
          cache: "no-store",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        if (!res.ok) {
          toast.error("Failed to fetch data");
          return;
        }

        const jsonData = await res.json();
        setFetchTeamInsights(jsonData.data);
      } catch (err) {
        setError(err);
        console.error("Failed to fetch data:", err);
      } finally {
        setFetchTeamInsightsLoading(false);
      }
    };

    fetchData();
  }, [userCurrentStatus.user.projects, userCurrentStatus.user.id]);

  return { FetchTeamInsights, FetchTeamInsightsLoading, error };
};

export default useFetchTeamInsights;