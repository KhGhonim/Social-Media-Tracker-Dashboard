import { useTranslation } from "react-i18next";
import { FaTrophy } from "react-icons/fa6";

export default function TournamentHeader() {
  const { t } = useTranslation();

  
  return (
    <div className="text-center rounded-l-3xl py-12 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center mb-4">
          <FaTrophy className="w-12 h-12 text-yellow-300 mr-3" />
          <h1 className="text-4xl font-bold text-white">
            {t('socialFuryChallengeTitle')}
          </h1>
        </div>
        <p className="text-xl text-gray-100 mb-8">
        {t('socialFuryChallengeDescription')}
        </p>
      </div>
    </div>
  );
}
