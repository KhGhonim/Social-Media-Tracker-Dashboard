import { AddNewUser, ServerUrl } from "../../Keys/envKeys";
import { useState } from "react";
import toast from "react-hot-toast";
const UseAddNewUser = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
    phone_number: "",
    location: "",
    birthday: "",
    country: "",
    username: "",
    projects: [],
  });
  const [isLoading, setisLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setisLoading(true);
    if (
      !formData.email ||
      !formData.password ||
      !formData.role ||
      !formData.username ||
      !formData.projects
    ) {
      toast.error("Please enter name, email, password, role and project");
      return
    }

    try {
      const response = await fetch(`${ServerUrl}/${AddNewUser}`, {
        method: "POST",
        cache: "no-cache",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        toast.error("Failed to create user");
        setisLoading(false);
        return;
      }

      toast.success("User created successfully");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setisLoading(false);
      setFormData({
        email: "",
        password: "",
        role: "",
        phone_number: "",
        location: "",
        birthday: "",
        country: "",
        username: "",
        projects: [],
      });
    }
  };
  return {
    formData,
    setFormData,
    isLoading,
    handleSubmit,
  }
}

export default UseAddNewUser
