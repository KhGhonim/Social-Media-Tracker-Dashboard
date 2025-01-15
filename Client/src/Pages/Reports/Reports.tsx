import ReportsTable from "../../components/ReportsPage/ReportsTable";
import Header from "../../components/Header/Header";
import PhoneHeader from "../../components/PhoneHeader/PhoneHeader";
import Navbar from "../../components/PhoneNavbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Toaster } from "react-hot-toast";
import useFetchReports from "../../Hooks/Report/useFetchReports";
import Loading from "../../Pages/Loading/Loading";
import { LuFileQuestion } from "react-icons/lu";
import { RiRobot2Line } from "react-icons/ri";
import { TiArrowRight } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { UserCurrentStatus } from "../../types/types";
import { useAppSelector } from "../../Hooks/ReduxHooks";

export default function Reports() {
  const { data, loading } = useFetchReports();
  const { t } = useTranslation();
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);
  return (
    <div className="cairo-ALAPHA bg-[--bg-color] overflow-hidden">
      <Toaster />
      <PhoneHeader />
      <Navbar />
      <Header />
      <Sidebar />
      <main className="py-10">
        {loading ? (
          <Loading />
        ) : data && data.length > 0 ? (
          <ReportsTable data={data} />
        ) : (
          <div className="min-h-screen">
            <div className=" bg-[--bg-color] flex items-center justify-center p-4">
              <div className="max-w-lg w-full bg-[--rightSide-bg-color] text-[--text-color] rounded-2xl shadow-lg p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <LuFileQuestion className="w-16 h-16 text-gray-200" />
                    <RiRobot2Line className="w-8 h-8 text-blue-500 absolute -bottom-2 -right-2" />
                  </div>
                </div>

                <h2 className="text-2xl font-semibold  mb-3">
                  {t("No Reports Yet")}
                </h2>

                <p className="text-gray-600 mb-8">
                  {t(
                    `Get started by visiting our AI page to generate your first intelligent report.`
                  )}
                </p>

                <Link
                  to="/ai"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[--navbar] hover:bg-[--navbar-hover] 
                           text-white font-medium rounded-lg transition-colors duration-200 group"
                >
                  <span>{t("Go to AI Generator")}</span>
                  <TiArrowRight
                    className={`w-4 h-4 ml-2  transition-transform duration-200 ${
                      userCurrentStatus.user.direction === "rtl"
                        ? "rotate-180 group-hover:-translate-x-1"
                        : "group-hover:translate-x-1"
                    }`}
                  />
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
