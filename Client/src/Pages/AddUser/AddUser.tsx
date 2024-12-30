import UseAddNewUser from "../../Hooks/NewUserAndSMAcc/UseAddNewUser";
import Header from "../../components/Header/Header";
import PhoneHeader from "../../components/PhoneHeader/PhoneHeader";
import Navbar from "../../components/PhoneNavbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { FaSpinner, FaUserPlus } from "react-icons/fa";
import { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../Hooks/ReduxHooks";
import { UserCurrentStatus } from "../../types/types";
import { useEffect } from "react";
import { SetDirection } from "../../Redux/userSlice";

export default function AddUser() {
  const { formData, setFormData, isLoading, handleSubmit } = UseAddNewUser();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const { t } = useTranslation();
  const roles = [
    t("admin"),
    t("ceo"),
    t("operationManager"),
    t("hr"),
    t("teamLeader"),
    t("handler"),
  ];

  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const direction = userCurrentStatus.user.direction;
    if (!direction || direction === "undefined") {
      const lang = localStorage.getItem("i18nextLng") || "ar";
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
      dispatch(SetDirection(document.documentElement.dir));
    } else {
      document.documentElement.dir = direction;
    }
  }, [dispatch, userCurrentStatus.user.direction]);

  return (
    <div className="cairo-ALAPHA  pb-10 bg-[--bg-color]">
      <Toaster />
      <PhoneHeader />
      <Navbar />
      <Header />
      <Sidebar />
      <div
        className={`bg-[--rightSide-bg-color] lg:mr-5 rounded-xl shadow-lg p-8 space-y-8  ${
          userCurrentStatus.user.direction === "rtl"
            ? "lg:!mr-32 lg:!ml-5"
            : "lg:ml-32 lg:mr-5"
        } pb-20`}
      >
        {/* Header Section */}
        <div className="flex items-center gap-4">
          <FaUserPlus className="w-8 h-8 text-[--navbar]" />
          <h2 className="text-3xl font-bold text-[--text-color] ">
            {t("createNewUser")}
          </h2>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Full Name Field */}
          <div>
            <label className="block text-sm font-semibold text-[--text-color] mb-1">
              {t("fullName")} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border bg-[--bg-color] text-[--text-color] border-gray-300 focus:outline-none focus:ring-2 focus:ring-[--navbar]"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-semibold text-[--text-color] mb-1">
              {t("email")} <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border bg-[--bg-color] text-[--text-color] border-gray-300 focus:outline-none focus:ring-2 focus:ring-[--navbar]"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-semibold text-[--text-color] mb-1">
              {t("password")} <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border bg-[--bg-color] text-[--text-color] border-gray-300 focus:outline-none focus:ring-2 focus:ring-[--navbar]"
              required
            />
          </div>

          {/* Role Field */}
          <div>
            <label className="block text-sm font-semibold text-[--text-color] mb-1">
              {t("role")} <span className="text-red-500">*</span>
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border bg-[--bg-color] text-[--text-color] border-gray-300 focus:outline-none focus:ring-2 focus:ring-[--navbar]"
            >
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>
          {/* Projects */}

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-[--text-color]">
              {t("projects")} <span className="text-red-500">*</span>
            </label>
            <select
              name="projects"
              value={formData.projects}
              onChange={(e) => {
                const options = Array.from(
                  e.target.selectedOptions,
                  (option) => option.value
                );
                handleChange({
                  target: { name: "projects", value: options },
                });
              }}
              multiple
              className="w-full px-4 py-3 rounded-lg border bg-[--bg-color] text-[--text-color] border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[--navbar] focus:border-[--navbar] hover:border-[--navbar-hover] transition-all duration-200"
            >
              <option value="uae">{t("UAE")}</option>
              <option value="turkey">{t("Türkiye")}</option>
              <option value="sudan">{t("Sudan")}</option>
              <option value="iran">{t("Iran")}</option>
              <option value="palestine">{t("Palestine")}</option>
            </select>
            <small className="block text-xs text-gray-500">
              {t("selectMultipleProjects")}
            </small>
          </div>

          {/* Phone Number Field */}
          <div>
            <label className="block text-sm font-semibold text-[--text-color] mb-1">
              {t("phoneNumber")} <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border bg-[--bg-color] text-[--text-color] border-gray-300 focus:outline-none focus:ring-2 focus:ring-[--navbar]"
              required
            />
          </div>

          {/* Location Field */}
          <div>
            <label className="block text-sm font-semibold text-[--text-color] mb-1">
              {t("location")} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border bg-[--bg-color] text-[--text-color] border-gray-300 focus:outline-none focus:ring-2 focus:ring-[--navbar]"
              required
            />
          </div>

          {/* Birthday Field */}
          <div>
            <label className="block text-sm font-semibold text-[--text-color] mb-1">
              {t("birthday")} <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="birthday"
              value={formData.birthday}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border bg-[--bg-color] text-[--text-color] border-gray-300 focus:outline-none focus:ring-2 focus:ring-[--navbar]"
              required
            />
          </div>

          {/* Country Field */}
          <div>
            <label className="block text-sm font-semibold text-[--text-color] mb-1">
              {t("country")} <span className="text-red-500">*</span>
            </label>
            <select
              name="country"
              required
              className="block w-full rounded-lg border bg-[--bg-color] text-[--text-color] border-gray-300 shadow-sm focus:ring-2 focus:ring-[--navbar] focus:outline-none p-3"
              onChange={handleChange}
              defaultValue={""}
            >
              <option disabled value="">
                {t("selectCountry")}
              </option>
              <option value="Afghanistan">{t("afghanistan")}</option>
              <option value="Algeria">{t("algeria")}</option>
              <option value="Egypt">{t("egypt")}</option>
              <option value="France">{t("france")}</option>
              <option value="Germany">{t("germany")}</option>
              <option value="Indonesia">{t("indonesia")}</option>
              <option value="Iran">{t("iran")}</option>
              <option value="Iraq">{t("iraq")}</option>
              <option value="Italy">{t("italy")}</option>
              <option value="Jordan">{t("jordan")}</option>
              <option value="Kuwait">{t("kuwait")}</option>
              <option value="Lebanon">{t("lebanon")}</option>
              <option value="Libya">{t("libya")}</option>
              <option value="Malaysia">{t("malaysia")}</option>
              <option value="Mauritania">{t("mauritania")}</option>
              <option value="Mexico">{t("mexico")}</option>
              <option value="Morocco">{t("morocco")}</option>
              <option value="Oman">{t("oman")}</option>
              <option value="Pakistan">{t("pakistan")}</option>
              <option value="Palestine">{t("palestine")}</option>
              <option value="Philippines">{t("philippines")}</option>
              <option value="Qatar">{t("qatar")}</option>
              <option value="Saudi Arabia">{t("saudiArabia")}</option>
              <option value="Somali Land">{t("somaliLand")}</option>
              <option value="Somalia">{t("somalia")}</option>
              <option value="Spain">{t("spain")}</option>
              <option value="Syria">{t("syria")}</option>
              <option value="UAE">{t("uae")}</option>
              <option value="Sudan">{t("sudan")}</option>
              <option value="Yemen">{t("yemen")}</option>
              <option value="Thailand">{t("thailand")}</option>
              <option value="Tunisia">{t("tunisia")}</option>
              <option value="Turkey">{t("turkey")}</option>
              <option value="United States">{t("unitedStates")}</option>
              <option value="United Kingdom">{t("unitedKingdom")}</option>
              <option value="Russia">{t("russia")}</option>
              <option value="India">{t("india")}</option>
              <option value="Nepal">{t("nepal")}</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              disabled={isLoading}
              type="submit"
              className="w-full bg-[--navbar] hover:bg-[--navbar-hover] text-[--allwhite] py-3 px-4 rounded-lg shadow-md hover:bg-gradient-to-l focus:ring-4 focus:ring-[--navbar] transition-all duration-300"
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <FaSpinner className="animate-spin" />
                  <span>Loading...</span>
                </div>
              ) : (
                t("createUser")
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
