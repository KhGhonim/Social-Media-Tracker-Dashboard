import { GetFetchActiveAccountsOperations, ServerUrl } from "../../Keys/envKeys";
import { useState, useEffect } from "react";
import { useAppSelector } from "../ReduxHooks";
import { UserCurrentStatus } from "../../types/types";
import toast from "react-hot-toast";

const FetchActiveAccountsOperations = () => {
  const [FetchActiveAccountsOperationsData, setFetchActiveAccountsOperationsData] = useState([]);
  const [FetchActiveAccountsOperationsLoading, setFetchActiveAccountsOperationsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);
  useEffect(() => {
    const fetchData = async () => {
      setFetchActiveAccountsOperationsLoading(true);
      setError(null);
      const queryParams = new URLSearchParams({
        projects: JSON.stringify(userCurrentStatus.user.projects)
      })
      try {
        const res = await fetch(`${ServerUrl}${GetFetchActiveAccountsOperations}?userID=${userCurrentStatus.user.id}&${queryParams}`, {
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
          return
        }

        const jsonData = await res.json();
        setFetchActiveAccountsOperationsData(jsonData.accounts);
      } catch (err) {
        setError(err);
        console.error("Failed to fetch data:", err);
      } finally {
        setFetchActiveAccountsOperationsLoading(false);
      }
    };

    fetchData();
  }, [userCurrentStatus.user.id, userCurrentStatus.user.projects]);

  return { FetchActiveAccountsOperationsData, FetchActiveAccountsOperationsLoading, error };
};

export default FetchActiveAccountsOperations