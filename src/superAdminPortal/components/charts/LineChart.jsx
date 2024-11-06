// LineChart.js
import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary components, including the CategoryScale
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  // Data for the chart
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Monthly Sales",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: "rgba(75, 192, 192, 1)",
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.1,
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Line Chart Example",
      },
    },
  };

  useEffect(() => {
    return () => {
      const chartInstance = ChartJS.instances[0];
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div>
      <h2 style={{ fontSize: 30, margin: "30px" }}>Revenue Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
