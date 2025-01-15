import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../../Hooks/ReduxHooks";
import { UserCurrentStatus } from "../../../types/types";

export default function LeaderboardTable({ entries }) {
  const { t } = useTranslation();
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);
  return (
    <div className="overflow-x-auto max-h-96 overflow-y-auto">
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
        <tbody className="divide-y divide-gray-200 ">
          {entries.map((entry, index) => (
            <tr
              key={`${index}-${entry.id}`}
              className={`${index % 2 === 0 ? "bg-[--rightSide-bg-color]" : "bg-[--bg-color] "} text-[--text-color]`}
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-sm font-medium">
                  #{index + 1}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium">
                  {entry.user_name}
                </div>
              </td>

              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                {entry.score}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
