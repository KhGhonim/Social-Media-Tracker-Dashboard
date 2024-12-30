import { useTranslation } from "react-i18next";
import { MdKeyboardArrowRight } from "react-icons/md";

export function AICard({ title, description, icon, onClick }) {
  const { t } = useTranslation();

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer p-6 rounded-2xl bg-[--rightSide-bg-color] backdrop-blur-lg border border-[--navbar] hover:bg-white/5 transition-all duration-300 hover:scale-105"
    >
      <div className="flex items-start justify-between">
        <div className="p-3 rounded-xl bg-[--navbar] text-[--allwhite]">
          {icon}
        </div>
        <MdKeyboardArrowRight className="text-white/50 group-hover:text-white transition-colors" />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-[--text-color]">
        {t(title)}
      </h3>
      <p className="mt-2 text-[--text-color]">{t(description)}</p>
    </div>
  );
}
