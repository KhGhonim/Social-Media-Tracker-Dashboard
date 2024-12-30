import { GetSpecificUserPerformanceChart, ServerUrl } from "../../Keys/envKeys";
import { useState, useEffect } from "react";
import { useAppSelector } from "../ReduxHooks";
import { UserCurrentStatus } from "../../types/types";
import toast from "react-hot-toast";


const usePerformanceChart = () => {
  const [PerformanceChart, setPerformanceChart] = useState([]);
  const [PerformanceChartLoading, setPerformanceChartLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);
  useEffect(() => {
    const fetchData = async () => {
      setPerformanceChartLoading(true);
      setError(null);
      try {
        const res = await fetch(`${ServerUrl}/${GetSpecificUserPerformanceChart}?userID=${userCurrentStatus.user.id}`, {
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
        setPerformanceChart(jsonData.data);
      } catch (err) {
        setError(err);
        console.error("Failed to fetch data:", err);
      } finally {
        setPerformanceChartLoading(false);
      }
    };

    fetchData();
  }, [userCurrentStatus.user.id]);

  return { PerformanceChart, PerformanceChartLoading, error };
};

export default usePerformanceChart;