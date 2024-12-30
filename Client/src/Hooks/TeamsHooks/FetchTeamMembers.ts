import { GetFetchTeamMembersountsTeamLeader, ServerUrl } from "../../Keys/envKeys";
import { useState, useEffect } from "react";
import { useAppSelector } from "../ReduxHooks";
import { UserCurrentStatus } from "../../types/types";
import toast from "react-hot-toast";

const FetchTeamMembers = () => {
  const [FetchTeamMembersTeamLeaders, setFetchTeamMembersTeamLeaders] = useState([]);
  const [FetchTeamMembersTeamLeaderLoading, setFetchTeamMembersTeamLeaderLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);
  useEffect(() => {
    const fetchData = async () => {
      setFetchTeamMembersTeamLeaderLoading(true);
      setError(null);
      const queryParams = new URLSearchParams({
        projects: JSON.stringify(userCurrentStatus.user.projects),
      });

      try {

        const res = await fetch(`${ServerUrl}/${GetFetchTeamMembersountsTeamLeader}?userID=${userCurrentStatus.user.id}&${queryParams}`, {
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
        setFetchTeamMembersTeamLeaders(jsonData.accounts);
      } catch (err) {
        setError(err);
        console.error("Failed to fetch data:", err);
      } finally {
        setFetchTeamMembersTeamLeaderLoading(false);
      }
    };

    fetchData();
  }, [userCurrentStatus.user.id, userCurrentStatus.user.projects]);

  return { FetchTeamMembersTeamLeaders, FetchTeamMembersTeamLeaderLoading, error };
};

export default FetchTeamMembers;