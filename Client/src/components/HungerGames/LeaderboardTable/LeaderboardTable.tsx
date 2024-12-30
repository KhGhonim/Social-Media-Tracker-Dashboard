import { useTranslation } from "react-i18next";
import { LeaderboardTableProps, UserCurrentStatus } from "../../../types/types";
import { useAppSelector } from "../../../Hooks/ReduxHooks";

export default function LeaderboardTable({ entries }: LeaderboardTableProps) {
  const { t } = useTranslation();
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-[--bg-color] rounded-lg overflow-hidden">
        <thead className=" bg-[--bg-color]">
          <tr>
            <th
              className={`px-6 py-3 ${
                userCurrentStatus.user.direction === "ltr"
                  ? "text-left"
                  : "text-right"
              } text-xs font-medium text-[text-color] uppercase tracking-wider`}
            >
              {t("rank")}
            </th>
            <th
              className={`px-6 py-3 ${
                userCurrentStatus.user.direction === "ltr"
                  ? "text-left"
                  : "text-right"
              } text-xs font-medium text-[text-color] uppercase tracking-wider`}
            >
              {t("handler")}
            </th>

            <th
              className={`px-6 py-3 ${
                userCurrentStatus.user.direction === "ltr"
                  ? "text-left"
                  : "text-right"
              } text-xs font-medium text-[text-color] uppercase tracking-wider`}
            >
              {t("Score")}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {entries.map((entry, index) => (
            <tr
              key={entry.id}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-sm font-medium text-gray-900">
                  #{index + 1}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  {entry.username}
                </div>
              </td>

              <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                {Object.entries(entry.score)[0][1]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
