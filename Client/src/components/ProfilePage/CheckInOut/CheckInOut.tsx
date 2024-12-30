import { useTranslation } from "react-i18next";

export default function CheckInOut({ HandleCheckIn, HandleCheckOut }) {
  const { t } = useTranslation();

  return (
    <div className="p-6 bg-[--rightSide-bg-color] flex gap-4 pb-20">
      <button
        onClick={() => HandleCheckIn()}
        className="flex-1 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition"
      >
          {t('checkIn')}
      </button>
      <button
        onClick={() => HandleCheckOut()}
        className="flex-1 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition"
      >
          {t('checkOut')}
      </button>
    </div>
  );
}
