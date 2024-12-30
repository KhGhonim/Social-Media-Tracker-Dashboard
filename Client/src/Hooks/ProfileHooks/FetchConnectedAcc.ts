import { useAppSelector } from "../../Hooks/ReduxHooks";
import { ServerUrl, GetConnectedAcc } from "../../Keys/envKeys";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { UserCurrentStatus } from "../../types/types";

const useFetchConnectedAcc = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `${ServerUrl}/${GetConnectedAcc}?userId=${userCurrentStatus.user.id}`,
          {
            cache: "no-store",
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );

        if (!res.ok) {
          toast.error("Failed to fetch connected accounts");
          return
        }

        const jsonData = await res.json();
        setData(jsonData.data);
      } catch (err) {
        setError(err);
        console.error("Failed to fetch data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userCurrentStatus.user.id]);

  return { data, loading, error };
};

export default useFetchConnectedAcc;
