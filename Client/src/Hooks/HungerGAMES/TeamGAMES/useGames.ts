import toast from "react-hot-toast";
import { ServerUrl, JoinedGamesAPI } from "../../../Keys/envKeys";
import { useState } from "react";
import { useAppSelector } from "../../../Hooks/ReduxHooks";
import { Games, UserCurrentStatus } from "../../../types/types";


const useGames = (gameId) => {
  const [FormData, setFormData] = useState<Games>({
    achievementUrl: "",
    score: 0,
  });
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);
  const [IsLoading, setIsLoading] = useState(false);
  const HandleChange = (eo) => {
    const { name, value } = eo.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }


  const HandleSubmit = async (eo) => {
    eo.preventDefault();
    setIsLoading(true);

    if (!FormData.achievementUrl || !FormData.score) {
      toast.error("Please fill all the fields");
      setIsLoading(false);
      setFormData({
        achievementUrl: "",
        score: 0,
      });
      return
    }
    const QueryParams = new URLSearchParams(
      {
        projects: JSON.stringify(userCurrentStatus.user.projects),
        role: userCurrentStatus.user.role,
        name: userCurrentStatus.user.name
      }
    );
    try {
      const res = await fetch(`${ServerUrl}${JoinedGamesAPI}?gameId=${[gameId]}&userID=${userCurrentStatus.user.id}&${QueryParams}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(FormData)
      })

      if (!res.ok) {
        toast.error("Failed to add your score! Please try again.");
        setIsLoading(false);
        setFormData({
          achievementUrl: "",
          score: 0,
        });
        return;
      }

      const data = await res.json();
      setIsLoading(false);
      toast.success(data.message);
      setFormData({
        achievementUrl: "",
        score: 0,
      });

    } catch (error) {
      console.log(error);
      setFormData({
        achievementUrl: "",
        score: 0,
      });
    } finally {
      setIsLoading(false);
      setFormData({
        achievementUrl: "",
        score: 0,
      });
    }

  }
  return { FormData, HandleChange, HandleSubmit, IsLoading }
}

export default useGames