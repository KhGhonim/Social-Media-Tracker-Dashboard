import LeftSide from "../../components/DashboardPage/LeftSide/LeftSide";
import RightSide from "../../components/DashboardPage/RightSide/RightSide";
import Navbar from "../../components/PhoneNavbar/Navbar";
import Header from "../../components/Header/Header";
import PhoneHeader from "../../components/PhoneHeader/PhoneHeader";
import Sidebar from "../../components/Sidebar/Sidebar";
import ConsistOfDB from "../../components/ConsistOfDB/ConsistOfDB";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Hooks/ReduxHooks";
import { UserCurrentStatus } from "../../types/types";
import { SetDirection } from "../../Redux/userSlice";
import { Toaster } from "react-hot-toast";

const Dashboard = () => {
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
    <div className="dashboard w-full h-full max-lg:px-3 md:min-h-screen bg-[--bg-color] cairo-ALAPHA max-sm:pb-20">
      <Toaster />
      <ConsistOfDB />
      <PhoneHeader />
      <Navbar />
      <Header />
      <Sidebar />
      <main className="flex flex-col lg:flex-row gap-5">
        <section className="analytics-overview w-full lg:w-4/6">
          <LeftSide />
        </section>
        <section className="bar-analytics w-full lg:w-2/6 flex flex-col">
          <RightSide />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
