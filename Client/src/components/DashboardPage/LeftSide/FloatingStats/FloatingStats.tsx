import { useTranslation } from "react-i18next";
import { FaSpinner } from "react-icons/fa";

export default function FloatingStats({
  UserStats,
  AllFollowrsLoading,
  Styles,
  HandleTeamLeaderPopUpModel,
}) {
  const { t } = useTranslation();

  return (
    <div className={Styles}>
      {UserStats?.map((card, index) => (
        <div
          key={index}
          onClick={() => {
            HandleTeamLeaderPopUpModel(card?.TE);
          }}
          className="p-4 bg-[--floatingStats] text-[--text-color] hover:bg-[--navbar] hover:text-[--allwhite]  cursor-pointer  rounded-3xl shadow hover:shadow-lg transition-all duration-300 ease-in-out"
        >
          <div className="flex justify-between items-start">
            {/* Title and Value */}
            <div>
              <p className="text-xs font-medium ">{t(card?.title)}</p>
              {AllFollowrsLoading ? (
                <div className="flex w-full h-full items-center justify-center">
                  <FaSpinner className="animate-spin" />
                </div>
              ) : (
                <p className="text-xl font-bold mt-2">{card?.value}</p>
              )}
            </div>

            {/* Icon */}
            <div className={`p-2 rounded-lg text-2xl `}>
              <div>{card?.icon}</div>
            </div>
          </div>

          {/* Percentage Change */}

          {/* {card.change ||
            (card.Type && (
              <div className={`flex items-center gap-1 mt-4 text-xs`}>
                <span
                  className={`${
                    card.changeType === "up" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {" "}
                  {card.changeType === "up" ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </span>
                <span>{card.change}</span>
              </div>
            ))} */}
        </div>
      ))}
    </div>
  );
}
