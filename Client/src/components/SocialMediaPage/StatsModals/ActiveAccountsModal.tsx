import React, { useRef, useEffect } from "react";

export default function ActiveAccountsModal({
  setIsModelOpen,
  FetchHandlerAbsencesTEData,
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
        className="overflow-hidden bg-[--bg-color] w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-2 h-[70dvh] overflow-y-auto overflow-x-auto p-4 sm:p-6 rounded-2xl shadow-lg"
      >
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-[--rightSide-bg-color] rounded-xl mb-1">
            <tr>
              <th className="px-4 py-3 text-left text-xs sm:text-sm font-semibold text-[--text-color]">
                Acc Name
              </th>
              <th className="px-4 py-3 text-left text-xs sm:text-sm font-semibold text-[--text-color]">
                Category
              </th>
              <th className="px-4 py-3 text-left text-xs sm:text-sm font-semibold text-[--text-color]">
              Platform
              </th>
              <th className="px-4 py-3 text-left capitalize text-xs sm:text-sm font-semibold text-[--text-color]">
              Country
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-[--bg-color]">
            {FetchHandlerAbsencesTEData.map((row, index) => (
              <tr key={index}>
                <td className="px-4 py-3 capitalize text-xs sm:text-sm text-[--text-color]">
                  {row.acc_name}
                </td>
                <td className="px-4 py-3 text-xs capitalize sm:text-sm text-[--text-color]">
                  {row.acc_category
}
                </td>
                <td className="px-4 py-3 text-xs capitalize sm:text-sm text-[--text-color]">
                  {row.platform}
                </td>
                <td className="px-4 py-3 text-xs uppercase  sm:text-sm text-[--text-color]">
                  {row.country}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}