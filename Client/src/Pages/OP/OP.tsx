import ProjectsInsights from "../../components/OPpage/ProjectsInsights/ProjectsInsights";
import FloatingStats from "../../components/DashboardPage/LeftSide/FloatingStats/FloatingStats";
import SocialAnalyticsTable from "../../components/OPpage/SocialAnalyticsTable/SocialAnalyticsTable";
import TeamLeaderTable from "../../components/GrowthPage/TeamLeaderTable/TeamLeaderTable";
import Header from "../../components/Header/Header";
import PhoneHeader from "../../components/PhoneHeader/PhoneHeader";
import Navbar from "../../components/PhoneNavbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { TeamLeader, UserCurrentStatus } from "../../types/types";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../Hooks/ReduxHooks";
import { useEffect, useState } from "react";
import { SetDirection } from "../../Redux/userSlice";
import SuspendedAccountsModal from "../../components/SocialMediaPage/StatsModals/SuspendedAccountsModal";
import AbsenceHandlerModal from "../../components/SocialMediaPage/StatsModals/AbsenceHandlerModal";
import FetcbOPSuspendedAccounts from "../../Hooks/Operations/useSuspendedAccounts";
import { IoIosPerson } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";
import { MdNoAccounts } from "react-icons/md";
import FetchHandlerAbsencesOperations from "../../Hooks/Operations/useAbsenceHandler";
import ActiveAccountsModal from "../../components/SocialMediaPage/StatsModals/ActiveAccountsModal";
import FetchActiveAccountsOperations from "../../Hooks/Operations/useActiveAccounts";
import StatCards from "../../components/OPpage/StatCards/StatCards";
import {
  CalculateEngagementOperations,
  CalculateFollowersOperations,
  CalculateFollowingOperations,
  CalculateImpressionsOperations,
  CalculateOperationsInsights,
  CalculateOperationsSMTopAccounts,
  CalculatePostsOperations,
  formatNumber,
} from "../../Calculator/CalculateAnaltiycs";
import { BiSolidCommentEdit } from "react-icons/bi";
import { FaEye, FaShareAltSquare, FaSpinner } from "react-icons/fa";
import FetchPostsOperations from "../../Hooks/Operations/useFetchPosts";
import FetchImpressionsOperations from "../../Hooks/Operations/useFetchImpressions";
import FetchEngagementOperations from "../../Hooks/Operations/useFetchEngagement";
import FetchFollowersOperations from "../../Hooks/Operations/useFetchFollowers";
import FetchFollowingOperations from "../../Hooks/Operations/useFetchFollowing";
import FetchProjectInsights from "../../Hooks/Operations/useProjectInsights";
import { SlUserFollow } from "react-icons/sl";
import { GiShadowFollower } from "react-icons/gi";
import FetchuseTopAccountsOperations from "../../Hooks/Operations/useTopAccounts";
import { Toaster } from "react-hot-toast";
import Loading from "../../Pages/Loading/Loading";

export default function OP() {
  const { t } = useTranslation();
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);
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
  const [SelectedStatus, setSelectedStatus] = useState(null);
  const [IsModelOpen, setIsModelOpen] = useState(false);
  const HandleOperationPopUpModel = (data) => {
    setIsModelOpen(true);
    setSelectedStatus(data);
  };
  const { SuspendedAccOperations, SuspendedAccOperationsLoading } =
    FetcbOPSuspendedAccounts();
  const { FetchHandlerAbsencesOperationsData } =
    FetchHandlerAbsencesOperations();
  const { FetchActiveAccountsOperationsData } = FetchActiveAccountsOperations();
  const { FetchPostsOperationsData, FetchPostsOperationsLoading } =
    FetchPostsOperations();
  const PostValues = CalculatePostsOperations(FetchPostsOperationsData);
  const { FetchImpressionsOperationsData } = FetchImpressionsOperations();
  const ImpressionsValue = CalculateImpressionsOperations(
    FetchImpressionsOperationsData
  );
  const { FetchEngagementOperationsData } = FetchEngagementOperations();
  const EngagementValue = CalculateEngagementOperations(
    FetchEngagementOperationsData
  );
  const { FetchFollowersOperationsData } = FetchFollowersOperations();
  const FollowersValue = CalculateFollowersOperations(
    FetchFollowersOperationsData
  );
  const { FetchFollowingOperationsData } = FetchFollowingOperations();
  const FollowingValue = CalculateFollowingOperations(
    FetchFollowingOperationsData
  );
  const { FetchProjectInsightsData, FetchProjectInsightsLoading } =
    FetchProjectInsights();
  const Insights = CalculateOperationsInsights(FetchProjectInsightsData);
  const {
    FetchuseTopAccountsOperationsData,
    FetchuseTopAccountsOperationsLoading,
  } = FetchuseTopAccountsOperations();
  const TopAccounts = CalculateOperationsSMTopAccounts(
    FetchuseTopAccountsOperationsData
  );
  const TeamLeadersBoardTable = [
    {
      id: "1",
      name: t("sarahJohnson"),
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      role: t("JuniorTeamLead"),
      tasksCompleted: 127,
      productivity: 94,
      leadershipScore: 92,
      socialScore: 88,
      teamSize: 12,
      status: "active",
    },
    {
      id: "2",
      name: t("johnDoe"),
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      role: t("TeamLead"),
      tasksCompleted: 95,
      productivity: 87,
      leadershipScore: 85,
      socialScore: 80,
      teamSize: 10,
      status: "active",
    },
    {
      id: "3",
      name: t("janeSmith"),
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      role: t("SeniorTeamLead"),
      tasksCompleted: 80,
      productivity: 75,
      leadershipScore: 72,
      socialScore: 70,
      teamSize: 8,
      status: "offline",
    },
  ];
  const OperationManagerStats = [
    {
      title: "suspendedAccounts",
      value: SuspendedAccOperations.length,
      icon: <MdNoAccounts />,
      TE: "suspensions",
    },
    {
      title: "activeAccounts",
      value: FetchActiveAccountsOperationsData.length,
      icon: <IoPersonCircle />,
      TE: "active",
    },
    {
      title: "todayAbsenceHandler",
      value: FetchHandlerAbsencesOperationsData.length,
      icon: <IoIosPerson />,
      TE: "absences",
    },
  ];
  const OperationsStatsCards = [
    {
      title: "Posts",
      value: formatNumber(PostValues),
      icon: <BiSolidCommentEdit />,
      class: "bg-[#FF9933]",
    },
    {
      title: "Impressions",
      value: formatNumber(ImpressionsValue),
      icon: <FaEye />,
      class: "bg-[#063970]",
    },
    {
      title: "Engagement",
      value: formatNumber(EngagementValue),
      icon: <FaShareAltSquare />,
      class: "bg-[#910076]",
    },
    {
      title: "Followers",
      value: formatNumber(FollowersValue),
      icon: <GiShadowFollower />,
      class: "bg-[#1DA1F2]",
    },
    {
      title: "Following",
      value: formatNumber(FollowingValue),
      icon: <SlUserFollow />,
      class: "bg-[#1D1C1C]",
    },
  ];

  return (
    <div className="cairo-ALAPHA bg-[--bg-color] overflow-hidden">
      <Toaster />
      <PhoneHeader />
      <Navbar />
      <Header />
      <Sidebar />
      {FetchProjectInsightsLoading ? (
        <Loading />
      ) : (
        <main className="flex flex-col lg:flex-row gap-5 ">
          <section
            className={`analytics-overview  lg:w-4/6 left-side max-sm:p-5 ${
              userCurrentStatus.user.direction === "rtl"
                ? "lg:pr-32"
                : "lg:pl-32"
            }   w-full h-full flex flex-col`}
          >
            {FetchuseTopAccountsOperationsLoading ? (
              <div className="flex w-full h-full items-center justify-center">
                <FaSpinner className="animate-spin" />
              </div>
            ) : FetchuseTopAccountsOperationsData &&
              FetchuseTopAccountsOperationsData.length > 0 ? (
              <SocialAnalyticsTable data={TopAccounts} />
            ) : null}
            <TeamLeaderTable data={TeamLeadersBoardTable as TeamLeader[]} />
          </section>

          <section className={`right-side max-lg:mb-20  bar-analytics w-full lg:w-2/6 flex flex-col  h-full rounded-3xl border-2 border-[#EDEDF5]/60  p-4 lg:pr-4 ${userCurrentStatus.user.direction === "rtl" ? "lg:ml-4" : "lg:mr-4"} bg-[--rightSide-bg-color]`}>
            <h1 className="text-lg text-[--text-color] lg:text-2xl font-bold">
              {t("projectsAnalytics")}
            </h1>
            <FloatingStats
              UserStats={OperationManagerStats}
              AllFollowrsLoading={SuspendedAccOperationsLoading}
              Styles={"grid grid-cols-1 md:grid-cols-2 gap-6 py-6 w-full  "}
              HandleTeamLeaderPopUpModel={HandleOperationPopUpModel}
            />
            <StatCards
              OperationsStatsCards={OperationsStatsCards}
              loading={FetchPostsOperationsLoading}
            />
            {FetchProjectInsightsLoading ? (
              <div className="flex w-full h-full items-center justify-center">
                <FaSpinner className="animate-spin" />
              </div>
            ) : FetchProjectInsightsData &&
              FetchProjectInsightsData.length > 0 ? (
              <ProjectsInsights Insights={Insights} />
            ) : null}
          </section>
        </main>
      )}

      {IsModelOpen && SelectedStatus === "suspensions" && (
        <SuspendedAccountsModal
          SuspendedAccTeamLeaders={SuspendedAccOperations}
          setIsModelOpen={setIsModelOpen}
        />
      )}

      {IsModelOpen && SelectedStatus === "absences" && (
        <AbsenceHandlerModal
          FetchHandlerAbsencesTEData={FetchHandlerAbsencesOperationsData}
          setIsModelOpen={setIsModelOpen}
        />
      )}

      {IsModelOpen && SelectedStatus === "active" && (
        <ActiveAccountsModal
          FetchHandlerAbsencesTEData={FetchActiveAccountsOperationsData}
          setIsModelOpen={setIsModelOpen}
        />
      )}
    </div>
  );
}
