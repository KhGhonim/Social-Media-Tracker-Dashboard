import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../ReduxHooks";
import { LogOut, ServerUrl } from "../../Keys/envKeys";
import { SignOut } from "../../Redux/userSlice";
import toast from "react-hot-toast";

const useSignOut = () => {
  const dispatch = useAppDispatch()
  const nevigate = useNavigate()

  const HandleSignOut = async () => {
    try {
      const res = await fetch(`${ServerUrl}/${LogOut}`, {
        method: "POST",
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
        console.log(data.message);
      } else {
        dispatch(SignOut());
        nevigate("/login");
      }
    } catch (error) {
      error.message = "Failed to sign out";
    }
  };
  return { HandleSignOut }
}

export default useSignOut