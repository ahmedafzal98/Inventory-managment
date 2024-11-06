import "./RecentOrder.css";
import Table from "../table/Table";
const RecentOrders = () => {
  return (
    <section className="orders">
      <div className="heading">
        <span>Recent Orders</span>
      </div>
      <Table />
    </section>
  );
};
export default RecentOrders;
