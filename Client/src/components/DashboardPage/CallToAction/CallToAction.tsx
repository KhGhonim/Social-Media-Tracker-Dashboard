import { useAppSelector } from "../../../Hooks/ReduxHooks";
import { useTranslation } from "react-i18next";
import { FaTrophy } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { UserCurrentStatus } from "../../../types/types";

export default function CallToAction() {
  const { t } = useTranslation();
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
  useAppSelector((state) => state.user);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 max-lg:pb-20">
      <div className="text-center">
        <h2 className="text-3xl text-[--text-color] font-bold ">
          {t("readyToShareAchievements")}
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          {t("documentSuccesses")}
        </p>
        <Link
          className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[--navbar] hover:bg-[--navbar-hover] transition duration-300"
          to={"/achievements"}
        >
          {t("getStarted")}
          <FaTrophy className={`${userCurrentStatus.user.direction === "rtl" ? "mr-2" : "ml-2"} h-5 w-5 text-yellow-500`} />
        </Link>
      </div>
    </div>
  );
}
