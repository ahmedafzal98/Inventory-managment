import "./ViewStock.css";
import Pagination from "../pagination/pagination.jsx";
import EnhancedTable from "../table/Table.jsx";
import { lastOrdersColumns } from "../../../data/data";
import { selectLastOrders } from "../../../store/DataSlice";
import { useSelector } from "react-redux";

const ViewStock = () => {
  const orders = useSelector(selectLastOrders);
  return (
    <div className="stock">
      <div className="stock-card">
        <EnhancedTable tableData={orders} columns={lastOrdersColumns} />
        <Pagination rows={orders.length} />
      </div>
    </div>
  );
};
export default ViewStock;
