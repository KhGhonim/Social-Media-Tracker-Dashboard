import useSignOut from "../../../Hooks/Auth/SignOut";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoMdPerson } from "react-icons/io";
import { Link } from "react-router-dom";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useAppSelector } from "../../../Hooks/ReduxHooks";
import { UserCurrentStatus } from "../../../types/types";
import { IoSettings } from "react-icons/io5";
import FetchUserDetails from "../../../Hooks/ProfileHooks/FetchUserDetails";
import { FaSpinner } from "react-icons/fa";
import LangSelector from "../Lang/LangSelector";
import { useTranslation } from "react-i18next";

export default function ProfileDropDown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const { t } = useTranslation();


  const ref = useRef(null);
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const { HandleSignOut } = useSignOut();
  const { data, loading } = FetchUserDetails();
  return (
    <div
      ref={ref}
      className="flex items-center cursor-pointer gap-2 relative z-40"
    >
      <div
        onClick={toggleDropdown}
        className="relative flex items-center gap-2 hover:bg-[--rightSide-bg-color] p-2 hover:rounded-3xl transition-all duration-300 ease-in-out"
      >
        {loading ? (
          <div className="flex w-full h-full items-center justify-center">
            <FaSpinner className="animate-spin" />
          </div>
        ) : data && "profile_picture" in data ? (
          <img
            src={data.profile_picture as string}
            alt="Avatar"
            loading="lazy"
            className="h-8 w-8 object-cover rounded-full border-2 border-indigo-500"
          />
        ) : (
          <img
            src="https://avatar.iran.liara.run/public/84"
            alt="Avatar"
            className="h-8 w-8 rounded-full border-2 border-indigo-500"
          />
        )}

        <div className="flex flex-col justify-center text-center">
          <span className="text-[--text-color] text-[8px] font-medium capitalize">
            {userCurrentStatus.user.email}
          </span>
          <span className="text-[--text-color] text-xs font-medium capitalize">
            {userCurrentStatus.user.name}
          </span>
        </div>
        <IoIosArrowDown
          className={`${
            isDropdownOpen ? "rotate-180 " : ""
          } text-[--text-color] transition-all duration-300 ease-in-out`}
        />
      </div>

      {isDropdownOpen && (
        <div
          className={`absolute 
          ${userCurrentStatus.user.direction === "ltr" ? "right-0 lg:right-0" : "-right-16 -lg:right-20"}
           mt-64 lg:mt-40 w-56 bg-[--bg-color] border border-b-2 rounded-t-lg shadow-xl z-10`}
        >
          <ul className="divide-y divide-gray-100">
            <li>
              <Link
                to="/profile"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[--rightSide-bg-color] text-[--text-color]"
              >
                <IoMdPerson />
                {t("profile")}
              </Link>
            </li>
            <li>
              <Link
                to="/profile/edit"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[--rightSide-bg-color] text-[--text-color]"
              >
                <IoSettings />
                {t("settings")}
              </Link>
            </li>

            <li className="lg:hidden">
              <div
                onClick={HandleSignOut}
                className="flex cursor-pointer items-center gap-3 px-4 py-3 rounded-lg hover:bg-[--rightSide-bg-color] text-[--text-color]"
              >
                <RiLogoutCircleLine />
                {t("logout")}
              </div>
            </li>
            <li className="lg:hidden">
              <LangSelector />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
