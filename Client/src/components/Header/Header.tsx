import Notifications from "./Notifications/Notifications";
import ProfileDropDown from "./ProfileDropDown/ProfileDropDown";
import Search from "./Search/Search";
import DarkLightMode from "../../components/DarkLightMode/DarkLightMode";
import LangSelector from "./Lang/LangSelector";
import { useAppSelector } from "../../Hooks/ReduxHooks";
import { UserCurrentStatus } from "../../types/types";

export default function Header() {
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
  useAppSelector((state) => state.user);
  return (
    <header className={`hidden lg:block ${
      userCurrentStatus.user.direction === "rtl" ? "lg:pr-32" : "lg:pl-32"
    } relative z-40 `}>
      <div className="flex h-16 items-center px-4 gap-4">
        {/* Search Input */}
        <Search />

        {/* Icons and Profile */}
        <div className="flex items-center justify-center gap-4">
          {/* Notification Icon */}
          <Notifications />
          <DarkLightMode />
          <LangSelector />
          {/* Profile */}
          <ProfileDropDown />
        </div>
      </div>
    </header>
  );
}
