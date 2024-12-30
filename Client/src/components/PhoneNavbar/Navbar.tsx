import { DesktopSideBar } from "../../DB/Context";
import { NavLink, useLocation } from "react-router-dom";
import "tippy.js/dist/tippy.css";
import { useAppSelector } from "../../Hooks/ReduxHooks";
import { UserCurrentStatus } from "../../types/types";

export default function Navbar() {
  const location = useLocation().pathname;
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);
  return (
    <nav className="fixed lg:hidden !z-50 bottom-0 left-0 right-0 bg-[--bg-color] border-t border-[--rightSide-bg-color] ">
      <div className="flex justify-around items-center h-16">
        {DesktopSideBar.map((item, i) => {
          const role = userCurrentStatus.user.role;
          const isVisible =
            item.WhoCanSee === "Everyone" ||
            (Array.isArray(item.WhoCanSee) && item.WhoCanSee.includes(role));
          return (
            <NavLink
              key={i}
              to={item.path}
              className={`flex flex-col items-center justify-center flex-1 min-w-0 ${
                location === item.path ? "text-[--navbar]" : "text-gray-500"
              } ${isVisible ? "" : "hidden"} hover:text-[--navbar]`}
            >
              <span>{item.icon}</span>
            </NavLink>
          );
        })}
      </div>

      {/* <div className="flex justify-around items-center h-16">
        <NavLink
          to="/"
          className={`flex flex-col items-center justify-center flex-1 min-w-0 ${
            location === "/" ? "text-[--navbar]" : "text-gray-500"
          } hover:text-[--navbar]`}
        >
          <FaHome className="h-6 w-6" />
          <span className="text-xs mt-1">Home</span>
        </NavLink>

        <NavLink
          to="/growth"
          className={`flex flex-col items-center justify-center flex-1 min-w-0 ${
            location === "/growth" ? "text-[--navbar]" : "text-gray-500"
          } hover:text-[--navbar]`}
        >
          <GiCrystalGrowth className="h-6 w-6" />
          <span className="text-xs mt-1">Growth</span>
        </NavLink>

        <NavLink
          to="/social-media"
          className={`flex flex-col items-center justify-center flex-1 min-w-0 ${
            location === "/social-media" ? "text-[--navbar]" : "text-gray-500"
          } hover:text-[--navbar]`}
        >
          <MdOutlineMediation className="h-6 w-6" />
          <span className="text-xs mt-1">Social Media</span>
        </NavLink>

        <NavLink
          to="/add-new-user"
          className={`flex flex-col items-center justify-center flex-1 min-w-0 ${
            location === "/add-new-user" ? "text-[--navbar]" : "text-gray-500"
          } hover:text-[--navbar]`}
        >
          <ImUserPlus className="h-6 w-6" />
          <span className="text-xs mt-1">Add User</span>
        </NavLink>
      </div> */}
    </nav>
  );
}
