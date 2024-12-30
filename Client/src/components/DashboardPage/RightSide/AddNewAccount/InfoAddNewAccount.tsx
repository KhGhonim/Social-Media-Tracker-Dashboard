import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function InfoAddNewAccount() {
  const { t } = useTranslation();

  return (
    <div className="w-full my-8">
      <h1 className="text-lg lg:text-2xl text-[--text-color] font-bold">
        {t("newAccount")}
      </h1>
      <div className="w-full bg-[--bg-color] rounded-3xl my-3 p-3 flex justify-between items-center">
        <div>
          <h4 className="font-bold text-sm text-[--text-color] lg:text-lg">
            {t("wantToAddNewAccount")}
          </h4>
          <p className="text-xs lg:text-sm text-[--text-color]">
            {" "}
            {t("startJourney")}
          </p>
        </div>
        <Link
          className="bg-[--navbar] text-xs lg:text-lg hover:bg-[--navbar-hover] text-white font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out"
          to={"/add-new-account#new-account"}
        >
          {t("addNewAccount")}
        </Link>
      </div>
    </div>
  );
}
