import { useAppSelector } from "../../../Hooks/ReduxHooks";
import { useTranslation } from "react-i18next";
import { FaArrowLeft, FaTrophy } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { UserCurrentStatus } from "../../../types/types";

export default function TournamentHeader() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);
  return (
    <div className="text-center relative rounded-l-3xl max-lg:mt-4 py-12 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="max-w-4xl mx-auto px-4 ">
        <button
          onClick={() => navigate("/profile")}
          className="absolute top-4 z-30 left-4 flex items-center text-[--allwhite] mb-6 hover:text-white transition-colors"
        >
          <FaArrowLeft
            className={`w-5 h-5 ${
              userCurrentStatus.user.direction === "rtl" ? "ml-2" : "mr-2"
            } text-[--allwhite] hover:animate-pulse transition-all duration-300`}
          />
          {t("backToProfile")}
        </button>
        <div className="flex items-center justify-center mb-4">
          <FaTrophy className="w-12 h-12 text-yellow-300 mr-3" />
          <h1 className="text-4xl font-bold text-white">
            {t("socialFuryChallengeTitle")}
          </h1>
        </div>
        <p className="text-xl text-gray-100 mb-8">
          {t("socialFuryChallengeDescription")}
        </p>
      </div>
    </div>
  );
}
