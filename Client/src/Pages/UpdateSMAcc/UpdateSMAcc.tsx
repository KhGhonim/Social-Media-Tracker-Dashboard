import { FaPencil } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import ProfileHeader from "../../components/UpdateSMAccPage/ProfileHeader/ProfileHeader";
import AccInfo from "../../components/UpdateSMAccPage/AccInfo/AccInfo";
import UpdateAccForm from "../../components/UpdateSMAccPage/UpdateAccForm/UpdateAccForm";
import Header from "../../components/Header/Header";
import PhoneHeader from "../../components/PhoneHeader/PhoneHeader";
import Navbar from "../../components/PhoneNavbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import AccountDetails from "../../components/UpdateSMAccPage/AccountDetails/AccountDetails";
import useSpecificAcc from "../../Hooks/useSpecificcAcc";
import Loading from "../../Pages/Loading/Loading";
import { AccountData, UserCurrentStatus } from "../../types/types";
import useUpdateAcc from "../../Hooks/Update/UpdateAcc";
import { Toaster } from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "../../Hooks/ReduxHooks";
import { useEffect } from "react";
import { SetDirection } from "../../Redux/userSlice";

export default function UpdateSMAcc() {
  const { accId } = useParams();
  const { data, loading } = useSpecificAcc(accId);
  const { handleSubmit, isEditing, formData, setFormData, setIsEditing } =
    useUpdateAcc(data);
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

  const {
    acc_bio,
    acc_category,
    acc_email,
    acc_mobile,
    acc_name,
    acc_state,
    acc_url,
    acc_username,
    country,
    platform,
    region,
  } = data as unknown as AccountData;

  if (loading) {
    return <Loading />;
  }
  if (data && isEditing) {
    return (
      <div className="bg-[--bg-color] cairo-ALAPHA">
        <Toaster />
        <PhoneHeader />
        <Navbar />
        <Header />
        <Sidebar />
        <div className="h-full lg:min-h-screen">
          <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <UpdateAccForm
              formData={formData}
              onCancel={() => setIsEditing(false)}
              setFormData={setFormData}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    );
  }

  if (data) {
    return (
      <div className="bg-[--bg-color] cairo-ALAPHA">
        <PhoneHeader />
        <Navbar />
        <Header />
        <Sidebar />
        <div className="h-full lg:min-h-screen pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-[--text-color]">
                Profile
              </h1>
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-2 px-4 py-2 bg-[--navbar] text-white rounded-lg hover:bg-[--navbar-hover] shadow-md transition-all durations-300 ease-in-out"
              >
                <FaPencil className="w-4 h-4" />
                Edit Profile
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ProfileHeader
                acc_bio={acc_bio}
                acc_category={acc_category}
                acc_name={acc_name}
                acc_state={acc_state}
                country={country}
                platform={platform}
              />
              <AccInfo
                acc_mobile={acc_mobile}
                acc_email={acc_email}
                acc_username={acc_username}
              />
            </div>
            <div className="mt-8">
              <AccountDetails
                acc_url={acc_url}
                region={region}
                country={country}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
