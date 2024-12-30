import ProjectsInsights from "../../components/OPpage/ProjectsInsights/ProjectsInsights";
import FloatingStats from "../../components/DashboardPage/LeftSide/FloatingStats/FloatingStats";
import SocailMediaStats from "../../components/DashboardPage/RightSide/SocailMediaStats/SocailMediaStats";
import SocialAnalyticsTable from "../../components/OPpage/SocialAnalyticsTable/SocialAnalyticsTable";
import TeamLeaderTable from "../../components/GrowthPage/TeamLeaderTable/TeamLeaderTable";
import Header from "../../components/Header/Header";
import PhoneHeader from "../../components/PhoneHeader/PhoneHeader";
import Navbar from "../../components/PhoneNavbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { socialData, TeamLeaderStats } from "../../DB/Context";
import { TeamLeader, UserCurrentStatus } from "../../types/types";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../Hooks/ReduxHooks";
import { useEffect } from "react";
import { SetDirection } from "../../Redux/userSlice";

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
  return (
    <div className="cairo-ALAPHA bg-[--bg-color] overflow-hidden">
      <PhoneHeader />
      <Navbar />
      <Header />
      <Sidebar />
      <main className="flex flex-col lg:flex-row gap-5 ">
        <section
          className={`analytics-overview  lg:w-4/6 left-side max-sm:p-5 ${
            userCurrentStatus.user.direction === "rtl" ? "lg:pr-32" : "lg:pl-32"
          }   w-full h-full flex flex-col`}
        >
          <SocialAnalyticsTable data={socialData} />
          <TeamLeaderTable data={TeamLeadersBoardTable as TeamLeader[]} />
        </section>
        <section className="right-side  bar-analytics w-full lg:w-2/6 flex flex-col  h-full rounded-3xl border-2 border-[#EDEDF5]/60  p-4 lg:pr-4 mr-4 bg-[--rightSide-bg-color]">
          <h1 className="text-lg text-[--text-color] lg:text-2xl font-bold">
            {t("projectsAnalytics")}
          </h1>
          <FloatingStats
            UserStats={TeamLeaderStats}
            AllFollowrsLoading={undefined}
            Styles={"grid grid-cols-1 md:grid-cols-2 gap-6 py-6 w-full  "}
            HandleTeamLeaderPopUpModel={null}
          />
          <SocailMediaStats />
          <ProjectsInsights />
        </section>
      </main>
    </div>
  );
}
