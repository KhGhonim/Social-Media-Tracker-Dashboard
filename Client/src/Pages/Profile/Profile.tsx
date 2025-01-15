import ProfileHeader from "../../components/ProfilePage/ProfileHeader/ProfileHeader";
import Performance from "../../components/ProfilePage/ProfilePerformance/ProfilePerformance";
import Achievements from "../../components/ProfilePage/ProfileAchievements/ProfileAchievements";
import CheckInOut from "../../components/ProfilePage/CheckInOut/CheckInOut";
import Header from "../../components/Header/Header";
import PhoneHeader from "../../components/PhoneHeader/PhoneHeader";
import Navbar from "../../components/PhoneNavbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import ConnectedAccounts from "../../components/ProfilePage/ConnectedAccounts/ConnectedAccounts";
import { FaSpinner } from "react-icons/fa";
import { Toaster } from "react-hot-toast";
import ProfileHungerGames from "../../components/HungerGames/ProfileHungerGames/ProfileHungerGames";
import useCheckIn from "../../Hooks/ProfileHooks/CechIn";
import useCheckOut from "../../Hooks/ProfileHooks/CheckOut";
import useFetchConnectedAcc from "../../Hooks/ProfileHooks/FetchConnectedAcc";
import { useAppDispatch, useAppSelector } from "../../Hooks/ReduxHooks";
import { useEffect } from "react";
import { UserCurrentStatus } from "../../types/types";
import { SetDirection } from "../../Redux/userSlice";
import Loading from "../../Pages/Loading/Loading";

const Profile = () => {
  const { HandleCheckIn } = useCheckIn();
  const { HandleCheckOut } = useCheckOut();
  const { data, loading } = useFetchConnectedAcc();
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
      ) : (
        <main className="min-h-screen  flex justify-center items-center p-6">
          <div className="max-w-4xl w-full bg-[--rightSide-bg-color] text-[--text-color] shadow-2xl rounded-2xl overflow-hidden">
            {/* Profile Section */}
            <ProfileHeader />
            {/* Performance Section */}
            <Performance />
            {/* Achievements Section */}
            <Achievements />
            <ProfileHungerGames />
            {/* Connected Accounts Section */}
            {loading ? (
              <div className="flex w-full h-full items-center justify-center">
                <FaSpinner className="animate-spin" />
              </div>
            ) : (
              <ConnectedAccounts data={data} />
            )}
            {/* Actions Section */}
            <CheckInOut
              HandleCheckIn={HandleCheckIn}
              HandleCheckOut={HandleCheckOut}
            />
          </div>
        </main>
      )}
    </div>
  );
};

export default Profile;
