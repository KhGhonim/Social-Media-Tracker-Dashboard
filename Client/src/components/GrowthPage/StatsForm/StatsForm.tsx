import { FaSpinner } from "react-icons/fa";
import { platformMetrics } from "../../../DB/Context";
import { SocialPlatform, StatsFormProps } from "../../../types/types";
import { useTranslation } from "react-i18next";

interface StatsForm extends StatsFormProps {
  platform: SocialPlatform;
  handleSubmit: (e: React.FormEvent) => void;
  stats: Record<string, number>;
  setStats: (stats: Record<string, number>) => void;
  isloading: boolean;
}
export default function StatsForm({
  platform,
  handleSubmit,
  stats,
  setStats,
  isloading,
}: StatsForm) {
  const handleChange = (metric: string, value: string) => {
    setStats({
      ...stats,
      [metric]: parseInt(value) || 0,
    });
  };
  const { t } = useTranslation();
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 bg-[--bg-color] text-[--text-color] p-8 rounded-xl shadow-lg border border-gray-200"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8">
        {platformMetrics[platform]?.map((metric) => (
          <div key={metric} className="space-y-3">
            <label className="block text-sm font-medium capitalize">
              {t(metric)}
            </label>
            <input
              type="number"
              defaultValue={stats[metric] || ""}
              onChange={(e) =>
                handleChange(metric.toLowerCase(), e.target.value)
              }
              className="w-full px-4 py-2 border text-[--text-color] bg-[--rightSide-bg-color] border-gray-300 outline-none rounded-lg focus:ring-2 focus:ring-[--navbar] focus:border-[--navbar] transition-all placeholder-gray-500 "
              placeholder="Enter value"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isloading}
          className="px-6 py-3 bg-[--navbar] text-white font-medium rounded-lg hover:bg-[--navbar-hover] transition duration-300 shadow-md"
        >
          {isloading ? (
            <div className="flex w-full h-full items-center justify-center">
              <FaSpinner className="animate-spin" />
            </div>
          ) : (
            "Save Metrics"
          )}
        </button>
      </div>
    </form>
  );
}
