import "./ViewStock.css";

import product from "../../../images/bursting.png";

import Pagination from "../pagination/pagination.jsx";
import Table from "../table/Table.jsx";
import EnhancedTable from "../table/Table.jsx";
const ViewStock = () => {
  const orderInfo = [
    "IMAGE",
    "PRODUCT ITEM",
    "PRODUCT ID",
    "ORGANIZATION",
    "DATE",
    "PRICE",
    "QUANTITY",
    "SUPPLIER",
    "STOCK STATUS",
    "ACTIONS",
  ];

  const orderDetails = [
    {
      image: product,
      name: "Smart Phone",
      prod_id: 4827,
      organization: "Addidas",
      date: "Apr 9 , 2023",
      price: "$1200",
      qty: 1,
      supplier: "abc",
      status: "In Stock",
    },
    {
      image: product,
      name: "Smart Phone",
      prod_id: 4827,
      organization: "Addidas",
      date: "Apr 9 , 2023",
      price: "$1200",
      qty: 1,
      supplier: "abc",
      status: "In Stock",
    },
    {
      image: product,
      name: "Smart Phone",
      prod_id: 4827,
      organization: "Addidas",
      date: "Apr 9 , 2023",
      price: "$1200",
      qty: 1,
      supplier: "abc",
      status: "In Stock",
    },
    {
      image: product,
      name: "Smart Phone",
      prod_id: 4827,
      organization: "Addidas",
      date: "Apr 9 , 2023",
      price: "$1200",
      qty: 1,
      supplier: "abc",
      status: "In Stock",
    },
    {
      image: product,
      name: "Smart Phone",
      prod_id: 4827,
      organization: "Addidas",
      date: "Apr 9 , 2023",
      price: "$1200",
      qty: 1,
      supplier: "abc",
      status: "In Stock",
    },
    {
      image: product,
      name: "Smart Phone",
      prod_id: 4827,
      organization: "Addidas",
      date: "Apr 9 , 2023",
      price: "$1200",
      qty: 1,
      supplier: "abc",
      status: "In Stock",
    },
    {
      image: product,
      name: "Smart Phone",
      prod_id: 4827,
      organization: "Addidas",
      date: "Apr 9 , 2023",
      price: "$1200",
      qty: 1,
      supplier: "abc",
      status: "In Stock",
    },
    {
      image: product,
      name: "Smart Phone",
      prod_id: 4827,
      organization: "Addidas",
      date: "Apr 9 , 2023",
      price: "$1200",
      qty: 1,
      supplier: "abc",
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

        {/* <Table titles={orderInfo} info={orderDetails} /> */}

        <EnhancedTable />
        <Pagination rows={orderDetails.length} />
      </div>
    </div>
  );
};
export default ViewStock;
