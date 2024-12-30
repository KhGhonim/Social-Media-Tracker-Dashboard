<<<<<<< HEAD
import { ServerUrl, userCheckOut } from "../../Logs/envLog";
=======
import { ServerUrl, userCheckOut } from "../../Keys/envKeys";
>>>>>>> 1c510ab (Sockets and Updates)
import toast from "react-hot-toast";
import { useAppSelector } from "../ReduxHooks";
import { UserCurrentStatus } from "../../types/types";

const useCheckOut = () => {
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);

  const HandleCheckOut = async () => {
    try {
<<<<<<< HEAD
      const res = await fetch(`${ServerUrl}/${userCheckOut}?isCheckedIn=checkOut`, {
=======
      const QuerryParams = new URLSearchParams({
        projects: JSON.stringify(userCurrentStatus.user.projects),
      });

      const res = await fetch(`${ServerUrl}/${userCheckOut}?isCheckedIn=checkOut&${QuerryParams}`, {
>>>>>>> 1c510ab (Sockets and Updates)
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