export default function AccountTabs({
  filteredPlatforms,
  SelectedAccount,
  setSelectedAccount,
}) {
  return (
    <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
      {filteredPlatforms.map((account) => (
        <button
          key={account.id}
          onClick={() => setSelectedAccount(account.id)}
          className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
            SelectedAccount === account.id
              ? "bg-[--navbar] text-white"
              : "bg-[--floatingStats] hover:bg-[--navbar-hover] text-[--text-color] hover:text-[--allwhite]"
          }`}
        >
          @{account.acc_username}
        </button>
      ))}
    </div>
  );
}
