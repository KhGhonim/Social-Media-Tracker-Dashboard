import Header from "../../components/Header/Header";
import PhoneHeader from "../../components/PhoneHeader/PhoneHeader";
import Navbar from "../../components/PhoneNavbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import GrowthTable from "../../components/ReviewGrowthPage/GrowthTable/GrowthTable";
import { Toaster } from "react-hot-toast";

export default function ReviewGrowth() {
  return (
    <div className="min-h-screen cairo-ALAPHA w-full bg-[--bg-color] ">
      <Toaster />
      <PhoneHeader />
      <Navbar />
      <Header />
      <Sidebar />
      <main className="py-10">
        <GrowthTable />
      </main>
    </div>
  );
}
