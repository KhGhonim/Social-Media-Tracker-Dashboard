import { FaRegUser } from "react-icons/fa";

export default function TeamMemberCell({ member }) {
  return (
    <div className="flex items-center">
      <div className="flex-shrink-0 h-12 w-12">
        <div className="h-12 w-12 overflow-hidden rounded-full bg-[--navbar] text-[--allwhite] border border-[--navbar] flex items-center justify-center">
          {member.profile_picture ? (
            <img
              src={member.profile_picture}
              className="h-12 w-12 object-cover rounded-full"
              alt={member.username}
              loading="lazy"
            />
          ) : (
            <FaRegUser className="h-12 w-12" />
          )}
        </div>
      </div>
      <div className="ml-4">
        <div className="text-lg font-medium text-[--text-color]">
          {member.username}
        </div>
        <div className="text-sm text-gray-500">{member.role}</div>
      </div>
    </div>
  );
}
