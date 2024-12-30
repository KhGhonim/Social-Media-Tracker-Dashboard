import { useTranslation } from "react-i18next";
import useUploadAchievments from "../../Hooks/DashboardPageHooks/useUploadAchievments";
import { FaSpinner, FaUpload } from "react-icons/fa";

export default function AchievementForm() {
  const {
    handleSubmit,
    handleInputChange,
    achievementForm,
    isLoading,
    handleImage,
    ImageForFrontEnd,
  } = useUploadAchievments();
  const { t } = useTranslation();
<<<<<<< HEAD

=======
  
>>>>>>> 1c510ab (Sockets and Updates)
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-[--rightSide-bg-color] p-8 rounded-xl shadow-lg max-w-2xl mx-auto"
    >
      <div className="space-y-2">
        <label className="block text-sm font-medium text-[--text-color]">
          {t("screenshot")} <span className="text-red-500">*</span>
        </label>
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-[--bg-color] hover:bg-[--rightSide-bg-color]">
            {ImageForFrontEnd ? (
              <img
                src={ImageForFrontEnd}
                alt="screenshot"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <FaUpload className="w-8 h-8 mb-4 text-gray-500" />
                <p className="mb-2 text-sm text-gray-500">
                  {t("uploadScreenshot")}
                </p>
              </div>
            )}
            <input
              type="file"
              name="screenshot"
              className="hidden"
              accept="image/*"
              onChange={handleImage}
            />
          </label>
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-[--text-color]">
          {t("achievementDescription")} <span className="text-red-500">*</span>
        </label>
        <textarea
          name="description"
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 bg-[--bg-color] text-[--text-color] rounded-md focus:outline-none focus:ring-2 focus:ring-[--navbar]"
          onChange={handleInputChange}
          value={achievementForm.description}
        />
      </div>

      <div className="grid grid-col-1 lg:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[--text-color] ">
            {t("platform")} <span className="text-red-500">*</span>
          </label>
          <select
            name="platform"
            className="w-full px-3 py-2 border border-gray-300 bg-[--bg-color] text-[--text-color] rounded-md focus:outline-none focus:ring-2 focus:ring-[--navbar]"
            onChange={handleInputChange}
            defaultValue={""}
          >
            <option disabled value="">
              {t("platform")}
            </option>
            <option value="Facebook">{t("facebook")}</option>
            <option value="Instagram">{t("instagram")}</option>
            <option value="Twitter">{t("twitter")}</option>
            <option value="LinkedIn">{t("linkedin")}</option>
            <option value="TikTok">{t("tiktok")}</option>
            <option value="YouTube">{t("youtube")}</option>
            <option value="Pinterest">{t("pinterest")}</option>
            <option value="snapchat">{t("Snapchat")}</option>
            <option value="Reddit">{t("reddit")}</option>
            <option value="Tumblr">{t("tumblr")}</option>
            <option value="Blogspot">{t("blogger")}</option>
            <option value="okru">{t("okru")}</option>
            <option value="turkkitap">{t("kitap")}</option>
            <option value="Blogsky">{t("blogsky")}</option>
            <option value="kizlarsoruyor">{t("kizlarsoruyor")}</option>
            <option value="balatarin">{t("balatarin")}</option>
            <option value="virasty">{t("virasty")}</option>
            <option value="vk">{t("vk")}</option>
            <option value="threads">{t("threads")}</option>
            <option value="telegram">{t("telegram")}</option>
          </select>
        </div>

        <div className="">
          <label className="block text-sm font-medium text-[--text-color]">
            {t("contentDirection")} <span className="text-red-500">*</span>
          </label>
          <select
            name="contentDirection"
            className="w-full px-3 py-2 border border-gray-300 bg-[--bg-color] text-[--text-color] rounded-md focus:outline-none focus:ring-2 focus:ring-[--navbar]"
            onChange={handleInputChange}
            defaultValue={""}
          >
            <option value="">{t("selectDirection")}</option>
            <option value="Green">{t("green")}</option>
            <option value="Red">{t("red")}</option>
            <option value="Orange">{t("orange")}</option>
          </select>
        </div>
      </div>

      <div className="grid grid-col-1 lg:grid-cols-2 gap-4">
        <div className="">
          <label className="block text-sm font-medium text-[--text-color] mb-1">
            {t("country")} <span className="text-red-500">*</span>
          </label>
          <select
            name="country"
            className="w-full px-3 py-2 border border-gray-300 bg-[--bg-color] text-[--text-color] rounded-md focus:outline-none focus:ring-2 focus:ring-[--navbar]"
            onChange={handleInputChange}
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
        <div className="space-y-2">
          <label className="block text-sm font-medium text-[--text-color]">
            {t("accountName")} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="accountName"
            className="w-full px-3 py-2 border border-gray-300 bg-[--bg-color] text-[--text-color] rounded-md focus:outline-none focus:ring-2 focus:ring-[--navbar]"
            onChange={handleInputChange}
            value={achievementForm.accountName}
          />
        </div>
      </div>

      <div className="grid grid-col-1 lg:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-[--text-color]">
            {t("data")}
            <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="Date"
            className="w-full px-3 py-2 border border-gray-300 bg-[--bg-color] text-[--text-color] rounded-md focus:outline-none focus:ring-2 focus:ring-[--navbar]"
            onChange={handleInputChange}
            value={achievementForm.Date}
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-[--text-color]">
            {t("accountURL")}
            <span className="text-red-500">*</span>
          </label>
          <input
            type="url"
            name="accountUrl"
            className="w-full px-3 py-2 border border-gray-300 bg-[--bg-color] text-[--text-color] rounded-md focus:outline-none focus:ring-2 focus:ring-[--navbar]"
            onChange={handleInputChange}
            value={achievementForm.accountUrl}
          />
        </div>
      </div>

      <div className="space-y-2 ">
        <label className="block text-sm font-medium text-[--text-color]">
          {t("metrics")} <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-col-1 lg:grid-cols-3 gap-4">
          <input
            type="number"
            name="Likes"
            placeholder="Likes"
            className="w-full px-3 py-2 border border-gray-300 bg-[--bg-color] text-[--text-color] rounded-md focus:outline-none focus:ring-2 focus:ring-[--navbar]"
            onChange={handleInputChange}
            value={achievementForm.Likes}
          />
          <input
            type="number"
            name="Shares"
            placeholder="Shares"
            className="w-full px-3 py-2 border border-gray-300 bg-[--bg-color] text-[--text-color] rounded-md focus:outline-none focus:ring-2 focus:ring-[--navbar]"
            onChange={handleInputChange}
            value={achievementForm.Shares}
          />
          <input
            type="number"
            name="Comments"
            placeholder="Comments"
            className="w-full px-3 py-2 border border-gray-300 bg-[--bg-color] text-[--text-color] rounded-md focus:outline-none focus:ring-2 focus:ring-[--navbar]"
            onChange={handleInputChange}
            value={achievementForm.Comments}
          />
        </div>
      </div>

      <button
        disabled={isLoading}
        type="submit"
        className="w-full bg-[--navbar] text-[--allwhite] py-2 px-4 rounded-md hover:bg-[--navbar-hover] transition duration-200"
      >
        {isLoading ? (
          <div className="flex w-full h-full items-center justify-center">
            <FaSpinner className="animate-spin" />
          </div>
        ) : (
          t("saveAchievement")
        )}
      </button>
    </form>
  );
}
