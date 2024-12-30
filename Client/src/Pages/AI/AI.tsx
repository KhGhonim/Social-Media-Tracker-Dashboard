import { useState } from "react";
import Header from "../../components/Header/Header";
import PhoneHeader from "../../components/PhoneHeader/PhoneHeader";
import Navbar from "../../components/PhoneNavbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { IoGlobeSharp, IoSparkles } from "react-icons/io5";
import { FaGlobeAfrica } from "react-icons/fa";
import ToolGrid from "../../components/AIPage/ToolGrid/ToolGrid";
import PhotoSelector from "../../components/AIPage/PhotoSelector/PhotoSelector";
import { useTranslation } from "react-i18next";
import { FiFileText } from "react-icons/fi";

export default function AI() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [selectedRepot, setselectedRepot] = useState("daily");
  const { t } = useTranslation();

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
        selectedTool === null ? "h-screen" : "h-full"
      } w-full bg-[--bg-color] max-lg:pb-20`}
    >
      <PhoneHeader />
      <Navbar />
      <Header />
      <Sidebar />
      <div className="relative px-6 py-12 h-full mx-auto max-w-7xl">
        <div className="text-center mb-16">
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
            <div className="space-y-4">
              <div>
                <label className="block text-[--text-color] mb-2">
                  {t("reportType")}
                </label>
                <select
                  onChange={(e) => setselectedRepot(e.target.value)}
                  defaultValue={""}
                  className="w-full border border-white/20 rounded-lg p-3 text-[--allblack]"
                >
                  <option disabled value="">
                    {t("selectReport")}
                  </option>
                  <option value="daily"> {t("dailyReport")}</option>
                  <option value="weekly"> {t("weeklyReport")}</option>
                  <option value="monthly"> {t("monthlyReport")}</option>
                  <option value="custome"> {t("customReport")}</option>
                </select>
              </div>

              <div>
                <label className="block text-[--text-color] mb-2">
                  {t("templatesType")}
                </label>
                {selectedRepot === "daily" && (
                  <select
                    defaultValue={""}
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
                {selectedRepot === "weekly" && (
                  <select
                    defaultValue={""}
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

                {selectedRepot === "monthly" && (
                  <select
                    defaultValue={""}
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
                {selectedRepot === "custom" && (
                  <select
                    defaultValue={""}
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
              </div>

              <div>
                <label className="block text-[--text-color] mb-2">
                  {t("reportName")}
                </label>
                <input
                  type="text"
                  className="w-full border outline-none border-[--navbar] rounded-lg p-3 text-[--allblack]"
                  placeholder={`${t("Enter report name")}`}
                />
              </div>
              <div>
                <label className="block text-[--text-color] mb-2">
                  {t("reportObjective")}
                </label>
                <textarea
                  className="w-full outline-none border border-[--navbar] rounded-lg p-3 text-[--text-color]"
                  placeholder={`${t("Describe the objective of this report")}`}
                  rows={6}
                />
              </div>
              <PhotoSelector />
              <button className="w-full bg-[--navbar] hover:bg-[--navbar-hover] text-[--allwhite] rounded-lg p-3 transition-colors">
                {t("generateReport")}
              </button>
            </div>
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
