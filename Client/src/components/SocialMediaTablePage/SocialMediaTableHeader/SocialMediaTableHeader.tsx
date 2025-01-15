import { useTranslation } from "react-i18next";
import { FaUsers } from "react-icons/fa6";

export default function SocialMediaTableHeader() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-3 mb-8">
      <FaUsers className="w-8 h-8 text-[--navbar]" />
      <h1 className="text-3xl font-bold text-[--text-color]">
        {t("Social Media Accounts")}
      </h1>
    </div>
  );
}
