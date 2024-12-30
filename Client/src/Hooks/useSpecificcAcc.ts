import { AccountData } from "../types/types";
<<<<<<< HEAD
import { GetSpecificAcc, ServerUrl } from "../Logs/envLog";
=======
import { GetSpecificAcc, ServerUrl } from "../Keys/envKeys";
>>>>>>> 1c510ab (Sockets and Updates)
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useSpecificAcc = (accId) => {
  const [data, setData] = useState<AccountData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${ServerUrl}/${GetSpecificAcc}?id=${accId}`, {
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
        setData(jsonData.user);
      } catch (err) {
        setError(err);
        console.error("Failed to fetch data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [accId]);

  return { data, loading, error };
};

export default useSpecificAcc;