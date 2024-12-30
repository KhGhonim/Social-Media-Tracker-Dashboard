import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { GameCardProps } from "../../../types/types";
import { useTranslation } from "react-i18next";

export function GameCard({ game }: GameCardProps) {
  const navigate = useNavigate();
  const Icon = game.icon;
  const { t } = useTranslation();

  return (
    <div className="bg-[--rightSide-bg-color] text-[--text-color] rounded-xl shadow-lg p-6 transition-all hover:shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-[--navbar] text-[--allwhite] rounded-lg">
          <Icon />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{t(game.name)}</h3>
      <p className="text-gray-600 mb-4">{t(game.description)}</p>
      <button
        onClick={() => navigate(`/challenge/${game.id}`)}
        className="w-full flex items-center justify-center space-x-2  bg-[--navbar] text-[--allwhite] py-2 px-4 rounded-lg hover:bg-[--navbar-hover] transition-colors"
      >
        <span>{t('joinCommentChallenge')}</span>
        <FaArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
