import { FaUsers } from "react-icons/fa6";

export default function SocialMediaTableHeader() {
  return (
    <div className="flex items-center gap-3 mb-8">
      <FaUsers className="w-8 h-8 text-[--navbar]" />
      <h1 className="text-3xl font-bold text-[--text-color]">
        Social Media Accounts
      </h1>
    </div>
  );
}
