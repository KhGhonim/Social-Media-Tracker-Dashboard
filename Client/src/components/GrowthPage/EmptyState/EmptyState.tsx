import { useTranslation } from "react-i18next";
import { FaSkull } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function EmptyState() {
  const { t } = useTranslation();

  return (
    <div className="min-h-[400px] flex flex-col h-full items-center justify-center p-8 rounded-xl bg-[--bg-color] shadow-sm  ">
      <div className="relative">
        <div className="absolute -inset-1 rounded-full bg-[--navbar] animate-pulse"></div>
        <div className="relative rounded-full p-4">
          <FaSkull className="w-12 h-12 text-gray-50" />
        </div>
      </div>

      <h2 className="mt-6 text-2xl font-bold text-[--text-color]">
      {t("noSocialMediaAccounts")}
      </h2>
      <p className="mt-2 text-center text-[--text-color] max-w-md">
      {t("connectAccounts")}
      </p>

      <Link
        to="/add-new-account"
        className="mt-8 inline-flex items-center px-6 py-3 rounded-full bg-[--navbar] text-white font-medium transform transition-all duration-200 hover:bg-[--navbar-hover] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[--navbar] focus:ring-offset-2 active:scale-95"
      >
        <GrAdd className="w-5 h-5 mr-2" />
        {t("addSocialAccount")}
      </Link>
    </div>
  );
}
