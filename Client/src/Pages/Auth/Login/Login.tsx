import { Toaster } from "react-hot-toast";
import UseLogin from "../../../Hooks/Auth/UseLogin";
import { CiMail } from "react-icons/ci";
import { FaLock, FaSpinner } from "react-icons/fa";
import { GiSlashedShield } from "react-icons/gi";
import { useTranslation } from "react-i18next";

export default function Login() {
  const { email, setEmail, password, setPassword, loading, handleSubmit } =
    UseLogin();
  const { t } = useTranslation();

  return (
    <>
      <Toaster />
      {/* <div className="absolute z-0 inset-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,256L12,245.3C24,235,48,213,72,197.3C96,181,120,171,144,144C168,117,192,75,216,58.7C240,43,264,53,288,64C312,75,336,85,360,80C384,75,408,53,432,85.3C456,117,480,203,504,208C528,213,552,139,576,96C600,53,624,43,648,64C672,85,696,139,720,144C744,149,768,107,792,106.7C816,107,840,149,864,181.3C888,213,912,235,936,208C960,181,984,107,1008,106.7C1032,107,1056,181,1080,197.3C1104,213,1128,171,1152,133.3C1176,96,1200,64,1224,53.3C1248,43,1272,53,1296,64C1320,75,1344,85,1368,106.7C1392,128,1416,160,1428,176L1440,192L1440,0L1428,0C1416,0,1392,0,1368,0C1344,0,1320,0,1296,0C1272,0,1248,0,1224,0C1200,0,1176,0,1152,0C1128,0,1104,0,1080,0C1056,0,1032,0,1008,0C984,0,960,0,936,0C912,0,888,0,864,0C840,0,816,0,792,0C768,0,744,0,720,0C696,0,672,0,648,0C624,0,600,0,576,0C552,0,528,0,504,0C480,0,456,0,432,0C408,0,384,0,360,0C336,0,312,0,288,0C264,0,240,0,216,0C192,0,168,0,144,0C120,0,96,0,72,0C48,0,24,0,12,0L0,0Z"
          ></path>
        </svg>
      </div> */}
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
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                {t("passwordLabel")}
              </label>
              <div className="mt-1 relative">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value.toLocaleLowerCase())
                  }
                  className="pl-10 w-full px-4 py-2 border border-gray-300  outline-none rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your password"
                  required
                />
              </div>
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
