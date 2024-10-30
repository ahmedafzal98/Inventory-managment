import "./Chart.css";
import DonutChart from "./DonutChart";
import LineChart from "./LineChart";
const Chart = () => {
  return (
    <section className="charts">
      <div className="revenue-chart">
        <div className="revenue-card">
          <LineChart />
        </div>
      </div>
      <div className="stock-chart">
        <DonutChart />
      </div>
    </section>
  );
};
export default Chart;
