import { GetEngagementOverviewTEChart, ServerUrl } from "../../Keys/envKeys";
import { useState, useEffect } from "react";
import { useAppSelector } from "../ReduxHooks";
import { UserCurrentStatus } from "../../types/types";
import toast from "react-hot-toast";

const useEngagementOverviewTEChart = () => {
  const [EngagementOverviewTEChart, setEngagementOverviewTEChart] = useState([]);
  const [EngagementOverviewTEChartLoading, setEngagementOverviewTEChartLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      setEngagementOverviewTEChartLoading(true);
      setError(null);
      const queryParams = new URLSearchParams({
        projects: JSON.stringify(userCurrentStatus.user.projects)
      })
      try {
        const res = await fetch(`${ServerUrl}/${GetEngagementOverviewTEChart}?userID=${userCurrentStatus.user.id}&${queryParams}`, {
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
          return;
        }

        const jsonData = await res.json();
        setEngagementOverviewTEChart(jsonData.data);
      } catch (err) {
        setError(err);
        console.error("Failed to fetch data:", err);
      } finally {
        setEngagementOverviewTEChartLoading(false);
      }
    };

    fetchData();
  }, [userCurrentStatus.user.projects, userCurrentStatus.user.id]);

  return { EngagementOverviewTEChart, EngagementOverviewTEChartLoading, error };
};

export default useEngagementOverviewTEChart;