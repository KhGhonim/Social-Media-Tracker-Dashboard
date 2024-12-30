import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../ReduxHooks";
<<<<<<< HEAD
import { LogOut, ServerUrl } from "../../Logs/envLog";
=======
import { LogOut, ServerUrl } from "../../Keys/envKeys";
>>>>>>> 1c510ab (Sockets and Updates)
import { SignOut } from "../../Redux/userSlice";

const useSignOut = () => {
  const dispatch = useAppDispatch()
  const nevigate = useNavigate()

  const HandleSignOut = async () => {
    try {
      const res = await fetch(`${ServerUrl}/${LogOut}`, {
        method: "POST",
        credentials: "include",
      });
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