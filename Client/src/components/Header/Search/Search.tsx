import { useAppSelector } from "../../../Hooks/ReduxHooks";
import { useTranslation } from "react-i18next";
import { CiSearch } from "react-icons/ci";
import { UserCurrentStatus } from "../../../types/types";

export default function Search() {
  const { t } = useTranslation();
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);
  return (
    <div className="flex-1">
      <div className="relative max-w-sm">
        <CiSearch className={`absolute ${userCurrentStatus.user.direction === "rtl" ? "right-3" : "left-3"} top-2.5 h-5 w-5 text-[--text-color]`} />
        <input
          type="text"
          placeholder={`${t('search')}`}
          className={`w-full ${userCurrentStatus.user.direction === "rtl" ? "pr-10" : "pl-10"}  py-2 border text-[--text-color] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[--navbar] bg-[--bg-color]`}
        />
      </div>
    </div>
  );
}
