import { useTranslation } from "react-i18next";

export default function ProfilePerformance() {
  const { t } = useTranslation();

  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold text-[--text-color] mb-3">
      {t('performance')}
      </h2>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm text-[--text-color] ">
            <span>{t('productivity')}</span>
            <span>85%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full mt-1">
            <div
              className="h-full bg-indigo-500 rounded-full transition-all"
              style={{ width: "85%" }}
            ></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-sm text-[--text-color] ">
            <span>{t('goalCompletion')}</span>
            <span>92%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full mt-1">
            <div
              className="h-full bg-green-500 rounded-full transition-all"
              style={{ width: "92%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
