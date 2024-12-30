import { BiShieldPlus } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function NotAllowedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="p-8">
          <div className="flex justify-center mb-6">
            <BiShieldPlus className="h-24 w-24 text-red-500 animate-bounce" />
          </div>
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Oops! No Peeking!
          </h1>
          <p className="text-center text-gray-600 mb-6">
            Sorry, but it looks like you're trying to sneak a peek at something
            you're not supposed to see!
          </p>
          <div className="flex justify-center mb-6">
            <FiAlertCircle className="h-16 w-16 text-yellow-500 animate-pulse" />
          </div>
          <p className="text-center text-gray-600 mb-8">
            Don't worry, we won't tell anyone. How about we get you back to
            safety?
          </p>
          <div className="flex justify-center">
            <Link to="/login">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 flex items-center">
                <FaHome className="mr-2 h-5 w-5" />
                Take Me Home
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-gray-100 p-4">
          <p className="text-center text-sm text-gray-500">
            Remember: Curiosity killed the cat, but satisfaction brought it
            back. Just not this time!
          </p>
        </div>
      </div>
    </div>
  );
}
