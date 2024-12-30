import { FiBarChart2 } from "react-icons/fi";
import { IoCloudOffline } from "react-icons/io5";
import ErrorMessage from "./ErrorMessage";
import ErrorAnimation from "./ErrorAnimation";

export default function ErrorNotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="relative">
          <ErrorAnimation />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <FiBarChart2  className="w-16 h-16 text-indigo-500 animate-bounce" />
              <IoCloudOffline className="w-8 h-8 text-red-500 absolute -top-2 -right-2 animate-pulse" />
            </div>
          </div>
        </div>
        <ErrorMessage />
      </div>
    </div>
  );
}
