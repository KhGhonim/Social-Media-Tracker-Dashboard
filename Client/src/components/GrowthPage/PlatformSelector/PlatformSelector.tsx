import { IconType } from "react-icons/lib/iconBase";
import { platforms } from "../../../DB/Context";
import { PlatformSelectorProps, SocialPlatform } from "../../../types/types";
import { useTranslation } from "react-i18next";

export default function PlatformSelector({
  selectedPlatform,
  setSelectedPlatform,
}: PlatformSelectorProps) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-wrap gap-4 justify-center mb-8">
      {platforms.map((platform) => {
        const {
          id,
          icon: Icon,
          label,
          photo,
        } = platform as {
          id: string;
          icon: IconType;
          label: string;
          photo?: string;
        };
        return (
          <button
            key={id}
            onClick={() => setSelectedPlatform(id as SocialPlatform)}
            className={`flex flex-col items-center p-4 rounded-lg transition-all ${
              selectedPlatform === id
                ? "bg-[--navbar] text-white scale-105"
                : "bg-[--floatingStats] hover:bg-[--navbar-hover] text-[--text-color] hover:text-[--allwhite]"
            }`}
          >
            {Icon && <Icon className="w-6 h-6" />}
            {photo && <img src={photo} className="w-6 h-6" alt="" />}
            <span className="text-sm font-medium hidden mt-1 md:block">{t(label)}</span>
          </button>
        );
      })}
    </div>
  );
}
