import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UserCurrentStatus } from "../../types/types";
import {
  FaArrowLeft,
  FaTrophy,
  FaHeart,
  FaShare,
  FaSpinner,
} from "react-icons/fa";
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
import useGames from "../../Hooks/HungerGAMES/TeamGAMES/useGames";
import { Toaster } from "react-hot-toast";
import useFetchGamesData from "../../Hooks/HungerGAMES/TeamGAMES/useFetchGamesData";

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
  const navigate = useNavigate();
  const game = GAME_TYPES.find((g) => g.id === gameId);
  const { FormData, HandleChange, HandleSubmit, IsLoading } = useGames(gameId);
  const { data, loading } = useFetchGamesData(IsLoading);
  const entries = data.filter((entry) => entry.type === gameId);

  if (!game) {
    return <div>Challenge not found</div>;
  }

  return (
    <div className="cairo-ALAPHA bg-[--bg-color]">
      <Toaster />
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
        {/* Retrun back button */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg py-8">
          <div className="max-w-7xl mx-auto px-4">
            <button
              onClick={() => navigate("/join-competition")}
              className="flex items-center text-[--allwhite] mb-6 hover:text-white transition-colors"
            >
              <FaArrowLeft
                className={`w-5 h-5 ${
                  userCurrentStatus.user.direction === "rtl" ? "ml-2" : "mr-2"
                } text-[--allwhite] hover:animate-pulse transition-all duration-300`}
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
                <form onSubmit={HandleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium  mb-1">
                      {t("achievementScreenshotURL")}
                    </label>
                    <input
                      type="url"
                      required
                      name="achievementUrl"
                      defaultValue={FormData.achievementUrl}
                      onChange={(eo) => {
                        HandleChange(eo);
                      }}
                      className="w-full px-3 py-2 border rounded-lg bg-[--bg-color]  focus:ring-2 outline-none focus:ring-[--navbar]"
                      placeholder="https://x.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm capitalize  font-medium mb-1">
                      {t("likesCount")}
                    </label>
                    <input
                      type="number"
                      required
                      name="score"
                      defaultValue={FormData.score}
                      onChange={(eo) => {
                        HandleChange(eo);
                      }}
                      className="w-full px-3 py-2 border rounded-lg bg-[--bg-color] outline-none  focus:ring-2 focus:ring-[--navbar]"
                      placeholder={t("Enter your score")}
                    />
                  </div>

                  <button
                    disabled={IsLoading}
                    type="submit"
                    className="w-full bg-[--navbar] text-[--allwhite] py-2 px-4 rounded-lg hover:bg-[--navbar-hover] transition-colors"
                  >
                    {IsLoading ? (
                      <div className="flex w-full h-full items-center justify-center">
                        <FaSpinner className="animate-spin" />
                      </div>
                    ) : (
                      t("submitAchievement")
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Leaderboard */}
            {loading ? (
              <div className="flex w-full h-96 items-center justify-center">
                <FaSpinner className="animate-spin" />
              </div>
            ) : entries && entries.length > 0 ? (
              <div className="lg:col-span-2">
                <div className="bg-[--rightSide-bg-color] text-[--text-color] rounded-xl shadow-lg p-6">
                  <h2 className="text-2xl font-semibold mb-6">
                    {t("challengeLeaderboard")}
                  </h2>
                  <LeaderboardTable entries={entries} />
                </div>
              </div>
            ) : (
              <div className="lg:col-span-2">
                <div className="bg-[--rightSide-bg-color] text-[--text-color] rounded-xl shadow-lg p-6">
                  <h2 className="text-2xl font-semibold mb-6">
                    {t("challengeLeaderboard")}
                  </h2>
                  <p className="text-gray-600 text-center">
                    {t("noEntriesYet")}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
