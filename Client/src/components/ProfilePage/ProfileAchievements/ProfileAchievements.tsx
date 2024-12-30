import { useAppSelector } from "../../../Hooks/ReduxHooks";
import { useTranslation } from "react-i18next";
import { CiStar } from "react-icons/ci";
import { GiAchievement } from "react-icons/gi";
import { UserCurrentStatus } from "../../../types/types";

export default function ProfileAchievements() {
  const { t } = useTranslation();
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);
  return (
    <div className="p-6 border-t">
      <h2 className="text-lg font-semibold text-[--text-color]  mb-3">
        {t("achievements")}
      </h2>
      <ul className="space-y-3">
        <li className="flex items-center justify-between text-sm">
          <span className="flex items-center space-x-2">
            <span
              className={`material-icons text-yellow-500 ${
                userCurrentStatus.user.direction === "ltr" ? "m-2" : "ml-2"
              } `}
            >
              <GiAchievement />
            </span>
            <span className="text-[--text-color] ">
              {t("employeeOfTheMonth")}
            </span>
          </span>
          <span className="text-gray-500">March 2023</span>
        </li>
        <li className="flex items-center justify-between text-sm">
          <span className="flex items-center space-x-2">
            <span
              className={`material-icons text-yellow-500 ${
                userCurrentStatus.user.direction === "ltr" ? "m-2" : "ml-2"
              } `}
            >
              <CiStar />
            </span>
            <span className="text-[--text-color] ">{t("innovationAward")}</span>
          </span>
          <span className="text-gray-500">Q2 2023</span>
        </li>
      </ul>
    </div>
  );
}
