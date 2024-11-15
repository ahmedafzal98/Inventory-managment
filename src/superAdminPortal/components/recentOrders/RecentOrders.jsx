import "./RecentOrder.css";
import Table from "../table/Table";
import { lastOrdersColumns } from "../../../data/data";
import { selectLastOrders } from "../../../store/DataSlice";
import { useSelector } from "react-redux";
const RecentOrders = () => {
  const lastOrders = useSelector(selectLastOrders);

  return (
    <section className="orders">
      <div className="heading">
        <span>Recent Orders</span>
      </div>
      <Table tableData={lastOrders} columns={lastOrdersColumns} />
    </section>
  );
};
export default RecentOrders;
