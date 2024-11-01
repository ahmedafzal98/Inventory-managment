import "../components/viewStock/ViewStock.css";
import "./ProductManagment.css";

import product from "../../images/bursting.png";

import { useEffect, useState } from "react";
import { Add, Check, Delete, Edit } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
  "ACTIONS",
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
const ProductManagment = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  const [OrderDetail, setOrderDetail] = useState([]);

  const navigate = useNavigate();

  const handleAddProductClick = () => {
    navigate("/inventory/addProduct");
  };

  useEffect(() => {
    setOrderDetail(orderDetails); // Initialize state with data on component mount
  }, []);

  const HandleEdit = (index) => {
    setIsEdit(!isEdit);
    setSelectedItem(index);
  };

  const HandleDelete = (index) => {
    const updatedOrderDetail = [...OrderDetail];
    updatedOrderDetail.splice(index, 1); // Remove 1 item
    setOrderDetail(updatedOrderDetail); // Update state with the new array
  };

  console.log(OrderDetail);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="stock"
      >
        <div className="addIcon">
          <Fab
            sx={{ backgroundColor: "#fff" }}
            aria-label="add"
            onClick={handleAddProductClick}
          >
            <Add />
          </Fab>
        </div>
        <div className="stock-card">
          <div
            style={{ justifyContent: "space-around" }}
            className="stock-info"
          >
            {orderInfo &&
              orderInfo.map((info) => {
                return <span>{info}</span>;
              })}
          </div>
          <div className="line"></div>
          <div className="stock-detail">
            {OrderDetail &&
              OrderDetail.map((detail, index) => {
                const isDisabled = isEdit && index === selectedItem;

                return (
                  <>
                    <div className="stock-items">
                      <div className="product-img">
                        <img src={detail.image} alt="" srcset="" />
                      </div>
                      <span style={{ color: "#3D475C" }}>{detail.name}</span>
                      <input
                        type="text"
                        value={detail.prod_id}
                        disabled={!isDisabled}
                      />

                      <input
                        type="text"
                        value={detail.date}
                        disabled={!isDisabled}
                      />
                      <input
                        type="text"
                        value={detail.price}
                        disabled={!isDisabled}
                      />
                      <input
                        type="text"
                        value={detail.customName}
                        disabled={!isDisabled}
                      />
                      <input
                        type="number"
                        value={detail.qty}
                        disabled={!isDisabled}
                      />
                      <input
                        type="text"
                        value={detail.city}
                        disabled={!isDisabled}
                      />

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
                      <div className="icons">
                        {isEdit && index === selectedItem ? (
                          <Check
                            fontSize="large"
                            onClick={() => HandleEdit(index)}
                          />
                        ) : (
                          <Edit
                            fontSize="large"
                            onClick={() => HandleEdit(index)}
                          />
                        )}
                        {/* <img src={deleteIcon} alt="Delete Icon" srcset="" /> */}
                        <Delete
                          fontSize="large"
                          onClick={() => HandleDelete(index)}
                        />
                      </div>
                    </div>

                    <div className="line"></div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductManagment;
