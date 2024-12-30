import React, { useState } from "react";
import { UploadAchievementProps } from "../../../types/types";
import { FaUpload } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useTranslation } from "react-i18next";

export default function UploadAchievement({
  game,
  onSubmit,
  onClose,
}: UploadAchievementProps) {
  const [achievementUrl, setAchievementUrl] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      achievementUrl,
      score: Number(score),
    });
  };
  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">  {t('submitYourAchievement')}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <IoClose className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('achievementScreenshotURL')}
            </label>
            <input
              type="url"
              required
              value={achievementUrl}
              onChange={(e) => setAchievementUrl(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://example.com/screenshot.jpg"
            />
          </div>

          <div>
            <label className="block text-sm capitalize font-medium text-gray-700 mb-1">
              {game.scoreType} {t('likesCount')}
            </label>
            <input
              type="number"
              required
              value={score}
              onChange={(e) => setScore(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your score"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FaUpload className="w-4 h-4" />
            <span>{t('submitAchievement')}</span>
          </button>
        </form>
      </div>
    </div>
  );
}
