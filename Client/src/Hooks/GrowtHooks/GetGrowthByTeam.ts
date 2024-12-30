<<<<<<< HEAD
import { GetGetGrowthByTeamTE, ServerUrl } from "../../Logs/envLog";
=======
import { GetGetGrowthByTeamTE, ServerUrl } from "../../Keys/envKeys";
>>>>>>> 1c510ab (Sockets and Updates)
import { useState, useEffect } from "react";
import { useAppSelector } from "../ReduxHooks";
import { UserCurrentStatus } from "../../types/types";
import toast from "react-hot-toast";

const GetGrowthByTeam = () => {
  const [GetGrowthByTeamTEData, setGetGrowthByTeamTEData] = useState([]);
  const [GetGrowthByTeamTELoading, setGetGrowthByTeamTELoading] = useState(true);
  const [error, setError] = useState(null);
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);
  useEffect(() => {
    const fetchData = async () => {
      setGetGrowthByTeamTELoading(true);
      setError(null);
      const queryParams = new URLSearchParams({
        projects: JSON.stringify(userCurrentStatus.user.projects)
      })
      try {
        const res = await fetch(`${ServerUrl}/${GetGetGrowthByTeamTE}?userID=${userCurrentStatus.user.id}&${queryParams}`, {
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
        setGetGrowthByTeamTEData(jsonData.Growth);
      } catch (err) {
        setError(err);
        console.error("Failed to fetch data:", err);
      } finally {
        setGetGrowthByTeamTELoading(false);
      }
    };

    fetchData();
  }, [userCurrentStatus.user.id, userCurrentStatus.user.projects]);

  return { GetGrowthByTeamTEData, GetGrowthByTeamTELoading, error };
};

export default GetGrowthByTeam;