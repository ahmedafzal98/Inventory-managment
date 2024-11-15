import "../viewStock/ViewStock.css";
import "./OrderManagment.css";


import { lastOrdersColumns } from "../../../data/data";
import { selectLastOrders } from "../../../store/DataSlice";
import { useSelector } from "react-redux";
import CardContainer from "../cardContainer/CardContainer";
import EnhancedTable from "../table/Table";
const OrderManagment = () => {
  const orders = useSelector(selectLastOrders);
  return (
    <div className="stock">
      <CardContainer />
      <div className="stock-card">
        <EnhancedTable tableData={orders} columns={lastOrdersColumns} />
        {/* <div className="orderManagment-items">
          {data.orderManagmentDetails &&
            data.orderManagmentDetails.map((detail) => {
              return (
                <>
                  <div
                    style={{ justifyContent: "space-around" }}
                    className="stock-items"
                  >
                    <div className="product-img">
                      <img src={detail.image} alt="" srcset="" />
                    </div>
                    <span style={{ color: "#3D475C" }}>{detail.name}</span>
                    <span>{detail.payment}</span>
                    <span>{detail.date}</span>
                    <span>{detail.price}</span>
                    <span>{detail.customName}</span>
                    <span>{detail.status}</span>
                    <span>{detail.qty}</span>
                    <span>{detail.city}</span>
                    <SelectMenu />
                  </div>

                  <div className="line"></div>
                </>
              );
            })}
        </div> */}
      </div>
    </div>
  );
};
export default OrderManagment;
