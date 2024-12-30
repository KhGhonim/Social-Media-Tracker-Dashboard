import { ServerUrl, userCheckIn } from "../../Keys/envKeys";
import toast from "react-hot-toast";
import { useAppSelector } from "../ReduxHooks";
import { UserCurrentStatus } from "../../types/types";

const useCheckIn = () => {
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);

  const HandleCheckIn = async () => {
    try {
      const QuerryParams = new URLSearchParams({
        projects: JSON.stringify(userCurrentStatus.user.projects),
      });
      const res = await fetch(`${ServerUrl}/${userCheckIn}?isCheckedIn=checkIn&${QuerryParams}`, {
        method: "POST",
        cache: "no-cache",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: userCurrentStatus.user.id }),
      })

      if (!res.ok) {
        toast.error("Failed to check in");
        return;
      }

      toast.success("Check In successfully");
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }

  }
  return { HandleCheckIn }
}

export default useCheckIn