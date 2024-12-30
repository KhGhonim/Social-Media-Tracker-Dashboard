import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useTranslation } from "react-i18next";
ChartJS.register(ArcElement, Tooltip, Legend);

const chartOptions = {
  plugins: {
    legend: {
      position: "left" as const,
    },
  },
};

export default function ProjectsInsights() {
  const { t } = useTranslation();

  const locationData = {
    labels: [
      t("Türkiye"), // Use t directly for translations
      t("Iran"),
      t("Sudan"),
      t("UAE"),
      t("Palestine"),
    ],
    datasets: [
      {
        data: [40, 20, 15, 12, 13],
        backgroundColor: [
          "rgba(200, 16, 46)",
          "rgba(35, 159, 64)",
          "rgba(0, 94, 184)",
          "rgba(255, 140, 0)",
          "rgba(115, 41, 130)",
        ],
      },
    ],
  };

  return (
    <div className="bg-[--bg-color] p-6 rounded-xl shadow-sm w-full">
      <h3 className="text-lg text-[--text-color] font-semibold">
        {t("projectInsights")}
      </h3>
      <div className="grid grid-cols-1 text-[--text-color]">
        <Doughnut data={locationData} options={chartOptions} />
      </div>
    </div>
  );
}
