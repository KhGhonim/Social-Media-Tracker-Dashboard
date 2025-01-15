import { useAppSelector } from "../../../../../Hooks/ReduxHooks";
import { FaCheck } from "react-icons/fa";
import { FaUser, FaHeart, FaComment, FaShareAlt } from "react-icons/fa";
import { UserCurrentStatus } from "../../../../../types/types";

export default function PhotoCard({ photo, isSelected, onSelect }) {
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);
  return (
    <div
      onClick={() => onSelect(photo)}
      className={`
      relative cursor-pointer group rounded-xl overflow-hidden
      ${
        isSelected
          ? "ring-2 ring-[--navbar-hover] ring-offset-2"
          : "hover:ring-2 hover:ring-indigo-500/50"
      }
    `}
    >
      <img
        src={photo.screenshot}
        alt={photo.username}
        className="w-full h-96 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col items-center space-y-2 bg-black/30">
        <h3 className="text-white font-medium flex items-center">
          <FaUser
            className={`${
              userCurrentStatus.user.direction === "ltr" ? "mr-2" : "ml-2"
            }`}
          />{" "}
          {photo.username}
        </h3>
        <p className="text-white/70 text-sm">{photo.platform}</p>
        <div className="flex gap-4 justify-center  text-center text-white/70 text-sm">
          <p className="flex flex-col justify-center items-center ">
            <FaHeart
              className={`${
                userCurrentStatus.user.direction === "ltr" ? "mr-2" : "ml-2"
              }`}
            />{" "}
            <span>{photo.likes}</span>
          </p>
          <p className="flex flex-col justify-center items-center">
            <FaComment
              className={`${
                userCurrentStatus.user.direction === "ltr" ? "mr-2" : "ml-2"
              }`}
            />{" "}
            <span>{photo.comments}</span>
          </p>
          <p className="flex flex-col justify-center items-center">
            <FaShareAlt
              className={`${
                userCurrentStatus.user.direction === "ltr" ? "mr-2" : "ml-2"
              }`}
            />{" "}
            <span>{photo.shares}</span>
          </p>
        </div>
      </div>

      {isSelected && (
        <div className="absolute top-2 right-2 bg-[--navbar-hover] rounded-full p-1">
          <FaCheck size={16} className="text-white" />
        </div>
      )}
    </div>
  );
}
