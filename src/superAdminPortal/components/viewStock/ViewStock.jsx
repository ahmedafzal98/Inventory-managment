import "./ViewStock.css";

import product from "../../../images/bursting.png";

import Pagination from "../pagination/pagination.jsx";
import Table from "../table/Table.jsx";
const ViewStock = () => {
  const orderInfo = [
    "IMAGE",
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
      image: product,
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
      image: product,
      name: "Smart Phone",
      prod_id: 4827,
      date: "Apr 9 , 2023",
      price: "$1200",
      customName: "Fig Nelson",
      qty: 1,
      city: "New York",
      status: "Out Stock",
    },
    {
      image: product,
      name: "Smart Phone",
      prod_id: 4827,
      date: "Apr 9 , 2023",
      qty: 1,
      price: "$1200",
      customName: "Fig Nelson",
      city: "New York",
      status: "Low Stock",
    },
    {
      image: product,
      name: "Smart Phone",
      prod_id: 4827,
      qty: 1,
      date: "Apr 9 , 2023",
      price: "$1200",
      customName: "Fig Nelson",
      city: "New York",
      status: "In Stock",
    },
    {
      image: product,
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
      image: product,
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
      image: product,
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
      image: product,
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
    <div className="stock">
      <div className="stock-card">
        {/* <div className="stock-info">
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
                    <span>{detail.prod_id}</span>
                    <span>{detail.date}</span>
                    <span>{detail.price}</span>
                    <span>{detail.customName}</span>
                    <span>{detail.qty}</span>
                    <span>{detail.city}</span>
                    <div
                      className={`status ${
                        detail.status === "In Stock"
                          ? "in-stock"
                          : detail.status === "Out Stock"
                          ? "empty-stock"
                          : detail.status === "Low Stock"
                          ? "low-stock"
                          : ""
                      }`}
                    >
                      <span>{detail.status}</span>
                    </div>
                  </div>

                  <div className="line"></div>
                </>
              );
            })}
        </div> */}

        <Table titles={orderInfo} info={orderDetails} />
        <Pagination rows={orderDetails.length} />
      </div>
    </div>
  );
};
export default ViewStock;
