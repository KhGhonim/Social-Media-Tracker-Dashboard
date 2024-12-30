import {
  CalculateFollowersIG,
  CalculateFriends,
  CalculateFS,
  CalculateKarma,
  formatNumber,
} from "../../../../Calculator/CalculateAnaltiycs";
import { FaFacebook, FaInstagram, FaReddit, FaSpinner } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import useFetchSMStatsFB from "../../../../Hooks/DashboardPageHooks/useFetchSMStatsFB";
import useFetchSMStatsTW from "../../../../Hooks/DashboardPageHooks/useFetchSMStatsTW";
import useFetchSMStatsRD from "../../../../Hooks/DashboardPageHooks/useFetchSMStatsRD";
import useFetchSMStatsIG from "../../../../Hooks/DashboardPageHooks/useFetchSMStatsIG";
import { useTranslation } from "react-i18next";

export default function SocailMediaStats() {
  const { t } = useTranslation();
  const { data, loading } = useFetchSMStatsTW();
  const { fbDATA } = useFetchSMStatsFB();
  const { RDData } = useFetchSMStatsRD();
  const { IGData } = useFetchSMStatsIG();

  const RDKARMA = CalculateKarma(RDData);
  const IGKARMA = CalculateFollowersIG(IGData);
  const TWFS = CalculateFS(data);
  const FBFS = CalculateFriends(fbDATA);

  const SocailMediaStatsCards = [
    {
      title: "facebook",
      value: formatNumber(FBFS),
      // change: "12.5%",
      // changeType: "up",
      icon: <FaFacebook />,
      class: "bg-[#4e69a2]",
    },
    {
      title: "instagram",
      value: formatNumber(IGKARMA),
      // change: "3.2%",
      // changeType: "down",
      icon: <FaInstagram />,
      class: "bg-[#ea6e98]",
    },
    {
      title: "twitter",
      value: formatNumber(TWFS),
      // change: "8.1%",
      // changeType: "up",
      icon: <FaXTwitter />,
      class: "bg-[#191919]",
    },
    {
      title: "reddit",
      value: formatNumber(RDKARMA),
      // change: "2.3%",
      // changeType: "up",
      icon: <FaReddit />,
      class: "bg-[#ff5719]",
    },
  ];

  return (
    <div className="w-full my-2">
      <h1 className="text-lg lg:text-2xl text-[--text-color] font-bold">
        {t("socialMedia")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6 py-6 w-full ">
        {SocailMediaStatsCards.map((card, index) => (
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
  );
}
