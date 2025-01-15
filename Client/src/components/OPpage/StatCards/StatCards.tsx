import { useTranslation } from 'react-i18next';
import { FaSpinner } from 'react-icons/fa'

export default function StatCards({OperationsStatsCards, loading, }) {
    const { t } = useTranslation();
  
  return (
      <div className="w-full my-2">
        <h1 className="text-lg lg:text-2xl text-[--text-color] font-bold">
          {t("MonthlyEngagement")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6 py-6 w-full ">
          {OperationsStatsCards.map((card, index) => (
            <div
              key={index}
              className={`p-4 ${card.class} group cursor-pointer  rounded-3xl shadow hover:shadow-lg transition-all duration-300 ease-in-out`}
            >
              <div className="flex justify-between items-start">
                {/* Title and Value */}
                <div>
                  <p className="text-xs font-medium text-[--allwhite] ">
                    {t(card.title)}
                  </p>
                  {loading ? (
                    <div className="flex w-full h-full items-center justify-center">
                      <FaSpinner className="animate-spin" />
                    </div>
                  ) : (
                    <p className="text-xl font-bold text-[--allwhite]">
                      {card.value}
                    </p>
                  )}
                </div>
  
                {/* Icon */}
                <div className={`p-2 rounded-lg text-2xl text-[--allwhite]`}>
                  <div>{card.icon}</div>
                </div>
              </div>
  
              {/* Percentage Change */}
              {/* <div
                className={`flex items-center gap-1 mt-4 text-xs text-[--allwhite]`}
              >
                <span
                  className={`${
                    card.changeType === "up" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {card.changeType === "up" ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </span>
                <span>{card.change}</span>
              </div> */}
            </div>
          ))}
        </div>
      </div>
  )
}
