import { useAppSelector } from "../../Hooks/ReduxHooks";
import { ServerUrl, UploadAchievements } from "../../Keys/envKeys";
import { useState } from "react";
import toast from "react-hot-toast";
import { UserCurrentStatus } from "../../types/types";

const useUploadAchievments = () => {
  const [achievementForm, setachievementForm] = useState({
    description: "",
    platform: "",
    country: "",
    accountName: "",
    accountUrl: "",
    contentDirection: "",
    Date: "",
    Likes: "",
    Comments: "",
    Shares: "",
  });
  const [ImageForBackEnd, setImageForBackEnd] = useState(null);
  const [ImageForFrontEnd, setImageForFrontEnd] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setachievementForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageForBackEnd(file);
      setImageForFrontEnd(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setisLoading(true);
    if (!ImageForBackEnd || !ImageForFrontEnd) {
      toast.error("Please upload an image");
      setisLoading(false);
      return;
    }

    if (
      !achievementForm.description ||
      !achievementForm.platform ||
      !achievementForm.country ||
      !achievementForm.accountName ||
      !achievementForm.accountUrl ||
      !achievementForm.contentDirection ||
      !achievementForm.Date
    ) {
      toast.error("Please fill in all fields");
      setisLoading(false);
      return;
    }

    if (
      isNaN(Number(achievementForm.Likes)) ||
      isNaN(Number(achievementForm.Comments)) ||
      isNaN(Number(achievementForm.Shares))
    ) {
      toast.error("Likes, Comments, and Shares must be valid numbers");
      setisLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("ImageForBackEnd", ImageForBackEnd);
    formData.append("Comments", achievementForm.Comments);
    formData.append("Shares", achievementForm.Shares);
    formData.append("Likes", achievementForm.Likes);
    formData.append("Date", achievementForm.Date);
    formData.append("contentDirection", achievementForm.contentDirection);
    formData.append("accountUrl", achievementForm.accountUrl);
    formData.append("accountName", achievementForm.accountName);
    formData.append("country", achievementForm.country);
    formData.append("platform", achievementForm.platform);
    formData.append("description", achievementForm.description);

    const queryParams = new URLSearchParams({
      projects: JSON.stringify(userCurrentStatus.user.projects),
    });

    try {
      const res = await fetch(
        `${ServerUrl}/${UploadAchievements}?UserId=${userCurrentStatus.user.id}&${queryParams}`,
        {
          method: "POST",
          body: formData,
          credentials: "include",
        }
      );
      if (res.status === 429) {
        const retryAfter = res.headers.get("retry-after");
        const minutes = retryAfter ? Math.ceil(parseInt(retryAfter) / 60) : 15;

        toast.error(
          `Too many requests. Please try again in ${minutes} minutes.`
        );
        return;
      }
      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
        setisLoading(false);
        setachievementForm({
          description: "",
          platform: "",
          country: "",
          accountName: "",
          accountUrl: "",
          contentDirection: "",
          Date: "",
          Likes: "",
          Comments: "",
          Shares: "",
        });
        setImageForFrontEnd(null);
        setImageForBackEnd(null);

        return;
      }

      toast.success("Achievments uploaded successfully");
      setisLoading(false);
      setachievementForm({
        description: "",
        platform: "",
        country: "",
        accountName: "",
        accountUrl: "",
        contentDirection: "",
        Date: "",
        Likes: "",
        Comments: "",
        Shares: "",
      });
      setImageForFrontEnd(null);
      setImageForBackEnd(null);
    } catch (error) {
      console.log(error);
      setisLoading(false);
    } finally {
      setImageForFrontEnd(null);
      setImageForBackEnd(null);
      setisLoading(false);
      setachievementForm({
        description: "",
        platform: "",
        country: "",
        accountName: "",
        accountUrl: "",
        contentDirection: "",
        Date: "",
        Likes: "",
        Comments: "",
        Shares: "",
      });
    }
  };
  return {
    handleSubmit,
    handleInputChange,
    handleImage,
    ImageForFrontEnd,
    achievementForm,
    ImageForBackEnd,
    isLoading,
    setImageForBackEnd,
    setachievementForm,
  };
};

export default useUploadAchievments;
