import { useTranslation } from "react-i18next";
import { FaSearch } from "react-icons/fa";

export default function FilterBar({
  search,
  onSearchChange,
  selectedPlatform,
  onPlatformChange,
}) {
  const { t } = useTranslation();

  return (
    <div className="bg-[--rightSide-bg-color] p-4 rounded-lg shadow-sm mb-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[--navbar] w-5 h-5" />
          <input
            type="text"
            placeholder="Search accounts..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[--navbar] outline-none focus:border-[--navbar]"
          />
        </div>

        <div className="flex justify-center items-center gap-4">
          <select
            value={selectedPlatform}
            onChange={(e) => onPlatformChange(e.target.value)}
            className="px-6 py-2 border rounded-lg focus:ring-2 focus:ring-[--navbar] outline-none focus:border-[--navbar]"
          >
            <option value="">All Platforms</option>
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
      </div>
    </div>
  );
}
