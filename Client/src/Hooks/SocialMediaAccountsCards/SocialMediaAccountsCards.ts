import { GetSocialMediaAccountsCards, ServerUrl } from "../../Keys/envKeys";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useGetSocialMediaAccountsCards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${ServerUrl}/${GetSocialMediaAccountsCards}`, {
          cache: "no-store",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        const data = await res.json();

        if (!res.ok) {
          console.error("Failed to fetch data");
          toast.error(data.message);
          return
        }

        setData(data.socialAccounts);
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

export default useGetSocialMediaAccountsCards;