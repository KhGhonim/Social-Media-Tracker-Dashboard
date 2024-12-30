import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useTranslation } from "react-i18next";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export default function EngagementChart({ EngagementOverview }) {
  const { t } = useTranslation();

  const data = {
    labels: [`${t("likes")}`, `${t("comments")}`, `${t("retweets")}`],
    datasets: [
      {
        data: EngagementOverview,
        backgroundColor: [
          "rgba(99, 102, 241, 0.8)",
          "rgba(168, 85, 247, 0.8)",
          "rgba(236, 72, 153, 0.8)",
        ],
      },
    ],
  };

  return (
    <div className="bg-[--bg-color] p-6  my-4 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold mb-4 text-[--text-color]">
        {t('xEngagementOverview')}
      </h3>
      <Bar options={options} data={data} />
    </div>
  );
}
