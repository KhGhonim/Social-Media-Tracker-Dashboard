import { Login, ServerUrl } from "../../Keys/envKeys";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../ReduxHooks";
import { signInSuccess } from "../../Redux/userSlice";

const UseLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setloading(true);
    if (!email || !password) {
      toast.error("Please enter email and password");
      setloading(false);
      return;
    }

    try {
      const response = await fetch(`${ServerUrl}/${Login}`, {
        method: "POST",
        cache: "no-cache",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      // Handle rate limit response
      if (response.status === 429) {
        const retryAfter = response.headers.get('retry-after');
        const minutes = retryAfter ? Math.ceil(parseInt(retryAfter) / 60) : 15;

        toast.error(
          `Too many login attempts. Please try again in ${minutes} minutes.`
        );
        setloading(false);
        return;
      }

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message);
        setloading(false);
        return;
      }
      dispatch(signInSuccess(data));
      toast.success(data.message);
      navigate("/");
    } catch (error) {
      toast.error("Login failed: " + error.message);
      setloading(false);
    } finally {
      setEmail("");
      setPassword("");
      setloading(false);
    }
  };
  return {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    handleSubmit,
  }
}

export default UseLogin