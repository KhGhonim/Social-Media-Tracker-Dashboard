import { useEffect, useRef } from "react";

export default function SuspendedAccountsModal({
  setIsModelOpen,
  SuspendedAccTeamLeaders,
}) {
  const ref = useRef(null);
  const handleClickOutside = (event) => {
    // If the click is outside the modal, close it
    if (ref.current && !ref.current.contains(event.target)) {
      setIsModelOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="space-y-6 fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div
        ref={ref}
        className="overflow-hidden bg-[--bg-color] mx-2 overflow-y-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2 p-4 sm:p-6 rounded-2xl shadow-lg"
      >
        <table className="min-w-full table-auto border-collapse ">
          <thead className="bg-[--rightSide-bg-color] rounded-xl mb-1">
            <tr>
              <th className="px-4 py-3 text-left text-xs sm:text-sm font-semibold text-[--text-color]">
                Account
              </th>
              <th className="px-4 py-3 text-left text-xs sm:text-sm font-semibold text-[--text-color]">
                Platform
              </th>
              <th className="px-4 py-3 text-left text-xs sm:text-sm font-semibold text-[--text-color]">
                Handler
              </th>
              <th className="px-4 py-3 text-left text-xs sm:text-sm font-semibold text-[--text-color]">
                Last Updated
              </th>
              <th className="px-4 py-3 text-left text-xs sm:text-sm font-semibold text-[--text-color]">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-[--bg-color] ">
            {SuspendedAccTeamLeaders.map((row, index) => (
              <tr key={index}>
                <td className="px-4 py-3 text-xs sm:text-sm text-[--text-color]">
                  {row.acc_name}
                </td>
                <td className="px-4 py-3 text-xs sm:text-sm capitalize text-[--text-color]">
                  {row.platform}
                </td>
                <td className="px-4 py-3 text-xs sm:text-sm text-[--text-color]">
                  {row.username}
                </td>
                <td className="px-4 py-3 text-xs sm:text-sm text-[--text-color]">
                  {row.updated_at.slice(0, 10)}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`text-xs capitalize sm:text-sm px-2 py-1 rounded-full ${
                      row.acc_state === "locked"
                        ? "bg-orange-100 text-orange-500"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {row.acc_state}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
