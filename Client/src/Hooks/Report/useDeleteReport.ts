import { DeleteReport, ServerUrl } from "../../Keys/envKeys";
import { useState } from "react";
import toast from "react-hot-toast";

const useDeleteReport = () => {
  const [Isloading, setIsloading] = useState(false);

  const HandleDeleteReport = async (id) => {
    setIsloading(true);
    try {
      const res = await fetch(`${ServerUrl}${DeleteReport}?id=${id}`, {
        cache: "no-store",
        method: "DELETE",
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
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
        setIsloading(false);
        return
      }
      toast.success(data.message);
      setIsloading(false);
      window.location.reload();

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }

  }
  return { HandleDeleteReport, Isloading };
}

export default useDeleteReport