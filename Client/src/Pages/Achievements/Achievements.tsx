import { FaTrophy } from "react-icons/fa";
import Header from "../../components/Header/Header";
import PhoneHeader from "../../components/PhoneHeader/PhoneHeader";
import Navbar from "../../components/PhoneNavbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import AchievementForm from "../../components/AchievementPage/AchievementForm";
import { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../Hooks/ReduxHooks";
import { useEffect } from "react";
import { UserCurrentStatus } from "../../types/types";
import { SetDirection } from "../../Redux/userSlice";

export default function Achievements() {
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
      <div className=" py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <FaTrophy className="mx-auto h-12 w-12 text-blue-600" />
            <h2 className="mt-6 text-3xl font-bold text-[--text-color]">
            {t('shareYourAchievements')}
            </h2>
            <p className="mt-2 text-lg text-gray-500">
            {t('showcaseAchievements')}
            </p>
          </div>
          <AchievementForm />
        </div>
      </div>
    </div>
  );
}
