// DonutChart.js
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  // Data for the chart
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Options for the chart
  const options = {
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div>
      <h2 style={{ fontSize: 30, margin: "30px" }}>Stock Chart</h2>
      <Doughnut style={{ marginTop: "30px" }} data={data} options={options} />
    </div>
  );
};

export default DonutChart;
