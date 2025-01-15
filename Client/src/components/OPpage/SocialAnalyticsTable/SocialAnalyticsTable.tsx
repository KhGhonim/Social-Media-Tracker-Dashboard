import { BiTrendingUp } from "react-icons/bi";
import { FaEye, FaUsers } from "react-icons/fa";
import { UserCurrentStatus } from "../../../types/types";
import { formatNumber } from "../../../Calculator/CalculateAnaltiycs";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../../Hooks/ReduxHooks";

export default function SocialAnalyticsTable({ data }) {
  const { t } = useTranslation();
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);

  return (
    <div className="w-full bg-[--bg-color] h-[30rem] overflow-y-auto  text-center rounded-xl shadow-lg overflow-hidden my-10">
      <div className="p-6 bg-gradient-to-r from-purple-600 to-indigo-600">
        <h2 className="text-2xl font-bold text-[--allwhite]">
          {t("Social Media Analytics")}
        </h2>
        <p className="text-[--allwhite]">{t("trackAndAnalyze")}</p>
      </div>

      <div className="overflow-x-auto text-center">
        <table className="w-full">
          <thead>
            <tr className="bg-[--bg-color] border-b">
              <th
                className={`px-6 py-4 ${
                  userCurrentStatus.user.direction === "ltr"
                    ? "text-left"
                    : "text-right"
                } text-sm font-semibold text-[--text-color] cursor-pointer`}
              >
                {t("Platform")}
              </th>
              <th
                className={`px-6 py-4 ${
                  userCurrentStatus.user.direction === "ltr"
                    ? "text-left"
                    : "text-right"
                } text-sm font-semibold text-[--text-color] cursor-pointer`}
              >
                <div className="flex items-center gap-2">
                  <FaUsers size={16} />
                  {t("handler")}
                </div>
              </th>
              <th
                className={`px-6 py-4 ${
                  userCurrentStatus.user.direction === "ltr"
                    ? "text-left"
                    : "text-right"
                } text-sm font-semibold text-[--text-color] cursor-pointer`}
              >
                <div className="flex items-center gap-2">
                  <FaUsers size={16} />
                  {t("followers")}
                </div>
              </th>
              <th
                className={`px-6 py-4 ${
                  userCurrentStatus.user.direction === "ltr"
                    ? "text-left"
                    : "text-right"
                } text-sm font-semibold text-[--text-color] cursor-pointer`}
              >
                <div className="flex items-center gap-2">
                  <BiTrendingUp size={16} />
                  {t("engagement2")}
                </div>
              </th>
              <th
                className={`px-6 py-4 ${
                  userCurrentStatus.user.direction === "ltr"
                    ? "text-left"
                    : "text-right"
                } text-sm font-semibold text-[--text-color] cursor-pointer`}
              >
                <div className="flex items-center gap-2">
                  <FaEye size={16} />
                  {t("impressions")}
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data?.map((item, i) => {
              return (
                <tr
                  key={`item-${i}-${item.id}`}
                  className={`hover:bg-[--rightSide-bg-color] transition-all duration-200 ${
                    i % 2 === 0 ? "bg-[--rightSide-bg-color]" : ""
                  }`}
                >
                  <td
                    className={`px-6 py-4 ${
                      userCurrentStatus.user.direction === "ltr"
                        ? "text-left"
                        : "text-right"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-medium text-sm text-[--text-color] capitalize">
                          {item?.platform}
                        </div>
                        <div className="text-xs text-gray-500">
                          @{item?.username}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td
                    className={`px-6 py-4 text-xs text-[--text-color] ${
                      userCurrentStatus.user.direction === "ltr"
                        ? "text-left"
                        : "text-right"
                    }`}
                  >
                    {item.topAccount.name}
                  </td>
                  <td
                    className={`px-6 py-4 text-[--text-color] ${
                      userCurrentStatus.user.direction === "ltr"
                        ? "text-left"
                        : "text-right"
                    }`}
                  >
                    {formatNumber(item.followers)}
                  </td>
                  <td
                    className={`px-6 py-4 ${
                      userCurrentStatus.user.direction === "ltr"
                        ? "text-left"
                        : "text-right"
                    }`}
                  >
                    <span className={`text-[--text-color] `}>
                      {formatNumber(item?.totalEngagement)}
                    </span>
                  </td>
                  <td
                    className={`px-6 py-4 text-[--text-color] ${
                      userCurrentStatus.user.direction === "ltr"
                        ? "text-left"
                        : "text-right"
                    }`}
                  >
                    {formatNumber(item.topAccount.impressions)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
