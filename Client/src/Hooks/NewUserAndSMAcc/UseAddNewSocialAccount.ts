<<<<<<< HEAD
import { ServerUrl, CheckNewAccUser, AddNewSocialAcc } from "../../Logs/envLog";
=======
import { ServerUrl, CheckNewAccUser, AddNewSocialAcc } from "../../Keys/envKeys";
>>>>>>> 1c510ab (Sockets and Updates)
import { useState } from "react";
import toast from "react-hot-toast";
import { useAppSelector } from "../ReduxHooks";
import { UserCurrentStatus } from "../../types/types";

/**
 * Custom hook for managing the creation of a new social account.
 * 
 * Provides state management for user input fields and handles the submission
 * of user data to the server. Displays success or error messages based on
 * the server response.
 * 
 * @returns {Object} - An object containing:
 *   - formData: State containing user input values like email, password, role, etc.
 *   - setFormData: Function to update formData state.
 *   - isLoading: Boolean indicating whether the submission is in progress.
 *   - handleSubmit: Function to handle form submission, making a POST request to create a new user.
 */
const UseAddNewSocialAccount = () => {
  const [formData, setFormData] = useState({
    region: "",
    country: "",
    platform: "",
    accountName: "",
    accountBio: "",
    accountUrl: "",
    username: "",
    email: "",
    password: "",
    mobileNo: "",
    state: "",
    category: "",
  });
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);

  const [isLoading, setisLoading] = useState(false);
  console.log(formData)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setisLoading(true);
    if (
      !formData.accountBio ||
      !formData.accountName ||
      !formData.accountUrl ||
      !formData.country ||
      !formData.email ||
      !formData.mobileNo ||
      !formData.password ||
      !formData.platform ||
      !formData.region ||
      !formData.username ||
      !formData.category ||
      !formData.state
    ) {
      toast.error("Please fill all the fields");
      setisLoading(false);
      return;
    }

    try {
      // Check if the user name is already exists
      const existingUser = await fetch(`${ServerUrl}/${CheckNewAccUser}`, {
        method: "POST",
        cache: "no-cache",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: formData.username }),
      });

      if (existingUser.ok) {
        toast.error("User already exists");
        setisLoading(false)

        return;
      }
      // Create a new account if it doesn't already exist
      const response = await fetch(`${ServerUrl}/${AddNewSocialAcc}?userId=${userCurrentStatus?.user.id}`, {
        method: "POST",
        cache: "no-cache",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        toast.error("Failed to create account");
        setisLoading(false);
        return;
      }

      const data = await response.json();

      toast.success(data.message);

      (e.target as HTMLFormElement).reset();
      setisLoading(false);
    } catch (error) {
      toast.error(error.message);
      setisLoading(false);
      (e.target as HTMLFormElement).reset();

    } finally {
      setisLoading(false);
      (e.target as HTMLFormElement).reset();

    }
  }
  return { setFormData, isLoading, handleSubmit };
}

export default UseAddNewSocialAccount