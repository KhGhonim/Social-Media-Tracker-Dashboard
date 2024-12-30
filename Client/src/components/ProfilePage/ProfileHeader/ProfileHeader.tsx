<<<<<<< HEAD
import { LuCheckCircle2 } from "react-icons/lu";
=======
>>>>>>> 1c510ab (Sockets and Updates)
import { GoXCircle } from "react-icons/go";
import { UserCurrentStatus } from "../../../types/types";
import { useAppSelector } from "../../../Hooks/ReduxHooks";
import { FaSpinner } from "react-icons/fa";
import GetCheckInOrOutForProfile from "../../../Hooks/ProfileHooks/GetCheckInOrOutForProfile";
import FetchUserDetails from "../../../Hooks/ProfileHooks/FetchUserDetails";
import { useTranslation } from "react-i18next";
<<<<<<< HEAD
=======
import { CiCircleCheck } from "react-icons/ci";
>>>>>>> 1c510ab (Sockets and Updates)

export default function ProfileHeader() {
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);
  const { CheckInOrOutForProfile } = GetCheckInOrOutForProfile();
  const { data, loading } = FetchUserDetails();
  const { t } = useTranslation();

  return (
    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-[--allwhite] py-8 px-3 flex justify-between flex-col lg:flex-row items-center relative space-x-6">
      <div className="flex space-x-4">
        <div className="w-20 mb-4 lg:w-24 h-20 lg:h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
          {loading ? (
            <div className="flex w-full h-full items-center justify-center">
              <FaSpinner className="animate-spin" />
            </div>
          ) : data && "profile_picture" in data ? (
            <img
              src={data.profile_picture as string}
              alt="Avatar"
              className="h-full w-full object-cover rounded-full border-2 border-indigo-500"
            />
          ) : (
            <img
              src="https://avatar.iran.liara.run/public/84"
              alt="Avatar"
              className="h-full w-full object-cover rounded-full border-2 border-indigo-500"
            />
          )}
        </div>
        <div className={`${userCurrentStatus.user.direction === "rtl" ? "pr-4" : "pl-0"}`}>
          <h1 className="text-base lg:text-3xl font-bold capitalize">
            {userCurrentStatus.user.name}
          </h1>
          <p className="text-sm opacity-80">{userCurrentStatus.user.email}</p>
          <p className="text-xs opacity-70 mt-1">
            {t('id')}: {userCurrentStatus.user.id}
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 max-md:left-0 lg:right-0 flex items-center space-x-2">
        {loading ? (
          <div className="flex w-full h-full items-center justify-center">
            <FaSpinner className="animate-spin" />
          </div>
        ) : CheckInOrOutForProfile ? (
          <span className="flex items-center space-x-1 bg-green-500/20 text-green-100 px-3 py-1 rounded-full">
<<<<<<< HEAD
            <LuCheckCircle2 className="w-4 h-4" />
=======
            <CiCircleCheck  className="w-4 h-4" />
>>>>>>> 1c510ab (Sockets and Updates)
            <span>{t('checkIn')}</span>
          </span>
        ) : (
          <span className="flex items-center space-x-1 bg-red-500/20 text-red-100 px-3 py-1 rounded-full">
            <GoXCircle className="w-4 h-4" />
            <span>{t('checkOut')}</span>
          </span>
        )}
      </div>
    </div>
  );
}
