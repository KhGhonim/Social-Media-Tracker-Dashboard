import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GameEntry, UserCurrentStatus } from "../../types/types";
import { FaArrowLeft, FaTrophy, FaHeart, FaShare } from "react-icons/fa";
import LeaderboardTable from "../../components/HungerGames/LeaderboardTable/LeaderboardTable";
import Header from "../../components/Header/Header";
import PhoneHeader from "../../components/PhoneHeader/PhoneHeader";
import Navbar from "../../components/PhoneNavbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useTranslation } from "react-i18next";
import { FaMessage } from "react-icons/fa6";
import { FiTrendingUp } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "../../Hooks/ReduxHooks";
import { SetDirection } from "../../Redux/userSlice";

export default function ChallengePage() {
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

  const { gameId } = useParams();
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

  const MOCK_ENTRIES = [
    {
      id: "1",
      userId: "user1",
      username: "SocialPro",
      gameType: "likes",
      achievementUrl:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113",
      score: { likes: 1500 },
      timestamp: new Date().toISOString(),
    },
    {
      id: "2",
      userId: "user2",
      username: "ViralKing",
      gameType: "shares",
      achievementUrl:
        "https://images.unsplash.com/photo-1611162616305-c69b3037c7bb",
      score: { shares: 2300 },
      timestamp: new Date().toISOString(),
    },
    {
      id: "3",
      userId: "user3",
      username: "EngagementQueen",
      gameType: "comments",
      achievementUrl:
        "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb",
      score: { comments: 850 },
      timestamp: new Date().toISOString(),
    },
  ];

  const navigate = useNavigate();
  const game = GAME_TYPES.find((g) => g.id === gameId);

  const [achievementUrl, setAchievementUrl] = useState("");
  const [score, setScore] = useState("");
  const [entries, setEntries] = useState<GameEntry[]>(
    MOCK_ENTRIES.filter((entry) => entry.gameType === gameId)
  );

  if (!game) {
    return <div>Challenge not found</div>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEntry: GameEntry = {
      id: Date.now().toString(),
      userId: "currentUser",
      username: "CurrentUser",
      gameType: game.id,
      achievementUrl,
      score: { [game.scoreType]: Number(score) },
      timestamp: new Date().toISOString(),
    };

    setEntries((prev) => [...prev, newEntry]);
    setAchievementUrl("");
    setScore("");
  };

  if (!game) {
    return <div>Challenge not found</div>;
  }

  return (
    <div className="cairo-ALAPHA bg-[--bg-color]">
      <PhoneHeader />
      <Navbar />
      <Header />
      <Sidebar />
      <div
        className={`${
          userCurrentStatus.user.direction === "rtl"
            ? "lg:!pr-32 lg:!pl-5"
            : "lg:pl-32 lg:pr-5"
        }  w-full h-full md:min-h-screen max-sm:pb-20 `}
      >
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg py-8">
          <div className="max-w-7xl mx-auto px-4">
            <button
              onClick={() => navigate("/join-competition")}
              className="flex items-center text-[--allwhite] mb-6 hover:text-white transition-colors"
            >
              <FaArrowLeft
                className={`w-5 h-5 ${
                  userCurrentStatus.user.direction === "rtl" ? "ml-2" : "mr-2"
                } text-[--allwhite]`}
              />
              {t("backToChallenges")}
            </button>

            <div className="flex items-center mb-4">
              <FaTrophy
                className={`w-12 h-12 text-yellow-300 ${
                  userCurrentStatus.user.direction === "rtl" ? "ml-3" : "mr-3"
                } `}
              />
              <h1 className="text-4xl font-bold text-white">{t(game.name)}</h1>
            </div>
            <p className="text-xl text-gray-100">{t(game.description)}</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Submit Achievement Form */}
            <div className="lg:col-span-1">
              <div className="bg-[--rightSide-bg-color] text-[--text-color] rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-semibold mb-6">
                  {t("submitYourAchievement")}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium  mb-1">
                      {t("achievementScreenshotURL")}
                    </label>
                    <input
                      type="url"
                      required
                      value={achievementUrl}
                      onChange={(e) => setAchievementUrl(e.target.value)}
                      className="w-full px-3 py-2 border rounded-lg bg-[--bg-color]  focus:ring-2 outline-none focus:ring-[--navbar]"
                      placeholder="https://x.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm capitalize  font-medium mb-1">
                      {game.scoreType} {t("likesCount")}
                    </label>
                    <input
                      type="number"
                      required
                      value={score}
                      onChange={(e) => setScore(e.target.value)}
                      className="w-full px-3 py-2 border rounded-lg bg-[--bg-color] outline-none  focus:ring-2 focus:ring-[--navbar]"
                      placeholder={t("Enter your score")}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[--navbar] text-[--allwhite] py-2 px-4 rounded-lg hover:bg-[--navbar-hover] transition-colors"
                  >
                    {t("submitAchievement")}
                  </button>
                </form>
              </div>
            </div>

            {/* Leaderboard */}
            <div className="lg:col-span-2">
              <div className="bg-[--rightSide-bg-color] text-[--text-color] rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-semibold mb-6">
                  {t("challengeLeaderboard")}
                </h2>
                <LeaderboardTable entries={entries} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
