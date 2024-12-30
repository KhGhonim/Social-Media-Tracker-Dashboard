<<<<<<< HEAD
import { ServerUrl, UpdateSMAcc } from "../../Logs/envLog";
=======
import { ServerUrl, UpdateSMAcc } from "../../Keys/envKeys";
>>>>>>> 1c510ab (Sockets and Updates)
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { UserCurrentStatus } from "../../types/types";
import { useAppSelector } from "../ReduxHooks";

const useUpdateAcc = (data) => {
  const [formData, setFormData] = useState({
    acc_bio: data.acc_bio,
    acc_email: data.acc_email,
    acc_mobile: data.acc_mobile,
    acc_name: data.acc_name,
    acc_state: data.acc_state,
    acc_username: data.acc_username,
    acc_password_hash: data.acc_password_hash,
    country: data.country,
    platform: data.platform,
    region: data.region,
    acc_category: data.acc_category,
    id: data.id
  });
  const [isEditing, setIsEditing] = useState(false);
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);
  useEffect(() => {
    setFormData(
      {
        acc_state: data.acc_state,
        acc_name: data.acc_name,
        acc_bio: data.acc_bio,
        acc_username: data.acc_username,
        acc_email: data.acc_email,
        acc_mobile: data.acc_mobile,
        acc_password_hash: data.acc_password_hash,
        country: data.country,
        platform: data.platform,
        region: data.region,
        acc_category: data.acc_category,
        id: data.id
      }
    );
  }, [data]);

  const handleSubmit = async (eo) => {
    eo.preventDefault();
    if (!formData.acc_bio || !formData.acc_email || !formData.acc_state ||
      !formData.acc_mobile || !formData.acc_name || !formData.acc_password_hash ||
      !formData.acc_username || !formData.country || !formData.platform || !formData.region) {
      toast.error("Please fill all the fields");
      return
    }

    try {
      const res = await fetch(`${ServerUrl}/${UpdateSMAcc}?id=${userCurrentStatus.user.id}&accId=${data.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        toast.error("Failed to update account");
        return;
      }
      toast.success("Account updated successfully");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }

  }
  return { handleSubmit, isEditing, formData, setFormData, setIsEditing }
}

export default useUpdateAcc