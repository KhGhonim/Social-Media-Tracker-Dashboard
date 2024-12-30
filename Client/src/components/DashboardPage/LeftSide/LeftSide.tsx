import { FaRegEye, FaSpinner } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { IoShareSocial, IoPersonCircle } from "react-icons/io5";
import FloatingStats from "./FloatingStats/FloatingStats";
import TotalGrowth from "./TotalGrowth/TotalGrowth";
import WelcomeAnimation from "./WelcomeAnimation/WelcomeAnimation";
import FetcbSMStatsAllFollowrs from "../../../Hooks/DashboardPageHooks/FetcbSMStatsAllFollowrs";
import {
  CalculateAllENG,
  CalculateAllFollowers,
  CalculateAllFollowing,
  CalculateAllImp,
  CalculatPerformanceChartMonthly,
  CalculatPerformanceChartYearly,
  formatNumber,
} from "../../../Calculator/CalculateAnaltiycs";
import FetcbSMStatsAllFollowing from "../../../Hooks/DashboardPageHooks/FetcbSMStatsAllFollowing";
import FetcbSMStatsAllImpressions from "../../../Hooks/DashboardPageHooks/FetcbSMStatsAllImpressions";
import FetcbSMStatsAllENG from "../../../Hooks/DashboardPageHooks/FetcbSMStatsAllEng";
import usePerformanceChart from "../../../Hooks/Charts/DashboardPerformanceChart";
import { useAppSelector } from "../../../Hooks/ReduxHooks";
import { UserCurrentStatus } from "../../../types/types";

export default function LeftSide() {
  const { AllFollowersData, AllFollowrsLoading } = FetcbSMStatsAllFollowrs();
  const Followrs = CalculateAllFollowers(AllFollowersData);
  const { AllFollowingData } = FetcbSMStatsAllFollowing();
  const Followings = CalculateAllFollowing(AllFollowingData);
  const { AllImpData } = FetcbSMStatsAllImpressions();
  const Impressions = CalculateAllImp(AllImpData);
  const { AllENGData } = FetcbSMStatsAllENG();
  const Eengagements = CalculateAllENG(AllENGData);
  const { PerformanceChart, PerformanceChartLoading } = usePerformanceChart();
  const Monthly = CalculatPerformanceChartMonthly(PerformanceChart);
  const Yearly = CalculatPerformanceChartYearly(PerformanceChart);

  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);

  const UserStats = [
    {
      title: "impressions",
      value: formatNumber(Impressions),
      // change: "12.5%",
      // changeType: "up",
      icon: <FaRegEye />,
    },
    {
      title: "engagement",
      value: formatNumber(Eengagements),
      // change: "3.2%",
      // changeType: "down",
      icon: <IoShareSocial />,
    },
    {
      title: "totalFollowers",
      value: formatNumber(Followrs),
      // change: "8.1%",
      // changeType: "up",
      icon: <IoPersonCircle />,
    },
    {
      title: "totalFollowing",
      value: formatNumber(Followings),
      // change: "2.3%",
      // changeType: "up",
      icon: <IoIosPerson />,
    },
  ];

  return (
    <div
<<<<<<< HEAD
      className={`left-side max-sm:p-5 ${
=======
      className={`left-side max-lg:p-5 ${
>>>>>>> 1c510ab (Sockets and Updates)
        userCurrentStatus.user.direction === "rtl" ? "lg:pr-32" : "lg:pl-32"
      }  w-full h-full flex flex-col`}
    >
      <WelcomeAnimation />
      <FloatingStats
        AllFollowrsLoading={AllFollowrsLoading}
        UserStats={UserStats}
        Styles={"grid grid-cols-1 md:grid-cols-2 gap-6 py-6 w-full  "}
        HandleTeamLeaderPopUpModel={null}
      />
      {PerformanceChartLoading ? (
        <div className="flex w-full h-full items-center justify-center">
          <FaSpinner className="animate-spin" />
        </div>
      ) : PerformanceChart ? (
        <TotalGrowth Monthly={Monthly} Yearly={Yearly} />
      ) : (
        <div className="flex w-full h-full items-center justify-center">
          <p className="text-[--text-color] text-2xl">No Data Found</p>
        </div>
      )}
    </div>
  );
}
