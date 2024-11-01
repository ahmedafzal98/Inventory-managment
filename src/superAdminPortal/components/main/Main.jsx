import "./Main.css";
import Chart from "../charts/Chart";
import RecentOrders from "../recentOrders/RecentOrders";
import CardContainer from "../cardContainer/CardContainer";

const Dashboard = () => {
  return (
    <main className="dashboard">
      <CardContainer />
      <Chart />
      <RecentOrders />
    </main>
  );
};
export default Dashboard;
