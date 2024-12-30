import { useTranslation } from "react-i18next";
import { FaGift, FaLightbulb } from "react-icons/fa";
import { GiTargetPrize } from "react-icons/gi";

export function GameCard({ game, onJoin }) {
  const { t } = useTranslation();


  return (
    <div className="bg-[--rightSide-bg-color] shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="h-full flex flex-col">
        {/* Title */}
        <h3 className="text-2xl font-bold text-[--text-color] mb-3">
          {t(game.title)}
        </h3>

        {/* Description */}
        <p className="text-[--text-color] mb-5">{t(game.description)}</p>

        {/* Objective */}
        <div className="flex items-start gap-3 mb-4">
          <GiTargetPrize className="w-6 h-6 text-blue-500" />
          <div>
            <div className="font-semibold text-gray-700">{t("objective")}</div>
            <div className="text-[--text-color]">{t(game.objective)}</div>
          </div>
        </div>

        {/* Prize */}
        <div className="flex items-start gap-3 mb-4">
          <FaGift className="w-6 h-6 text-purple-500" />
          <div>
            <div className="font-semibold text-gray-700">{t("prize")}</div>
            <div className="text-[--text-color]">{t(game.prize)}</div>
          </div>
        </div>

        {/* Tips */}
        <div className="flex items-start gap-3 mb-6">
          <FaLightbulb className="w-6 h-6 text-yellow-500" />
          <div>
            <div className="font-semibold text-gray-700">{t("tips")}</div>
            <ul className="text-[--text-color] list-disc list-inside space-y-1">
              {game.tips.map((tip, index) => (
                <li key={index} className="text-sm">
                  {t(tip)}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Join Button */}
        <div className="mt-auto">
          <button
            onClick={() => onJoin(game.id)}
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition-opacity duration-200"
          >
            {t("joinViralChallenge")}
          </button>
        </div>
      </div>
    </div>
  );
}
