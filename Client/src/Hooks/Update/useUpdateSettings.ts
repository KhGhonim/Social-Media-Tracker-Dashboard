import { useAppSelector } from "../../Hooks/ReduxHooks";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { UserCurrentStatus } from "../../types/types";
import { ServerUrl, UpdateSettings } from "../../Keys/envKeys";

const useUpdateSettings = (data) => {

  const [Settings, setSettings] = useState({
    password: '',
    confirmPassword: '',
    birthday: '',
    phone_number: '',
    location: '',
    country: '',
  });
  const [ImageForBackEnd, setImageForBackEnd] = useState(null);
  const [ImageForFrontEnd, setImageForFrontEnd] = useState(null);

  const [isLoading, setisLoading] = useState(false);
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings({ ...Settings, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageForBackEnd(file);
      setImageForFrontEnd(URL.createObjectURL(file));
    }
  };

  useEffect(() => {

    setSettings({
      birthday: data.birthday,
      phone_number: data.phone_number,
      location: data.location,
      country: data.country,
      password: '',
      confirmPassword: '',

    })
  }, [data.birthday, data.country, data.location, data.phone_number]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setisLoading(true);

    if (!Settings.password || !Settings.confirmPassword) {
      toast.error("Please fill up the two passwords fields");
      setisLoading(false);
      return

    }

    if (Settings.password !== Settings.confirmPassword) {
      toast.error("Passwords do not match");
      setisLoading(false);
      return

    }

    if (!Settings.birthday || !Settings.phone_number || !Settings.location || !Settings.country) {
      toast.error("Please fill all the fields");
      setisLoading(false);
      return

    }

    if (!ImageForBackEnd || !ImageForFrontEnd) {
      toast.error("Please upload an image");
      setisLoading(false);
      return
    }

    const formData = new FormData();

    formData.append("ImageForBackEnd", ImageForBackEnd);
    formData.append("password", Settings.password);
    formData.append("confirmPassword", Settings.confirmPassword);
    formData.append("birthday", Settings.birthday);
    formData.append("phoneNumber", Settings.phone_number);
    formData.append("location", Settings.location);
    formData.append("country", Settings.country);

    const queryParams = new URLSearchParams({
      projects: JSON.stringify(userCurrentStatus.user.projects)
    })

    try {
      const res = await fetch(`${ServerUrl}/${UpdateSettings}?userId=${userCurrentStatus.user.id}&${queryParams}`,
        {
          method: "PUT",
          credentials: "include",
          body: formData,
        }
      )

      if (!res.ok) {
        toast.error("Failed to update settings");
        setisLoading(false);
        return;
      }

      toast.success("Settings updated successfully");
      setisLoading(false);
      window.location.reload();

    } catch (error) {
      console.log(error);
      setisLoading(false);
    } finally {
      setisLoading(false);
      setSettings({
        password: '',
        confirmPassword: '',
        birthday: '',
        phone_number: '',
        location: '',
        country: '',
      })
    }

  }
  return { handleSubmit, isLoading, Settings, handleChange, handleImageChange, ImageForFrontEnd }
}

export default useUpdateSettings