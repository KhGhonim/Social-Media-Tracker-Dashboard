import { useState } from "react";
import Header from "../../components/Header/Header";
import PhoneHeader from "../../components/PhoneHeader/PhoneHeader";
import Navbar from "../../components/PhoneNavbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { IoGlobeSharp, IoSparkles } from "react-icons/io5";
import { FaGlobeAfrica, FaSpinner } from "react-icons/fa";
import ToolGrid from "../../components/AIPage/ToolGrid/ToolGrid";
import PhotoSelector from "../../components/AIPage/PhotoSelector/PhotoSelector";
import { useTranslation } from "react-i18next";
import { FiFileText } from "react-icons/fi";
import { Toaster } from "react-hot-toast";
import useReportGenerator from "../../Hooks/Report/useReportGenerator";

export default function AI() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const { t } = useTranslation();
  const {
    HandleSubmit,
    setPhotos,
    Isloading,
    handlePhotoSelect,
    HandleChange,
    photos,
  } = useReportGenerator();
  const mainTools = [
    {
      id: "reports",
      title: "aiReportsGenerator",
      description: "reportGeneratorDescription",
      icon: FiFileText,
    },
    {
      id: "scraping",
      title: "webIntelligenceScraper",
      description: "webScraperDescription",
      icon: IoGlobeSharp,
    },
  ];
  return (
    <div
      className={`cairo-ALAPHA ${
        selectedTool === null ? "h-full lg:h-dvh" : "h-full"
      } w-full bg-[--bg-color] max-lg:pb-20`}
    >
      <Toaster />
      <PhoneHeader />
      <Navbar />
      <Header />
      <Sidebar />
      <div className="relative px-5 lg:px-10 py-12 h-full mx-auto max-w-6xl xl:max-w-7xl ">
          <div className="text-center pb-16">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[--navbar] via-purple-400 to-pink-400 pb-4">
              {t("aiForProductivity")}
            </h1>
            <p className="text-xl text-[--text-color]">
              {t("experienceFutureAI")}{" "}
            </p>
          </div>

          <div className="space-y-16">
            {/* Main Tools Section */}
            <section>
              <h2 className="text-3xl font-bold text-[--text-color] mb-8">
                {t("coreAITools")}{" "}
              </h2>
              <ToolGrid tools={mainTools} onSelect={setSelectedTool} />
            </section>
          </div>

          {selectedTool === "reports" && (
            <div className="mt-16 space-y-6 bg-[--rightSide-bg-color] backdrop-blur-lg rounded-2xl p-8 border border-[--navbar]">
              <h2 className="text-2xl font-semibold text-[--text-color] flex items-center gap-2">
                <IoSparkles className="text-[--navbar]" />{" "}
                {t("aiReportsGenerator")}
              </h2>
              <form onSubmit={HandleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[--text-color] mb-2">
                    {t("reportType")} <span className="text-red-500">*</span>
                  </label>
                  <select
                    onChange={(e) => {
                      HandleChange(e);
                    }}
                    defaultValue={""}
                    name="reportType"
                    className="w-full border border-white/20 rounded-lg p-3 text-[--allblack]"
                  >
                    <option disabled value="">
                      {t("selectReport")}
                    </option>
                    <option value="PalestineWeeklyReport">
                      {" "}
                      {t("Palestine Weekly Report")}
                    </option>
                    {/* <option value="WeeklyAchievementsReport"> {t("Weekly Achievements Report")}</option>
                    <option value="AfricanArabandNeighboringCountriesReport"> {t("African, Arab and Neighboring Countries Report")}</option> */}
                    {/* <option value="custome"> {t("customReport")}</option> */}
                  </select>
                </div>
                {/* <div>
                  <label className="block text-[--text-color] mb-2">
                    {t("templatesType")}  <span className="text-red-500">*</span>
                  </label>
                  {GenerateReportsForm?.reportType === "daily" && (
                    <select
                      defaultValue={""}
                      name="reportTemplate"
                      onChange={(e) => {
                        HandleChange(e);
                      }}
                      className="w-full border border-white/20 rounded-lg p-3 text-[--allblack]"
                    >
                      <option disabled value="">
                        {t("selectTemplate")}
                      </option>
                      <option value="onePage"> {t("onePageTemplate")}</option>
                      <option value="threePage">
                        {" "}
                        {t("threePagesTemplate")}
                      </option>
                      <option value="fivePage"> {t("fivePagesTemplate")}</option>
                    </select>
                  )}
                  {GenerateReportsForm?.reportType === "weekly" && (
                    <select
                      defaultValue={""}
                      name="reportTemplate"
                      onChange={(e) => {
                        HandleChange(e);
                      }}
                      className="w-full border border-white/20 rounded-lg p-3 text-[--allblack]"
                    >
                      <option disabled value="">
                        {t("selectTemplate")}
                      </option>
                      <option value="tenPage"> {t("tenPagesTemplate")}</option>
                      <option value="twelvePage">
                        {" "}
                        {t("twelvePagesTemplate")}
                      </option>
                      <option value="fifteenPage">
                        {" "}
                        {t("fifteenPagesTemplate")}
                      </option>
                    </select>
                  )}
  
                  {GenerateReportsForm.reportType === "monthly" && (
                    <select
                      defaultValue={""}
                      name="reportTemplate"
                      onChange={(e) => {
                        HandleChange(e);
                      }}
                      className="w-full border border-white/20 rounded-lg p-3 text-[--allblack]"
                    >
                      <option disabled value="">
                        {t("selectTemplate")}
                      </option>
                      <option value="twentyPage">
                        {" "}
                        {t("twentyPagesTemplate")}
                      </option>
                      <option value="thirtyPage">
                        {" "}
                        {t("thirtyPagesTemplate")}
                      </option>
                      <option value="fiftyPage">
                        {" "}
                        {t("fiftyPagesTemplate")}
                      </option>
                    </select>
                  )}
                  {GenerateReportsForm.reportType === "custom" && (
                    <select
                      defaultValue={""}
                      onChange={(e) => {
                        HandleChange(e);
                      }}
                      name="reportTemplate"
                      className="w-full border border-white/20 rounded-lg p-3 text-[--allblack]"
                    >
                      <option disabled value="">
                        {t("selectTemplate")}
                      </option>
                      <option value="twentyPage">
                        {" "}
                        {t("twentyPagesTemplate")}
                      </option>
                      <option value="thirtyPage">
                        {" "}
                        {t("thirtyPagesTemplate")}
                      </option>
                      <option value="fiftyPage">
                        {" "}
                        {t("fiftyPagesTemplate")}
                      </option>
                    </select>
                  )}
                  {GenerateReportsForm.reportType === "" && (
                    <p className="text-red-500">{t("selectReportType")}</p> 
                  )}
                </div> */}
                {/* <div>
                  <label className="block text-[--text-color] mb-2">
                    {t("reportName")}  <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="reportName"
                    onChange={(e) => {
                      HandleChange(e);
                    }}
                    type="text"
                    className="w-full border outline-none border-[--navbar] rounded-lg p-3 text-[--allblack]"
                    placeholder={`${t("Enter report name")}`}
                  />
                </div> */}
                <div>
                  <label className="block text-[--text-color] mb-2">
                    {t("reportObjective")}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="reportDescription"
                    onChange={(e) => {
                      HandleChange(e);
                    }}
                    className="w-full text-black outline-none border border-[--navbar] rounded-lg p-3 text-[--text-color]"
                    placeholder={`${t(
                      "Describe the objective of this report"
                    )}`}
                    rows={6}
                  />
                </div>
                <PhotoSelector
                  selectedPhotos={photos}
                  setSelectedPhotos={setPhotos}
                  handlePhotoSelect={handlePhotoSelect}
                />
                <button
                  disabled={Isloading}
                  className="w-full bg-[--navbar] hover:bg-[--navbar-hover] text-[--allwhite] rounded-lg p-3 transition-colors"
                >
                  {Isloading ? (
                    <div className="flex items-center justify-center">
                      <FaSpinner className="animate-spin mr-2" />
                    </div>
                  ) : (
                    t("generateReport")
                  )}
                </button>
              </form>
            </div>
          )}

          {selectedTool === "scraping" && (
            <div className="mt-16 space-y-6 bg-[--rightSide-bg-color] backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-semibold text-[--text-color] flex items-center gap-2">
                <FaGlobeAfrica className="text-[--navbar]" />{" "}
                {t("webIntelligenceScraper")}
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-[--text-color] mb-2">
                    {t("webScraperDescription")}
                  </label>
                  <input
                    type="url"
                    className="w-full outline-none border border-[--navbar] rounded-lg p-3 text-[--text-color]"
                    placeholder={t("Enter the URL to scrape")}
                  />
                </div>
                <button className="w-full bg-[--navbar] hover:bg-[--navbar-hover] text-[--allwhite]  rounded-lg p-3 transition-colors">
                  {t("targetURL")}
                </button>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}
