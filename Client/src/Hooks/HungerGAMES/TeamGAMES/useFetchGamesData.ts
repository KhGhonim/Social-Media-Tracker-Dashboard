import { GetFetchGameDetails, ServerUrl } from "../../../Keys/envKeys";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useFetchGamesData = (IsLoading) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${ServerUrl}${GetFetchGameDetails}`, {
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
        setData(jsonData.data);
      } catch (err) {
        setError(err);
        console.error("Failed to fetch data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [IsLoading]);

  return { data, loading, error };
};

export default useFetchGamesData;