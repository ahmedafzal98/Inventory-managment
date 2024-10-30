import Main from "../../components/main/Main";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex", overflow: "hidden" }}>
        <Sidebar />
        <Main />
      </div>
    </>
  );
};
export default Dashboard;
