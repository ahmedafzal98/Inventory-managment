import "../viewStock/ViewStock.css";

import product from "../../../images/bursting.png";
import SelectMenu from "../selectMenu/SelectMenu";
const OrderManagment = () => {
  const orderInfo = [
    "IMAGE",
    "ITEM",
    "PAYMENT",
    "DATE",
    "PRICE",
    "STATUS",
    "QTY",
    "CITY",
    "ACTION",
  ];

  const orderDetails = [
    {
      image: product,
      name: "Smart Phone",
      payment: "Cash",
      date: "Apr 9 , 2023",
      price: "$1200",
      status: "Ready",
      customName: "Fig Nelson",
      qty: 1,
      city: "New York",
    },
    {
      image: product,
      name: "Smart Phone",
      payment: "Cash",
      date: "Apr 9 , 2023",
      price: "$1200",
      status: "Ready",
      customName: "Fig Nelson",
      qty: 1,
      city: "New York",
    },
    {
      image: product,
      name: "Smart Phone",
      payment: "Cash",
      date: "Apr 9 , 2023",
      price: "$1200",
      status: "Ready",
      customName: "Fig Nelson",
      qty: 1,
      city: "New York",
    },
    {
      image: product,
      name: "Smart Phone",
      payment: "Cash",
      date: "Apr 9 , 2023",
      price: "$1200",
      status: "Ready",
      customName: "Fig Nelson",
      qty: 1,
      city: "New York",
    },
    {
      image: product,
      name: "Smart Phone",
      payment: "Cash",
      date: "Apr 9 , 2023",
      price: "$1200",
      status: "Ready",
      customName: "Fig Nelson",
      qty: 1,
      city: "New York",
    },
    {
      image: product,
      name: "Smart Phone",
      payment: "Cash",
      date: "Apr 9 , 2023",
      price: "$1200",
      status: "Ready",
      customName: "Fig Nelson",
      qty: 1,
      city: "New York",
    },
    {
      image: product,
      name: "Smart Phone",
      payment: "Cash",
      date: "Apr 9 , 2023",
      price: "$1200",
      status: "Ready",
      customName: "Fig Nelson",
      qty: 1,
      city: "New York",
    },
    {
      image: product,
      name: "Smart Phone",
      payment: "Cash",
      date: "Apr 9 , 2023",
      price: "$1200",
      status: "Ready",
      customName: "Fig Nelson",
      qty: 1,
      city: "New York",
    },
  ];
  return (
    <div className="stock">
      <div className="stock-card">
        <div className="stock-info">
          {orderInfo &&
            orderInfo.map((info) => {
              return <span>{info}</span>;
            })}
        </div>
        <div className="line"></div>
        <div className="stock-detail">
          {orderDetails &&
            orderDetails.map((detail) => {
              return (
                <>
                  <div className="stock-items">
                    <div className="product-img">
                      <img src={detail.image} alt="" srcset="" />
                    </div>
                    <span style={{ color: "#3D475C" }}>{detail.name}</span>
                    {/* <span>{detail.name}</span> */}
                    <span>{detail.payment}</span>
                    <span>{detail.date}</span>
                    <span>{detail.price}</span>
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
