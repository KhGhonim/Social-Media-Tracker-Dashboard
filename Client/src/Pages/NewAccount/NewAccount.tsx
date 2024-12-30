import Header from "../../components/Header/Header";
import PhoneHeader from "../../components/PhoneHeader/PhoneHeader";
import Navbar from "../../components/PhoneNavbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import NewAccountForm from "../../components/NewAccountPage/NewAccountForm";
import UseAddNewSocialAccount from "../../Hooks/NewUserAndSMAcc/UseAddNewSocialAccount";
import { Toaster } from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "../../Hooks/ReduxHooks";
import { useEffect } from "react";
import { UserCurrentStatus } from "../../types/types";
import { SetDirection } from "../../Redux/userSlice";

export default function NewAccount() {
  const { setFormData, isLoading, handleSubmit } = UseAddNewSocialAccount();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value.toLowerCase(),
    }));
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


  return (
    <div className="cairo-ALAPHA bg-[--bg-color] lg:pb-10">
      <Toaster />
      <PhoneHeader />
      <Navbar />
      <Header />
      <Sidebar />
      <NewAccountForm
        isloading={isLoading}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </div>
  );
}
