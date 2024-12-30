import { Link } from "react-router-dom";
import { platformIcons } from "../../../DB/Context";
import { BiCheckCircle } from "react-icons/bi";

export default function AccountCard({ account }) {
  const Icon = platformIcons[account.platform];
  return (
    <Link to={`/profile/account/${account.id}`} className="bg-[--bg-color] text-[--text-color] rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {Icon}
          <h3 className="font-semibold text-lg capitalize">
            {account.acc_name}
          </h3>
          {account.verified && (
            <BiCheckCircle className="w-4 h-4 text-[--navbar]" />
          )}
        </div>
        <span className="text-sm text-gray-500">@{account.acc_username}</span>
      </div>
{/* 
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p>Followers</p>
          <p className="font-semibold">{account.followers}</p>
        </div>
        <div>
          <p>Engagement</p>
          <p className="font-semibold">{account.engagement}%</p>
        </div>
      </div> */}

      <div className="mt-3 pt-3 border-t">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500  capitalize">
            {account.acc_category}
          </span>
          <span className="text-gray-500 capitalize">
            Status:{" "}
            <span
              className={`${
                account.acc_state === "active"
                  ? "text-green-500"
                  : account.acc_state === "suspended"
                  ? "text-red-500"
                  : "text-yellow-500"
              }`}
            >
              {account.acc_state}
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}
