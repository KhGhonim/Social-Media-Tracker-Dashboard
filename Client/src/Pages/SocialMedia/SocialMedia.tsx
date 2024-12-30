import TopPosts from "../../components/SocialMediaPage/TopPosts/TopPosts";
import Header from "../../components/Header/Header";
import PhoneHeader from "../../components/PhoneHeader/PhoneHeader";
import Navbar from "../../components/PhoneNavbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import EngagementChart from "../../components/SocialMediaPage/EngagementChart/EngagementChart";
import TotalMembers from "../../components/SocialMediaPage/TotalMembers/TotalMembers";
import Leaderboard from "../../components/SocialMediaPage/Leaderboard/Leaderboard";
import FloatingStats from "../../components/DashboardPage/LeftSide/FloatingStats/FloatingStats";
import FetcbSMSuspendedAccounts from "../../Hooks/TeamsHooks/FetchSuspendedAccounts";
import { FaSpinner } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";
import { MdNoAccounts } from "react-icons/md";
import FetchSMActiveAccounts from "../../Hooks/TeamsHooks/FetchSMActiveAccounts";
import FetchHandlerAbsences from "../../Hooks/TeamsHooks/FetchHandlerAbsences";
import FetchTeamMembers from "../../Hooks/TeamsHooks/FetchTeamMembers";
import useEngagementOverviewTEChart from "../../Hooks/Charts/FetchEngagementOverviewTE";
import {
  CalculateAllENGagementSum,
  CalculatePosts,
  CalculateTeamInsights,
  CalculateTeamLeaderBoard,
} from "../../Calculator/CalculateAnaltiycs";
import useFetchTeamInsights from "../../Hooks/Charts/FetchTeamInsights";
import TeamInsights from "../../components/SocialMediaPage/TeamInsights/TeamInsights";
import FetchTeamLeadersLeaderboard from "../../Hooks/Tables/TeamLeadersLeaderboard";
import Loading from "../../Pages/Loading/Loading";
import FetchPosts from "../../Hooks/TeamsHooks/FetchPosts";
import { useAppDispatch, useAppSelector } from "../../Hooks/ReduxHooks";
import { UserCurrentStatus } from "../../types/types";
import { useEffect, useState } from "react";
import { SetDirection } from "../../Redux/userSlice";
import SuspendedAccountsModal from "../../components/SocialMediaPage/StatsModals/SuspendedAccountsModal";
import AbsenceHandlerModal from "../../components/SocialMediaPage/StatsModals/AbsenceHandlerModal";

export default function SocialMedia() {
  const { SuspendedAccTeamLeaders, SuspendedAccTeamLeaderLoading } =
    FetcbSMSuspendedAccounts();
  const { AllActiveAccTEData } = FetchSMActiveAccounts();
  const { FetchHandlerAbsencesTEData } = FetchHandlerAbsences();
  const { FetchTeamMembersTeamLeaders, FetchTeamMembersTeamLeaderLoading } =
    FetchTeamMembers();
  const { EngagementOverviewTEChart, EngagementOverviewTEChartLoading } =
    useEngagementOverviewTEChart();
  const EngagementOverview = CalculateAllENGagementSum(
    EngagementOverviewTEChart
  );
  const { FetchTeamInsights, FetchTeamInsightsLoading } =
    useFetchTeamInsights();
  const { TeamNames, Insights } = CalculateTeamInsights(FetchTeamInsights);
  const {
    FetchTeamLeadersLeaderboardTEData,
    FetchTeamLeadersLeaderboardTELoading,
  } = FetchTeamLeadersLeaderboard();
  const result = CalculateTeamLeaderBoard(FetchTeamLeadersLeaderboardTEData);
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);
  const { FetchPostsTEData, FetchPostsTELoading } = FetchPosts();
  const MostUpdatedAndHighestPosts = CalculatePosts(FetchPostsTEData);
  const [IsModelOpen, setIsModelOpen] = useState(false);
  const [SelectedStatus, setSelectedStatus] = useState(null);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const direction = userCurrentStatus.user.direction;
    if (!direction || direction === "undefined") {
      const lang = localStorage.getItem("i18nextLng") || "ar";
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
      dispatch(SetDirection(document.documentElement.dir));
    } else {
      document.documentElement.dir = direction;
    }
  }, [dispatch, userCurrentStatus.user.direction]);

  const TeamLeaderStats = [
    {
      title: "suspendedAccounts",
      value: SuspendedAccTeamLeaders.length,
      icon: <MdNoAccounts />,
      TE: "suspensions",
    },
    {
      title: "activeAccounts",
      value: AllActiveAccTEData.length,
      icon: <IoPersonCircle />,
      TE: "active",
    },
    {
      title: "todayAbsenceHandler",
      value: FetchHandlerAbsencesTEData.length,
      icon: <IoIosPerson />,
      TE: "absences",
    },
  ];

  const HandleTeamLeaderPopUpModel = (data) => {
    setIsModelOpen(true);
    setSelectedStatus(data);
  };

  return (
    <div className="bg-[--bg-color] cairo-ALAPHA">
      {SuspendedAccTeamLeaderLoading ? (
        <Loading />
      ) : (
        <div
          className={`relative social-media max-lg:px-3 w-full h-full bg-[--bg-color] cairo-ALAPHA max-sm:pb-20`}
        >
          <PhoneHeader />
          <Navbar />
          <Header />
          <Sidebar />
          <main className="flex flex-col lg:flex-row gap-5">
            <section
              className={`analytics-overview  lg:w-4/6 left-side max-sm:p-5 ${
                userCurrentStatus.user.direction === "rtl"
                  ? "lg:pr-32"
                  : "lg:pl-32"
              }  w-full h-full flex flex-col`}
            >
              <FloatingStats
                UserStats={TeamLeaderStats}
                AllFollowrsLoading={SuspendedAccTeamLeaderLoading}
                HandleTeamLeaderPopUpModel={HandleTeamLeaderPopUpModel}
                Styles={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6 w-full`}
              />
              {FetchPostsTELoading ? (
                <div className="flex w-full h-full items-center justify-center">
                  <FaSpinner className="animate-spin" />
                </div>
              ) : FetchPostsTEData && FetchPostsTEData.length > 0 ? (
                <TopPosts FetchPostsTEData={MostUpdatedAndHighestPosts} />
              ) : null}
              {FetchTeamLeadersLeaderboardTELoading ? (
                <div className="flex w-full h-full items-center justify-center">
                  <FaSpinner className="animate-spin" />
                </div>
              ) : FetchTeamLeadersLeaderboardTEData &&
                FetchTeamLeadersLeaderboardTEData.length > 0 ? (
                <Leaderboard users={result} />
              ) : null}
            </section>
            <section className="right-side bar-analytics lg:w-2/6 flex flex-col right-side w-full h-full rounded-3xl border-2 border-[--bg-color]  p-4 lg:pr-4 bg-[--rightSide-bg-color]">
              {FetchTeamMembersTeamLeaderLoading ? (
                <div className="flex w-full h-full items-center justify-center">
                  <FaSpinner className="animate-spin" />
                </div>
              ) : FetchTeamMembersTeamLeaders &&
                FetchTeamMembersTeamLeaders.length > 0 ? (
                <TotalMembers
                  FetchTeamMembersTeamLeaders={FetchTeamMembersTeamLeaders}
                />
              ) : null}

              {EngagementOverviewTEChartLoading ? (
                <div className="flex w-full h-full items-center justify-center">
                  <FaSpinner className="animate-spin" />
                </div>
              ) : EngagementOverviewTEChart &&
                EngagementOverviewTEChart.length > 0 ? (
                <EngagementChart EngagementOverview={EngagementOverview} />
              ) : null}
              {FetchTeamInsightsLoading ? (
                <div className="flex w-full h-full items-center justify-center">
                  <FaSpinner className="animate-spin" />
                </div>
              ) : FetchTeamInsights && FetchTeamInsights.length > 0 ? (
                <TeamInsights TeamNames={TeamNames} Insights={Insights} />
              ) : null}
            </section>
          </main>
        </div>
      )}
      {IsModelOpen && SelectedStatus === "suspensions" && (
        <SuspendedAccountsModal
          SuspendedAccTeamLeaders={SuspendedAccTeamLeaders}
          setIsModelOpen={setIsModelOpen}
        />
      )}

      {IsModelOpen && SelectedStatus === "absences" && (
        <AbsenceHandlerModal
          FetchHandlerAbsencesTEData={FetchHandlerAbsencesTEData}
          setIsModelOpen={setIsModelOpen}
        />
      )}
    </div>
  );
}
