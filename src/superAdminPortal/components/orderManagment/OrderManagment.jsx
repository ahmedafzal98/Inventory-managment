import "../viewStock/ViewStock.css";
import "./OrderManagment.css";

import data from "../../../data/data";
import SelectMenu from "../selectMenu/SelectMenu";
import CardContainer from "../cardContainer/CardContainer";
const OrderManagment = () => {
  return (
    <div className="stock">
      <CardContainer />
      <div className="stock-card">
        <div className="orderManagment-title">
          {data.orderManagmentTitle &&
            data.orderManagmentTitle.map((info) => {
              return <span>{info}</span>;
            })}
        </div>
        <div className="line"></div>
        <div className="orderManagment-items">
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
                    {/* <span>{detail.name}</span> */}
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
        </div>
      </div>
    </div>
  );
};
export default OrderManagment;
