import "./RecentOrder.css";
import product from "../../../images/bursting.png";
import Table from "../table/Table";
const RecentOrders = () => {
  const orderInfo = [
    "IMAGE",
    "PRODUCTITEM",
    "PRODUCT ID",
    "DATE",
    "PRICE",
    "CUSTOMER NAME",
    "QUANTITY",
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
      <div className="heading">
        <span>Last Orders</span>
      </div>
      <Table />
    </section>
  );
};
export default RecentOrders;
