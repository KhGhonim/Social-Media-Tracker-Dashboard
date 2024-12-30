import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useTranslation } from "react-i18next";

// Register the required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function TotalGrowth({ Monthly, Yearly }) {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("monthly");
  const chartData = {
    weekly: {
      labels: [
        t("sun"),
        t("mon"),
        t("tue"),
        t("wed"),
        t("thu"),
        t("fri"),
        t("sat"),
      ],
      datasets: [
        {
          label: t("weeklyPerformance"),
          data: [12, 19, 3, 5, 2, 3, 7],
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
        },
      ],
    },
    monthly: {
      labels: [t("week1"), t("week2"), t("week3"), t("week4")],
      datasets: [
        {
          label: t("weeklyPerformance"),
          data: Monthly,
          borderColor: "rgba(153, 102, 255, 1)",
          backgroundColor: "rgba(153, 102, 255, 0.2)",
        },
      ],
    },
    yearly: {
      labels: [
        t("jan"),
        t("feb"),
        t("mar"),
        t("apr"),
        t("may"),
        t("jun"),
        t("jul"),
        t("aug"),
        t("sep"),
        t("oct"),
        t("nov"),
        t("dec"),
      ],
      datasets: [
        {
          label: t("yearlyPerformance"),
          data: Yearly,
          borderColor: "rgba(255, 159, 64, 1)",
          backgroundColor: "rgba(255, 159, 64, 0.2)",
        },
      ],
    },
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom center",
      },
      tooltip: {
        enabled: true,
      },
    },
    elements: {
      point: {
        radius: 10,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full text-[--text-color">
      <h1 className="text-lg lg:text-2xl font-bold text-[--text-color]">
        {t("performance")}
      </h1>

      <div className="w-full py-2 px-4 rounded-lg h-96 text-[--text-color]">
        <div className="mb-4 flex justify-end items-center">
          <label htmlFor="performance-select" className="mr-2 font-medium">
            {t("view")}
          </label>
          <select
            id="performance-select"
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
            className="px-4 py-1 rounded-lg border  bg-[--floatingStats] border-[--rightSide-bg-color] focus:outline-none focus:ring-2 focus:ring-[--navbar]"
          >
            <option value="monthly">{t("monthly")}</option>
            <option value="yearly">{t("yearly")}</option>
          </select>
        </div>

        <div className="h-72">
          <Line
            data={chartData[activeTab]}
            options={{
              ...chartOptions,
              plugins: {
                ...chartOptions.plugins,
                legend: {
                  ...chartOptions.plugins.legend,
                  position: "top",
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
