import { useTranslation } from "react-i18next";
import { platformIcons } from "../../../DB/Context";
import { FaQuestionCircle } from "react-icons/fa";
import { MdAddCircleOutline } from "react-icons/md";
import { Link } from "react-router-dom";

export default function ConnectedAccounts({ data }) {
  const { t } = useTranslation();

  return (
    <div className="m-8">
      <h2 className="text-xl font-semibold text-[--text-color] mb-4">
      {t('connectedAccounts')}
      </h2>
      <div className="grid grid-cols-1 gap-4 relative sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data && data.length > 0 ? (
          data.map((acc, i) => {
            return (
              <Link
                key={i}
                to={`/profile/account/${acc.id}`}
                className="flex items-center space-x-3 p-4 bg-[--bg-color] rounded-lg hover:bg-[--floatingStats] transition-all duration-300 ease-in-out"
              >
                {platformIcons[acc.platform.toLowerCase()] || (
                  <FaQuestionCircle className="w-6 h-6 text-gray-400" />
                )}
                <div>
                  <p className="text-sm font-medium text-[--text-color] capitalize">
                    {acc.acc_name}
                  </p>
                  <p className="text-xs text-gray-500">@{acc.acc_username}</p>
                </div>
              </Link>
            );
          })
        ) : (
          <div className="flex flex-col gap-3 items-center justify-center w-full">
            <p className="text-red-500 text-xs absolute right-0 bottom-0 md:text-sm lg:text-base font-semibold">
            {t('noSocialMediaAccounts')}
            </p>
            <Link
              className="bg-indigo-500 text-xs flex justify-center items-center gap-2 lg:text-base hover:bg-indigo-700 text-white font-bold my-10 py-1 px-2 rounded-full transition-all duration-300 ease-in-out"
              to={"/add-new-account#new-account"}
            >
                {t('newAccount')}
              <span>
                <MdAddCircleOutline />
              </span>{" "}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
