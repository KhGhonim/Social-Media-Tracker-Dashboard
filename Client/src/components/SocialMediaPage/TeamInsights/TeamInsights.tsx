import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useTranslation } from "react-i18next";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function TeamInsights({ Insights }) {
  const { t } = useTranslation();

  const chartOptions = {
    plugins: {
      legend: {
        position: "left" as const,
      },
      title: {
        display: true,
        text: t("teammembers"),
      },
    },
  };
  const locationData = {
    labels: Insights.TeamNames,
    datasets: [
      {
        data: Insights.Insights,
        backgroundColor: [
          "rgba(99, 102, 241, 0.8)",
          "rgba(168, 85, 247, 0.8)",
          "rgba(236, 72, 153, 0.8)",
          "rgba(234, 179, 8, 0.8)",
          "rgba(59, 130, 246, 0.8)",
        ],
      },
    ],
  };

  return (
    <div className="bg-[--bg-color] p-6 rounded-xl shadow-sm w-full">
      <h3 className="text-lg font-semibold text-[--text-color]">
        {" "}
        {t("teamInsights")}{" "}
      </h3>
      <div className="grid grid-cols-1">
        <Doughnut data={locationData} options={chartOptions} />
      </div>
    </div>
  );
}
