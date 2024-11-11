import "./RecentOrder.css";
import Table from "../table/Table";
import data from "../../../data/data";
const RecentOrders = () => {
  return (
    <section className="orders">
      <div className="heading">
        <span>Recent Orders</span>
      </div>
      <Table titles={data.orderInfo} info={data.orderDetails} />
    </section>
  );
};
export default RecentOrders;
