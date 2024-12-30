import { useAppSelector } from "../../../Hooks/ReduxHooks";
import { useTranslation } from "react-i18next";
import { FaTrophy, FaUsers, FaRocket } from "react-icons/fa";
import { GiRunningNinja } from "react-icons/gi";
import { UserCurrentStatus } from "../../../types/types";

const ProfileHungerGames = () => {
  const { t } = useTranslation();
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);
  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-500 rounded-xl border-b-2 text-[--allwhite] overflow-hidden">
      {/* Header Section */}
      <div className="p-8 text-center">
        <h1 className="text-3xl lg:text-5xl font-extrabold uppercase tracking-wide">
          {t("ultimateChallengeTitle")}
        </h1>
        <p className="mt-4 text-xs lg:text-lg font-medium">
          {t("ultimateChallengeDescription")}
        </p>
      </div>

      {/* Content Section */}
      <div className="py-6 px-10 bg-[--rightSide-bg-color] text-[--text-color] rounded-b-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-center">
          <div className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition duration-300">
            <FaTrophy className="w-12 h-12 mx-auto text-yellow-400 mb-4" />
            <h3 className="text-xl font-bold">{t("earnRewards")}</h3>
            <p className="mt-2 text-sm">{t("topPlayersWin")}</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition duration-300">
            <FaUsers className="w-12 h-12 mx-auto text-emerald-400 mb-4" />
            <h3 className="text-xl font-bold">{t("teamUp")}</h3>
            <p className="mt-2 text-sm">{t("strengthenBonds")}</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition duration-300">
            <FaRocket className="w-12 h-12 mx-auto text-red-600 mb-4" />
            <h3 className="text-xl font-bold">{t("levelUp")}</h3>
            <p className="mt-2 text-sm">{t("pushYourLimits")}</p>
          </div>
        </div>
        <p className="text-center text-lg font-semibold mb-6">
          {t("readyToTakeTheStage")}
        </p>
        <div className="flex flex-col lg:flex-row justify-center gap-4">
          <div className="text-center">
            <a
              href="/join-competition"
              className="inline-block text-xs md:text-base bg-[--navbar] text-white font-bold py-2 px-8 rounded-full shadow-md hover:bg-[--navbar-hover] transition duration-300"
            >
              {t("joinNow")}
            </a>
          </div>
          <div className="text-center">
            <a
              href="/solo-competition"
              className="inline-block text-xs md:text-base bg-[--navbar] text-white font-bold py-2 px-8 rounded-full shadow-md hover:bg-[--navbar-hover] transition duration-300"
            >
              {t("wantAMonsterPrize")}
              <span>
                <GiRunningNinja
                  className={`w-6 h-6 text-white inline-block ${
                    userCurrentStatus.user.direction === "rtl" ? "mr-2" : "ml-2"
                  }`}
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHungerGames;
