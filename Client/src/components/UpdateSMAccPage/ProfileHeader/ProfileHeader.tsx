import { FaMapPin } from "react-icons/fa";
import { GiPlatform } from "react-icons/gi";
import { MdManageAccounts } from "react-icons/md";

export default function ProfileHeader({
  acc_bio,
  acc_category,
  acc_name,
  acc_state,
  country,
  platform,}) {
  return (
    <div className="bg-[--rightSide-bg-color] rounded-xl shadow-lg p-6 relative">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold text-[--text-color] capitalize">
            {acc_name}
          </h2>
          <div className="flex items-center text-sm text-gray-500 mt-2 space-x-2">
            <GiPlatform className="w-4 h-4 text-[--navbar]" />
            <span className=" text-[--text-color] capitalize">
              {platform}
            </span>
            <span className="text-gray-400">|</span>
            <FaMapPin className="w-4 h-4 text-[--navbar]" />
            <span className=" text-[--text-color] capitalize">{`${country}`}</span>
            <MdManageAccounts className="w-4 h-4 text-[--navbar]" />
            <span className=" text-[--text-color] capitalize">{`${acc_state}`}</span>
          </div>
        </div>
        <div className=" absolute right-4 top-4 px-3 py-1 capitalize bg-[--navbar]  text-[--allwhite] text-sm rounded-full font-medium">
          {acc_category}
        </div>
      </div>
      <p className="mt-4 text-gray-500 leading-relaxed">{acc_bio}</p>
    </div>
  );
}
