import EmptyStateForSMTable from "../../components/SocialMediaTablePage/EmptyStateForSMTable/EmptyStateForSMTable";
import Header from "../../components/Header/Header";
import PhoneHeader from "../../components/PhoneHeader/PhoneHeader";
import Navbar from "../../components/PhoneNavbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import SocialMediaTableHeader from "../../components/SocialMediaTablePage/SocialMediaTableHeader/SocialMediaTableHeader";
import FilterBar from "../../components/SocialMediaTablePage/FilterBar/FilterBar";
import { useState } from "react";
import useGetSocialMediaAccountsCards from "../../Hooks/SocialMediaAccountsCards/SocialMediaAccountsCards";
import AccountCard from "../../components/SocialMediaTablePage/AccountCard/AccountCard";
import { FaSpinner } from "react-icons/fa";

export default function SocialMediaTable() {
  const [search, setsearch] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const { data, loading } = useGetSocialMediaAccountsCards();
  const filteredAccounts = data?.filter((account) => {
    return (
      (!search ||
        account.acc_name.toLowerCase().includes(search.toLowerCase())) &&
      (!selectedPlatform || account.platform === selectedPlatform.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen cairo-ALAPHA w-full bg-[--bg-color] ">
      <PhoneHeader />
      <Navbar />
      <Header />
      <Sidebar />
      <main className="py-10">
        <div className="min-h-screen bg-[--bg-color]">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <SocialMediaTableHeader />
            <FilterBar
              search={search}
              onSearchChange={setsearch}
              selectedPlatform={selectedPlatform}
              onPlatformChange={setSelectedPlatform}
            />

            {loading ? (
              <div className="flex w-full h-full items-center justify-center">
                <FaSpinner className="animate-spin" />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAccounts?.map((account) => (
                  <AccountCard key={account.id} account={account} />
                ))}
              </div>
            )}

            {filteredAccounts.length === 0 && <EmptyStateForSMTable />}
          </div>
        </div>
      </main>
    </div>
  );
}
