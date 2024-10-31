import "./RecentOrder.css";
import product from "../../../images/bursting.png";
const RecentOrders = () => {
  const orderInfo = [
    "ITEM",
    "PRODUCT ID",
    "DATE",
    "PRICE",
    "CUSTOMER",
    "QTY",
    "CITY",
    "STATUS",
  ];

  const orderDetails = [
    {
      name: "Smart Phone",
      prod_id: 4827,
      date: "Apr 9 , 2023",
      price: "$1200",
      customName: "Fig Nelson",
      qty: 1,
      city: "New York",
      status: "In Stock",
    },
    {
      name: "Smart Phone",
      prod_id: 4827,
      date: "Apr 9 , 2023",
      price: "$1200",
      customName: "Fig Nelson",
      qty: 1,
      city: "New York",
      status: "In Stock",
    },
    {
      name: "Smart Phone",
      prod_id: 4827,
      date: "Apr 9 , 2023",
      qty: 1,
      price: "$1200",
      customName: "Fig Nelson",
      city: "New York",
      status: "In Stock",
    },
    {
      name: "Smart Phone",
      prod_id: 4827,
      qty: 1,
      date: "Apr 9 , 2023",
      price: "$1200",
      customName: "Fig Nelson",
      city: "New York",
      status: "In Stock",
    },
  ];
  return (
    <section className="orders">
      <div className="order-container">
        <div className="heading">
          <span>Last Orders</span>
        </div>
        <div className="orderInfo">
          {orderInfo &&
            orderInfo.map((info) => {
              return <span>{info}</span>;
            })}
        </div>

        <div className="order-detail">
          {orderDetails &&
            orderDetails.map((detail) => {
              return (
                <>
                  <div className="order-items">
                    <div className="product-img">
                      <img src={product} alt="" srcset="" />
                    </div>
                    <span>{detail.name}</span>
                    <span>{detail.prod_id}</span>
                    <span>{detail.date}</span>
                    <span>{detail.price}</span>
                    <span>{detail.customName}</span>
                    <span>{detail.qty}</span>
                    <span>{detail.city}</span>
                    <span>{detail.status}</span>
                  </div>
                  <div className="line"></div>
                </>
              );
            })}
        </div>
      </div>
    </section>
  );
};
export default RecentOrders;
