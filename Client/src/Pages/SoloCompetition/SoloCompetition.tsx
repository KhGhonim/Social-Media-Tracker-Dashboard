import Header from "../../components/Header/Header";
import PhoneHeader from "../../components/PhoneHeader/PhoneHeader";
import Navbar from "../../components/PhoneNavbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { LuGamepad } from "react-icons/lu";
import { GameCard } from "../../components/SoloCompetitionPage/GameCard";
import { useTranslation } from "react-i18next";
import { FiTarget } from "react-icons/fi";
import { CiTrophy } from "react-icons/ci";
import { GiSparkles } from "react-icons/gi";
import { FaTrophy } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../Hooks/ReduxHooks";
import { UserCurrentStatus } from "../../types/types";
import { useEffect } from "react";
import { SetDirection } from "../../Redux/userSlice";

export default function SoloCompetition() {
  const handleJoinGame = (gameId: string) => {
    // Handle game joining logic
    console.log(`Joined game: ${gameId}`);
  };
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
  const { t } = useTranslation();
  const features = [
    {
      title: "winRewards",
      description: "earnBadgesPrizes",
      icon: <FaTrophy className="w-6 h-6 text-blue-600" />,
      bgColor: "bg-[--rightSide-bg-color]",
      borderColor: "border-blue-100",
    },
    {
      title: "setGoals",
      description: "challengeYourself",
      icon: <FiTarget className="w-6 h-6 text-purple-600" />,
      bgColor: "bg-[--rightSide-bg-color]",
      borderColor: "border-purple-100",
    },
    {
      title: "learnSkills",
      description: "masterTechniques",
      icon: <GiSparkles className="w-6 h-6 text-green-600" />,
      bgColor: "bg-[--rightSide-bg-color]",
      borderColor: "border-green-100",
    },
    {
      title: "compete",
      description: "climbLeaderboard",
      icon: <CiTrophy className="w-6 h-6 text-yellow-600" />,
      bgColor: "bg-[--rightSide-bg-color]",
      borderColor: "border-yellow-100",
    },
  ];

  const games = [
    {
      id: "viral-masterpiece",
      title: "viralMasterpieceChallengeTitle",
      description: "viralMasterpieceChallengeDescription",
      objective: "viralObjective",
      prize: "viralPrize",
      tips: ["viralTips"],
      duration: 7,
      targetMetric: "shares",
      targetValue: 1000,
    },
    {
      id: "engagement-sprint",
      title: "engagementSprintTitle",
      description: "engagementSprintDescription",
      objective: "sprintObjective",
      prize: "sprintPrize",
      tips: ["sprintTips"],
      duration: 1,
      targetMetric: "comments",
      targetValue: 500,
    },
    {
      id: "like-storm",
      title: "likeStormChallengeTitle",
      description: "likeStormChallengeDescription",
      objective: "likeObjective",
      prize: "likePrize",
      tips: ["likeTips"],
      duration: 5,
      targetMetric: "likes",
      targetValue: 5000,
    },
    {
      id: "impression-master",
      title: "impressionMasterQuestTitle",
      description: "impressionMasterQuestDescription",
      objective: "impressionObjective",
      prize: "impressionPrize",
      tips: ["impressionTips"],
      duration: 3,
      targetMetric: "impressions",
      targetValue: 100000,
    },
  ];

  return (
    <div className="cairo-ALAPHA bg-[--bg-color]">
      <PhoneHeader />
      <Navbar />
      <Header />
      <Sidebar />
      <div
        className={`SoloCompetition ${
          userCurrentStatus.user.direction === "rtl" ? "lg:pr-32" : "lg:pl-32"
        }  w-full h-full md:min-h-screen max-sm:pb-20`}
      >
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header Section */}
          <div>
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="bg-[--navbar] p-3 rounded-full animate-bounce">
                  <LuGamepad className="w-8 h-8 text-[--allwhite]" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-[--text-color] mb-4">
                {t("engagementGamesTitle")}
              </h1>
              <p className="text-xl text-[--text-color] max-w-2xl mx-auto">
                {t("engagementGamesDescription")}
              </p>
            </div>

            {/* Features Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`${feature.bgColor} ${feature.borderColor} p-6 rounded-lg hover:shadow-lg shadow hover:scale-105 transform transition`}
                >
                  <div className="flex items-center gap-3">
                    {feature.icon}
                    <div>
                      <h3 className="font-semibold text-[--text-color]">
                        {t(feature.title)}
                      </h3>
                      <p className="text-sm text-[--text-color]">
                        {t(feature.description)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Game Cards Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {games.map((game) => (
              <GameCard key={game.id} game={game} onJoin={handleJoinGame} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
