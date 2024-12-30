import Loading from "../../Pages/Loading/Loading";
import useFetchUserDetails from "../../Hooks/ProfileHooks/FetchUserDetails";
import useUpdateSettings from "../../Hooks/Update/useUpdateSettings";
import { FaSpinner } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Settings() {
  const { data, loading } = useFetchUserDetails();
  const {
    handleSubmit,
    isLoading,
    Settings,
    handleImageChange,
    handleChange,
    ImageForFrontEnd,
  } = useUpdateSettings(data);
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[--bg-color] py-12 px-4 sm:px-6 lg:px-8">
      {loading ? (
        <Loading />
      ) : data || data.length > 0 ? (
        <div className="min-h-screen bg-[--bg-color] py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto bg-[--rightSide-bg-color] rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-semibold text-[--text-color] mb-8">
              {t('accountSettings')}
            </h1>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Profile Picture Upload */}
              <div className="flex flex-col items-center space-y-4">
                <img
                  src={ImageForFrontEnd || "https://via.placeholder.com/150"}
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover border border-gray-300 shadow-sm"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="text-sm text-[--text-color] cursor-pointer focus:outline-none focus:ring focus:ring-[--navbar]"
                />
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: "password", label: t('password'), type: "password" },
                  {
                    name: "confirmPassword",
                    label: t('confirmPassword'),
                    type: "password",
                  },
                  { name: "birthday", label: t('birthday'), type: "date" },
                  {
                    name: "phone_number",
                    label: t('phoneNumber'),
                    type: "tel",
                    placeholder: "+1234567890",
                  },
                  {
                    name: "location",
                    label: t('location'),
                    type: "text",
                    placeholder: "City",
                  },
                  { name: "country", label: t('country'), type: "text" },
                ].map(({ name, label, type, placeholder }, index) => (
                  <div key={index} className="space-y-1">
                    <label
                      htmlFor={name}
                      className="block text-sm font-medium text-[--text-color]"
                    >
                      {label}
                    </label>
                    <input
                      type={type}
                      name={name}
                      id={name}
                      defaultValue={Settings[name]}
                      onChange={handleChange}
                      placeholder={placeholder || ""}
                      className="mt-1 block w-full rounded-lg text-[--text-color] outline-none border border-dashed bg-[--bg-color] p-2.5 shadow-sm focus:border-[--navbar] focus:ring focus:ring-[--navbar] transition"
                    />
                  </div>
                ))}
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`flex items-center gap-2 px-6 py-2 bg-[--navbar] text-white rounded-lg shadow-md 
    hover:bg-[--navbar-hover] focus:outline-none focus:ring-2 focus:ring-[--navbar] 
    focus:ring-offset-2 transition-all ${
      isLoading ? "cursor-not-allowed" : ""
    }`}
                >
                  {isLoading ? (
                    <FaSpinner className="animate-spin w-5 h-5" />
                  ) : (
                    t('updateProfile')
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="min-h-screen bg-[--bg-color] py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <p className="text-2xl font-semibold text-[--text-color]">
            No User Found
          </p>
        </div>
      )}
    </div>
  );
}
