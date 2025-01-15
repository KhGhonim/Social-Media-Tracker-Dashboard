import { FaArrowLeft } from "react-icons/fa";
import { FlagCountries } from "../../DB/Context";
import { useNavigate, useParams } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { UserCurrentStatus } from "../../types/types";
import { useAppSelector } from "../../Hooks/ReduxHooks";
import { useTranslation } from "react-i18next";
import Header from "../../components/Header/Header";
import PhoneHeader from "../../components/PhoneHeader/PhoneHeader";
import Navbar from "../../components/PhoneNavbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function TeamGames() {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const FLAG = FlagCountries[gameId];
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);
  const { t } = useTranslation();

  if (!gameId) {
    return <div>Game not found</div>;
  }

  return (
    <div className="cairo-ALAPHA bg-[--bg-color] overflow-hidden">
      <Toaster />
      <PhoneHeader />
      <Navbar />
      <Header />
      <Sidebar />

      <main
        className={`games-content  max-sm:p-5 ${
          userCurrentStatus.user.direction === "rtl" ? "lg:pr-32" : "lg:pl-32"
        }   w-full h-full flex flex-col`}
      >
        <main className="min-h-screen  ">
          {/* Tournament Header */}
          <div className="relative h-48 overflow-hidden bg-gradient-to-b from-blue-900 to-blue-800 text-white  rounded-lg">
          <button
            onClick={() => navigate("/profile")}
            className=" absolute top-4 z-30 left-4 flex items-center text-[--allwhite] mb-6 hover:text-white transition-colors"
          >
            <FaArrowLeft
              className={`w-5 h-5 ${
                userCurrentStatus.user.direction === "rtl" ? "ml-2" : "mr-2"
              } text-[--allwhite] hover:animate-pulse transition-all duration-300`}
            />
            {t("backToProfile")}
          </button>
            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1920&q=80"
              alt="Tournament banner"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={FLAG}
                    alt="USA Flag"
                    className="w-12 h-8 rounded shadow-lg"
                  />
                  <h1 className="text-4xl font-bold capitalize">
                    {" "}
                    {gameId} Team Games{" "}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </main>
      </main>
    </div>
  );
}
