import { useState } from "react";
import toast from "react-hot-toast";
<<<<<<< HEAD
import { SocialPlatform } from "../../types/types";
import { PostGrowthPerPerson, ServerUrl } from "../../Logs/envLog";
import { platformMetrics } from "../../DB/Context";
=======
import { SocialPlatform, UserCurrentStatus } from "../../types/types";
import { PostGrowthPerPerson, ServerUrl } from "../../Keys/envKeys";
import { platformMetrics } from "../../DB/Context";
import { useAppSelector } from "../../Hooks/ReduxHooks";
>>>>>>> 1c510ab (Sockets and Updates)

const UseSaveGrowth = () => {
  const [isloading, setisloading] = useState(false);
  const [SelectedAccount, setSelectedAccount] = useState(null);
  const [stats, setStats] = useState<Record<string, number>>({});
  const [selectedPlatform, setSelectedPlatform] =
    useState<SocialPlatform>("twitter");
<<<<<<< HEAD
=======
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);
>>>>>>> 1c510ab (Sockets and Updates)
  /**
   * Validates that all required fields for a given platform are present in the stats object.
   * Shows an error toast if any required fields are missing.
   */
<<<<<<< HEAD
  const validateFields = (platform: string, stats: Record<string, number>): boolean => {
=======
  const validateFields = (
    platform: string,
    stats: Record<string, number>
  ): boolean => {
>>>>>>> 1c510ab (Sockets and Updates)
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
<<<<<<< HEAD
      const res = await fetch(`${ServerUrl}/${PostGrowthPerPerson}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          id: SelectedAccount,
          platform: selectedPlatform,
          stats: stats
        })
      })
=======
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
>>>>>>> 1c510ab (Sockets and Updates)

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
<<<<<<< HEAD
        return
=======
        return;
>>>>>>> 1c510ab (Sockets and Updates)
      }
      toast.success("Growth data saved successfully");
      setisloading(false);
    } catch (error) {
<<<<<<< HEAD
      console.log(error);
      toast.error(error.message);
    } finally {
      setisloading(false)
=======
      toast.error(error.message);
    } finally {
      setisloading(false);
>>>>>>> 1c510ab (Sockets and Updates)
      if (e.target instanceof HTMLFormElement) {
        e.target.reset();
      }
    }
  };
<<<<<<< HEAD
  return { SelectedAccount, setSelectedAccount, stats, setStats, handleSubmit, isloading, selectedPlatform, setSelectedPlatform };
}

export default UseSaveGrowth
=======
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
>>>>>>> 1c510ab (Sockets and Updates)
