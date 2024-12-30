import { DesktopSideBar } from "../../DB/Context";
import { IoHomeOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import useSignOut from "../../Hooks/Auth/SignOut";
import { useAppSelector } from "../../Hooks/ReduxHooks";
import { UserCurrentStatus } from "../../types/types";
import { useTranslation } from "react-i18next";

export default function Sidebar() {
  const location = useLocation();
  const { HandleSignOut } = useSignOut();
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);
  const { t } = useTranslation();

  return (
    <aside
      className={`sidebar hidden lg:block w-24 rounded-t-3xl rounded-b-3xl text-[--sideBar-text-color] fixed z-40 ${
        userCurrentStatus.user.direction === "rtl" ? "right-2" : "left-2"
      }  top-2 bottom-2  bg-[--sideBar-bg-color] overflow-hidden`}
    >
      {/* SideBar Home */}
      <Link to="/" className="sidebar-home-menu w-full ">
        <IoHomeOutline className="w-full text-2xl mt-10 hover:text-[--sideBar-text-color-hover] transition-all duration-200 ease-in-out hover:scale-110" />
      </Link>

      {/* SideBar Content */}
      <div className="sidebar-content mt-16 space-y-6 flex flex-col">
        {DesktopSideBar.map((item, i) => {
          const isActive = location.pathname === item.path;
          const role = userCurrentStatus.user.role;
          const isVisible =
            item.WhoCanSee === "Everyone" ||
            (Array.isArray(item.WhoCanSee) && item.WhoCanSee.includes(role));

          return (
            <Link
              key={i}
              className={`sidebar-menu  ${
                userCurrentStatus.user.direction === "rtl" ? "mr-4" : "ml-4"
              } relative ${isActive ? "active" : ""} ${
                isVisible ? "" : "hidden"
              } `}
              to={item.path}
            >
              <div
                className={`sidebar-menu-icon text-2xl px-5 py-2 transition-all duration-700 ease-in-out ${
                  isActive ? "text-[--sideBar-bg-color] bg-white " : ""
                } ${
                  userCurrentStatus.user.direction === "ltr"
                    ? "rounded-l-[20px]"
                    : "rounded-r-[20px]"
                }`}
              >
                <Tippy className="cairo-ALAPHA" content={`${t(item.name)}`}>
                  <span>{item.icon}</span>
                </Tippy>
              </div>
              {/* Pseudo-elements for :before and :after */}
              {isActive && userCurrentStatus.user.direction === "rtl" && (
                <>
                  <div
                    className="absolute bottom-[100%] left-0 h-[35px] w-[35px] 
              bg-transparent rounded-bl-[18px] shadow-[0_20px_0_0_#fff]"
                  ></div>
                  <div
                    className="absolute top-[38px] left-0 h-[35px] w-[35px] 
              bg-transparent rounded-tl-[18px] shadow-[0_-20px_0_0_#fff]"
                  ></div>
                </>
              )}
              {isActive && userCurrentStatus.user.direction === "ltr" && (
                <>
                  <div
                    className="absolute bottom-[100%] right-0 h-[35px] w-[35px] 
              bg-transparent rounded-br-[18px] shadow-[0_20px_0_0_#fff]"
                  ></div>
                  <div
                    className="absolute top-[38px] right-0 h-[35px] w-[35px] 
              bg-transparent rounded-tr-[18px] shadow-[0_-20px_0_0_#fff]"
                  ></div>
                </>
              )}
            </Link>
          );
        })}
      </div>

      {/* Home Logout */}
      <div
        className="sidebar-footer absolute bottom-0 left-1/2 transform cursor-pointer -translate-x-1/2"
        onClick={HandleSignOut}
      >
        <Tippy className="cairo-ALAPHA" content={t("logout")}>
          <span>
            <AiOutlineLogout className="w-full mx-auto text-2xl my-7 hover:text-[--sideBar-text-color-hover] transition-all duration-200 ease-in-out hover:scale-110" />
          </span>
        </Tippy>
      </div>
    </aside>
  );
}
