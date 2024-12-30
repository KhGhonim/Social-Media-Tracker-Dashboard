import { IoMdCheckmark } from "react-icons/io";
import { IoClose } from "react-icons/io5";

export default function ActionButtons({ onAction, isloading }) {
  return (
<<<<<<< HEAD
    <div className="flex flex-col gap-3 lg:flex-row ">
      <button
        disabled={isloading}
        onClick={() => onAction("approve")}
        className="bg-green-50 hover:bg-green-100 text-green-700 px-3 py-1 rounded-md flex items-center"
      >
        <IoMdCheckmark className="h-4 w-4 mr-1" />
=======
    <div className="flex flex-col gap-4 lg:flex-row ">
      <button
        disabled={isloading}
        onClick={() => onAction("approve")}
        className="bg-green-50 hover:bg-green-100 text-green-700 p-1 rounded-md flex items-center"
      >
        <IoMdCheckmark className="h-4 w-4" />
>>>>>>> 1c510ab (Sockets and Updates)
        Approve
      </button>
      <button
        disabled={isloading}
        onClick={() => onAction("reject")}
<<<<<<< HEAD
        className="bg-red-50 hover:bg-red-100 text-red-700 px-3 py-1 rounded-md flex items-center"
      >
        <IoClose className="h-4 w-4 mr-1" />
=======
        className="bg-red-50 hover:bg-red-100 text-red-700 p-1 rounded-md flex items-center"
      >
        <IoClose className="h-4 w-4" />
>>>>>>> 1c510ab (Sockets and Updates)
        Reject
      </button>
    </div>
  );
}
