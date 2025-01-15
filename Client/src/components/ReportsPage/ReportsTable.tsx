import { useState } from "react";
import { useAppSelector } from "../../Hooks/ReduxHooks";
import { UserCurrentStatus } from "../../types/types";
import { FaDownload, FaTrash, FaSpinner } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdOutlineDateRange } from "react-icons/md";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import useDeleteReport from "../../Hooks/Report/useDeleteReport";
import { useTranslation } from "react-i18next";

export default function ReportsTable({ data }) {
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const { HandleDeleteReport, Isloading } = useDeleteReport();

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  const startDateSQL = format(startDate, "yyyy-MM-dd");
  const endDateSQL = format(endDate, "yyyy-MM-dd");

  const filteredData = data.filter((item) => {
    const createdAt = format(item.created_at, "yyyy-MM-dd");
    return (
      (createdAt >= startDateSQL && createdAt <= endDateSQL) ||
      createdAt === startDateSQL ||
      createdAt === endDateSQL
    );
  });
  const { t } = useTranslation();

  return (
    <main
      className={`Reports-content max-sm:p-5 ${
        userCurrentStatus.user.direction === "rtl" ? "lg:pr-32" : "lg:pl-32"
      }   w-full h-dvh flex flex-col`}
    >
      <div className="p-6 mb-8  shadow-lg rounded-xl">
        {/* Title and Filters */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-sm md:text-2xl flex-1 font-bold text-[--text-color]">
            {t("Recent Reports")}
          </h2>

          <DatePicker
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            showMonthDropdown
            endDate={endDate}
            selectsRange
            closeOnScroll={true}
            maxDate={new Date()}
            toggleCalendarOnIconClick
            isClearable
            placeholderText="Select a date range"
            showIcon
            className="w-60 p-2 border bg-[--bg-color] text-[--text-color] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[--navbar] transition-all"
            icon={
              <MdOutlineDateRange
                size={24}
                className="mt-0.5 text-[--text-color]"
              />
            }
          />
        </div>

        <div className="overflow-x-auto max-h-[70vh]">
          <table className="min-w-full bg-[--rightSide-bg-color] text-[--text-color] border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold  uppercase tracking-wider">
                  {t("Report ID")}
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold  uppercase tracking-wider">
                  {t("Title")}
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold  uppercase tracking-wider">
                  {t("Team")}
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold  uppercase tracking-wider">
                  {t("Date")}
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold  uppercase tracking-wider">
                  {t("Actions")}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 ">
              {filteredData?.map((report, index) => {
                console.log(report);
                const Time = format(report.created_at, "yyyy-MM-dd");
                return (
                  <tr
                    key={index}
                    className={` ${
                      index % 2 === 0
                        ? "bg-[--bg-color] "
                        : "bg-[--rightSide-bg-color]"
                    } text-[--text-color]`}
                  >
                    <td className="px-6 py-4 text-sm  font-medium">
                      {report.id}
                    </td>
                    <td className="px-6 py-4 text-sm capitalize ">
                      {report.reporttype}
                    </td>
                    <td className="px-6 py-4 text-sm uppercase ">
                      {report.user_projects[0]}
                    </td>
                    <td className="px-6 py-4 text-sm ">{Time}</td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex space-x-3">
                        <Link
                          to={`${report.url}`}
                          target="_blank"
                          className="flex items-center text-green-600 hover:text-green-800 transition-colors duration-200"
                        >
                          <FaDownload className="w-4 h-4 mr-2" />
                        </Link>

                        {userCurrentStatus.user.role !== "Team Leader" && (
                          <button
                            onClick={() => HandleDeleteReport(report.id)}
                            className="flex items-center text-red-600 hover:text-red-800 transition-colors duration-200"
                          >
                            {Isloading ? (
                              <div className="flex w-full h-full items-center justify-center">
                                <FaSpinner className="animate-spin" />
                              </div>
                            ) : (
                              <FaTrash className="w-4 h-4 mr-2" />
                            )}
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
