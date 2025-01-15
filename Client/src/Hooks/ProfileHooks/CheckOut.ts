import { ServerUrl, userCheckOut } from "../../Keys/envKeys";
import toast from "react-hot-toast";
import { useAppSelector } from "../ReduxHooks";
import { UserCurrentStatus } from "../../types/types";

const useCheckOut = () => {
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);

  const HandleCheckOut = async () => {
    try {
      const QuerryParams = new URLSearchParams({
        projects: JSON.stringify(userCurrentStatus.user.projects),
        role : userCurrentStatus.user.role
      });

      const res = await fetch(`${ServerUrl}/${userCheckOut}?isCheckedIn=checkOut&${QuerryParams}`, {
        method: "POST",
        cache: "no-cache",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: userCurrentStatus.user.id }),
      })

      if (!res.ok) {
        toast.error("Failed to check out");
        return;
      }

      toast.success("Checked out successfully");
      window.location.reload();
    
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }

  }
  return { HandleCheckOut }
}

export default useCheckOut