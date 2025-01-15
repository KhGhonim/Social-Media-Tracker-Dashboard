import { useLocation } from "react-router-dom";
import ProfileDropDown from "../Header/ProfileDropDown/ProfileDropDown";
import Notifications from "../Header/Notifications/Notifications";
import DarkLightMode from "../../components/DarkLightMode/DarkLightMode";
import { useTranslation } from "react-i18next";

export default function PhoneHeader() {
  const { t } = useTranslation();
  const location = useLocation().pathname;
  return (
    <div className="phone-header lg:hidden  w-full relative clippath z-40">
      <div className="flex items-center justify-between pt-2 mx-4">
        <h1 className="text-xs md:text-xl text-[--text-color]  font-bold">
          {location === "/"
            ? `${t("dashboard")}`
            : location === "/growth"
            ? `${t("growth")}`
            : location.includes("/profile/account")
            ? `${t("UpdateAccount")}`
            : location === "/add-new-user"
            ? `${t("addNewAccount")}`
            : location === "/add-new-account"
            ? `${t("newAccount")}`
            : location === "/social-media"
            ? `${t("socialMediaTeams")}`
            : location === "/profile/edit"
            ? `${t("settings")}`
            : location === "/analytics"
            ? `${t("analytics")}`
            : location === "/review-growth"
            ? `${t("review-growth")}`
            : location === "/operation-management"
            ? `${t("operation-management")}`
            : location === "/social-media-table"
            ? `${t("social-media-table")}`
            : location === "/ai"
            ? `${t("ai")}`
            : location === "/achievements"
            ? `${t("achievements")}`
            : location === "/reports"
            ? `${t("reports")}`
            : `${t("profile")}`}
        </h1>
        <div className="flex items-center gap-4 justify-center  border-[1px] p-1 rounded-full">
          {/* Notification Icon */}
          <div className="mt-1 flex gap-3 items-center">
            <Notifications />
            <DarkLightMode />
            <ProfileDropDown />
          </div>
        </div>
      </div>
    </div>
  );
}
