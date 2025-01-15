import { Toaster } from "react-hot-toast";
import UseLogin from "../../../Hooks/Auth/UseLogin";
import { CiMail } from "react-icons/ci";
import { FaEye, FaLock, FaSpinner } from "react-icons/fa";
import { GiSlashedShield } from "react-icons/gi";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { VscEyeClosed } from "react-icons/vsc";

export default function Login() {
  const { email, setEmail, password, setPassword, loading, handleSubmit } =
    UseLogin();
  const { t } = useTranslation();
  const [isText, setisText] = useState(false);
  return (
    <>
      <Toaster />
      <div className="min-h-screen cairo-ALAPHA flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4 !z-50">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
          <div className="text-center mb-8">
            <GiSlashedShield className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              {t("WelcomeBack")}{" "}
            </h2>
            <p className="text-gray-600 mt-2"> {t("signInPrompt")} </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {t("emailLabel")}
              </label>
              <div className="mt-1 relative">
                <CiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 w-full px-4 py-2 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <span className="text-sm text-gray-400">
                Admin: admin@admin.com
              </span>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                {t("passwordLabel")}
              </label>
              <div className="mt-1 relative">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={isText ? "text" : "password"}
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  className="pl-10 w-full px-4 py-2 border border-gray-300  outline-none rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setisText(!isText)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                >
                  {isText ? (
                    <FaEye className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  ) : (
                    <VscEyeClosed className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  )}
                </button>
              </div>
              <span className="text-sm text-gray-400">PW: Admin123@</span>
            </div>

            <button
              disabled={loading}
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-200 transition-colors"
            >
              {loading ? (
                <div className="flex w-full h-full items-center justify-center">
                  <FaSpinner className="animate-spin" />
                </div>
              ) : (
                t("loginButton")
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
