<<<<<<< HEAD
import { GetGrowthForAllUsers, ServerUrl } from "../../Logs/envLog";
=======
import { GetGrowthForAllUsers, ServerUrl } from "../../Keys/envKeys";
>>>>>>> 1c510ab (Sockets and Updates)
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useFetchAnalytics = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${ServerUrl}/${GetGrowthForAllUsers}`, {
          cache: "no-store",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        if (!res.ok) {
          toast.error("Failed to fetch Analytics");
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
  }, []);

  return { data, loading, error };
};

export default useFetchAnalytics;
