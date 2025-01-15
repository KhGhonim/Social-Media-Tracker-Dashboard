import Header from "../../components/Header/Header";
import PhoneHeader from "../../components/PhoneHeader/PhoneHeader";
import Navbar from "../../components/PhoneNavbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import GrowthTable from "../../components/ReviewGrowthPage/GrowthTable/GrowthTable";
import { Toaster } from "react-hot-toast";
import GetGrowthByTeam from "../../Hooks/GrowtHooks/GetGrowthByTeam";
import Loading from "../../Pages/Loading/Loading";

export default function ReviewGrowth() {
  const { GetGrowthByTeamTEData, GetGrowthByTeamTELoading } = GetGrowthByTeam();

  return (
    <div className="min-h-screen cairo-ALAPHA w-full bg-[--bg-color] ">
      <Toaster />
      <PhoneHeader />
      <Navbar />
      <Header />
      <Sidebar />
      {GetGrowthByTeamTELoading ? (
        <Loading />
      ) : (
        <main className="py-10">
          <GrowthTable
            GetGrowthByTeamTEData={GetGrowthByTeamTEData}
            GetGrowthByTeamTELoading={GetGrowthByTeamTELoading}
          />
        </main>
      )}
    </div>
  );
}
