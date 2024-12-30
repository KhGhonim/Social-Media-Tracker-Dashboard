import Header from "../../components/Header/Header";
import PhoneHeader from "../../components/PhoneHeader/PhoneHeader";
import Navbar from "../../components/PhoneNavbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import PlatformSelector from "../../components/GrowthPage/PlatformSelector/PlatformSelector";
import Loading from "../../Pages/Loading/Loading";
import AccountTabs from "../../components/GrowthPage/AccountTabs/AccountTabs";
import StatsForm from "../../components/GrowthPage/StatsForm/StatsForm";
import { Toaster } from "react-hot-toast";
import UseSaveGrowth from "../../Hooks/GrowtHooks/SaveGrowthData";
import EmptyState from "../../components/GrowthPage/EmptyState/EmptyState";
import useFetchConnectedAcc from "../../Hooks/ProfileHooks/FetchConnectedAcc";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../Hooks/ReduxHooks";
import { useEffect } from "react";
import { UserCurrentStatus } from "../../types/types";
import { SetDirection } from "../../Redux/userSlice";

export default function Growth() {
  const { data, loading } = useFetchConnectedAcc();
  const {
    SelectedAccount,
    setSelectedAccount,
    stats,
    setStats,
    handleSubmit,
    isloading,
    selectedPlatform,
    setSelectedPlatform,
  } = UseSaveGrowth();
  const filteredPlatforms = data?.filter(
    (acc) => acc.platform.toLowerCase() === selectedPlatform
  );
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

  return (
    <div className="cairo-ALAPHA bg-[--bg-color]">
      <Toaster />
      <PhoneHeader />
      <Navbar />
      <Header />
      <Sidebar />
      {loading ? (
        <Loading />
      ) : data && data.length > 0 ? (
        <div className="min-h-screen bg-[--bg-color] py-3">
          <div className="max-w-7xl mx-auto px-2 lg:px-8  py-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-[--text-color] mb-2">
                {t("dashboardTitle")}
              </h1>
              <p className="text-gray-500">{t("dashboardDescription")}</p>
            </div>
            <PlatformSelector
              selectedPlatform={selectedPlatform}
              setSelectedPlatform={setSelectedPlatform}
            />
            <AccountTabs
              filteredPlatforms={filteredPlatforms}
              SelectedAccount={SelectedAccount}
              setSelectedAccount={setSelectedAccount}
            />
            {filteredPlatforms.length > 0 ? (
              <StatsForm
                handleSubmit={handleSubmit}
                platform={selectedPlatform}
                stats={stats}
                setStats={setStats}
                isloading={isloading}
              />
            ) : (
              <EmptyState />
            )}
          </div>
        </div>
      ) : (
        <div className="min-h-screen bg-[--bg-color]">
          <div className="max-w-5xl mx-auto px-2 lg:px-8  py-8">
            <div className="text-center mb-8 space-y-8">
              <h1 className="text-3xl font-bold text-[--text-color] mb-2">
                {t("dashboardTitle")}
              </h1>
              <p className="text-red-600 text-2xl font-bold pb-20 w-full text-center">
                {t("noSocialMediaAccounts")}
                <br />
                <span className="text-red-500 mt-4 font-semibold">
                  {t("connectAccounts")}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
