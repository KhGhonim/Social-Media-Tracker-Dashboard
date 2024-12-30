import { GameCard } from "../../components/HungerGames/GameCard/GameCard";
import TournamentHeader from "../../components/HungerGames/TournamentHeader/TournamentHeader";
import { GameScore, UserCurrentStatus } from "../../types/types";
import Header from "../../components/Header/Header";
import PhoneHeader from "../../components/PhoneHeader/PhoneHeader";
import Navbar from "../../components/PhoneNavbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { FaHeart, FaShare } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FiTrendingUp } from "react-icons/fi";
import { useAppSelector } from "../../Hooks/ReduxHooks";
import { useEffect } from "react";

export default function HungerGames() {
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);
  useEffect(() => {
    const direction = userCurrentStatus.user.direction;
    document.documentElement.dir = direction;
  }, [userCurrentStatus.user.direction]);

  const GAME_TYPES = [
    {
      id: "likes",
      name: "likeLegendTitle",
      description: "likeLegendDescription",
      scoreType: "likes",
      icon: FaHeart,
    },
    {
      id: "shares",
      name: "shareSuperstarTitle",
      description: "shareSuperstarDescription",
      scoreType: "shares",
      icon: FaShare,
    },
    {
      id: "comments",
      name: "commentKingTitle",
      description: "commentKingDescription",
      scoreType: "comments",
      icon: FaMessage,
    },
    {
      id: "impressions",
      name: "impressionEmperorTitle",
      description: "impressionEmperorDescription",
      scoreType: "impressions",
      icon: FiTrendingUp,
    },
  ];

  return (
    <div className="cairo-ALAPHA bg-[--bg-color]">
      <PhoneHeader />
      <Navbar />
      <Header />
      <Sidebar />
      <div
        className={`HungerGames  ${
          userCurrentStatus.user.direction === "rtl" ? "lg:pr-32" : "lg:pl-32"
        }  w-full h-full md:min-h-screen max-sm:pb-20`}
      >
        <TournamentHeader />
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {GAME_TYPES?.map((game) => (
              <GameCard
                key={game.id}
                game={{
                  ...game,
                  scoreType: game.scoreType as keyof GameScore,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
