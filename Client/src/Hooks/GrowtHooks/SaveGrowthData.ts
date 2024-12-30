import { useState } from "react";
import toast from "react-hot-toast";
import { SocialPlatform, UserCurrentStatus } from "../../types/types";
import { PostGrowthPerPerson, ServerUrl } from "../../Keys/envKeys";
import { platformMetrics } from "../../DB/Context";
import { useAppSelector } from "../../Hooks/ReduxHooks";

const UseSaveGrowth = () => {
  const [isloading, setisloading] = useState(false);
  const [SelectedAccount, setSelectedAccount] = useState(null);
  const [stats, setStats] = useState<Record<string, number>>({});
  const [selectedPlatform, setSelectedPlatform] =
    useState<SocialPlatform>("twitter");
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);
  /**
   * Validates that all required fields for a given platform are present in the stats object.
   * Shows an error toast if any required fields are missing.
   */
  const validateFields = (
    platform: string,
    stats: Record<string, number>
  ): boolean => {
    const requiredFields = platformMetrics[platform] || [];
    const missingFields = requiredFields.filter((field) => !stats[field]);
    if (missingFields.length > 0) {
      toast.error(`Please fill all the fields for ${platform} platform.`);
      return false;
    }

    return true;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setisloading(true);
    if (!SelectedAccount) {
      toast.error("Please select an account and then fill the form.");
      setisloading(false);
      return;
    }
    if (!validateFields(selectedPlatform, stats)) {
      setisloading(false);
      return;
    }
    try {
      const queryParams = new URLSearchParams({
        projects: JSON.stringify(userCurrentStatus.user.projects),
      });

      const res = await fetch(
        `${ServerUrl}/${PostGrowthPerPerson}?${queryParams}&userID=${userCurrentStatus.user.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            id: SelectedAccount,
            platform: selectedPlatform,
            stats: stats,
          }),
        }
      );

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
        return;
      }
      toast.success("Growth data saved successfully");
      setisloading(false);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setisloading(false);
      if (e.target instanceof HTMLFormElement) {
        e.target.reset();
      }
    }
  };
  return {
    SelectedAccount,
    setSelectedAccount,
    stats,
    setStats,
    handleSubmit,
    isloading,
    selectedPlatform,
    setSelectedPlatform,
  };
};

export default UseSaveGrowth;
