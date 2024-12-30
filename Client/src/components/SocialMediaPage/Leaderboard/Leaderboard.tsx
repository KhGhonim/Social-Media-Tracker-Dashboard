import { useTranslation } from "react-i18next";
import { formatNumber } from "../../../Calculator/CalculateAnaltiycs";
import { FaCrown, FaHeart, FaMedal, FaTrophy, FaUsers } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { useAppSelector } from "../../../Hooks/ReduxHooks";
import { UserCurrentStatus } from "../../../types/types";

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <FaTrophy className="w-6 h-6 text-yellow-400" />;
    case 2:
      return <FaMedal className="w-6 h-6 text-gray-400" />;
    case 3:
      return <FaMedal className="w-6 h-6 text-amber-700" />;
    default:
      return (
        <span className="w-6 h-6 flex items-center justify-center text-gray-500">
          {rank}
        </span>
      );
  }
};

export default function Leaderboard({ users }) {
  const { t } = useTranslation();
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);

  return (
    <div className="bg-[--bg-color] p-6 my-5 rounded-xl shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <FaCrown className="w-6 h-6 text-[--navbar]" />
        <h3 className="text-lg font-semibold text-[--text-color]">
          {t("creatorLeaderboard")}
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th
                className={`py-3 px-4 ${
                  userCurrentStatus.user.direction === "ltr"
                    ? "text-left"
                    : "text-right"
                } text-xs font-semibold text-[--text-color] cursor-pointer`}
              >
                {t("rank")}
              </th>
              <th
                className={`py-3 px-4 ${
                  userCurrentStatus.user.direction === "ltr"
                    ? "text-left"
                    : "text-right"
                } text-xs font-semibold text-[--text-color] cursor-pointer`}
              >
                {t("creator")}
              </th>
              <th
                className={`py-3 px-4 ${
                  userCurrentStatus.user.direction === "ltr"
                    ? "text-left"
                    : "text-right"
                } text-xs font-semibold text-[--text-color] cursor-pointer`}
              >
                <div className="flex items-center">
                  <FaUsers
                    className={`w-4 h-4 ${
                      userCurrentStatus.user.direction === "ltr"
                        ? "mr-2"
                        : "ml-2"
                    }`}
                  />
                  {t("engagement2")}
                </div>
              </th>
              <th
                className={`py-3 px-4 ${
                  userCurrentStatus.user.direction === "ltr"
                    ? "text-left"
                    : "text-right"
                } text-xs font-semibold text-[--text-color] cursor-pointer`}
              >
                <div className="flex items-center">
                  <FaHeart
                    className={`w-4 h-4 ${
                      userCurrentStatus.user.direction === "ltr"
                        ? "mr-2"
                        : "ml-2"
                    }`}
                  />
                  {t("likes")}
                </div>
              </th>
              <th
                className={`py-3 px-4 ${
                  userCurrentStatus.user.direction === "ltr"
                    ? "text-left"
                    : "text-right"
                } text-xs font-semibold text-[--text-color] cursor-pointer`}
              >
                <div className="flex items-center">
                  <FiMessageCircle
                    className={`w-4 h-4 ${
                      userCurrentStatus.user.direction === "ltr"
                        ? "mr-2"
                        : "ml-2"
                    }`}
                  />
                  {t("posts")}
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr
                key={index}
                className={`border-b border-gray-100 hover:bg-[--floatingStats] transition-colors ${
                  index < 3 ? "animate-fadeIn" : ""
                }`}
              >
                <td className="py-4 px-4">{getRankIcon(index + 1)}</td>
                <td className="py-4 px-4 text-center">
                  <div className="flex items-center text-center gap-3">
                    <span className="font-medium text-center text-[--text-color] text-xs">
                      {user?.name}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-4 text-[--text-color]  text-xs md:text-sm lg:text-base">
                  {formatNumber(user?.followers)}
                </td>
                <td className="py-4 px-4 text-[--text-color]  text-xs md:text-sm lg:text-base">
                  {formatNumber(user?.engagement)}
                </td>
                <td className="py-4 px-4 text-[--text-color]  text-xs md:text-sm lg:text-base">
                  {formatNumber(user?.posts)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
