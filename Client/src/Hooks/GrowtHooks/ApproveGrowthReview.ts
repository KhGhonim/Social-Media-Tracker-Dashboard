import { useAppSelector } from "../../Hooks/ReduxHooks";
import { GrowthRevisionService, ServerUrl } from "../../Keys/envKeys";
import { useState } from "react";
import toast from "react-hot-toast";
import { UserCurrentStatus } from "../../types/types";

const useApproveGrowthReview = () => {
  const [isloading, setisloading] = useState(false);
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);
  const ApproveGrowthReview = async (id, action, userId) => {
    setisloading(true);

    if (!id) {
      toast.error('Please Select a Growth Review');
      setisloading(false);
      return;
    }
    if (!action) {
      toast.error('Please Select an Action');
      setisloading(false);
      return;
    }
    const queryParams = new URLSearchParams({
      projects: JSON.stringify(userCurrentStatus.user.projects),
      role: userCurrentStatus.user.role
    })

    try {
      const res = await fetch(`${ServerUrl}/${GrowthRevisionService}?id=${id}&action=${action}&${queryParams}&userId=${userId}&tl_id=${userCurrentStatus.user.id}`, {
        cache: "no-store",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      })

      if (!res.ok) {
        toast.error('Failed to save the data');
        setisloading(false);
        return;
      }
      const data = await res.json();
      toast.success(data.message);
      setisloading(false);
      window.location.reload();

    } catch (error) {
      console.log(error);
      setisloading(false);
    } finally {
      setisloading(false);

    }

  }
  return { ApproveGrowthReview, setisloading, isloading }
}

export default useApproveGrowthReview