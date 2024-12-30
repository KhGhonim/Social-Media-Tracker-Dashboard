import CallToAction from "../CallToAction/CallToAction";
import InfoAddNewAccount from "./AddNewAccount/InfoAddNewAccount";
import SocailMediaStats from "./SocailMediaStats/SocailMediaStats";

export default function RightSide() {
  return (
    <div className="right-side w-full h-full rounded-3xl border-2 border-[--bg-color]  p-4 lg:pr-4 bg-[--rightSide-bg-color]">
      <SocailMediaStats />
      <InfoAddNewAccount />
      <CallToAction />
    </div>
  );
}
