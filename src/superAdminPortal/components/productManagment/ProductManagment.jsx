import "../viewStock/ViewStock.css";
import "./ProductManagment.css";
import data from "../../../data/data";

import { useEffect, useState } from "react";
import { Add, Check, Delete, Edit } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProductManagment = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  const [OrderDetail, setOrderDetail] = useState([]);

  const navigate = useNavigate();

  const handleAddProductClick = () => {
    navigate("/inventory/addProduct");
  };

  useEffect(() => {
    setOrderDetail(data.productManagmentDetails); // Initialize state with data on component mount
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

  console.log(data.productManagmentDetails);
  return (
    <>
      <div className="stock">
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
            className="productManagment-title"
          >
            {data.productManagmentTitle &&
              data.productManagmentTitle.map((info) => {
                return <span>{info}</span>;
              })}
          </div>
          <div className="line"></div>
          <div className="productManagment-items">
            {data.productManagmentDetails &&
              data.productManagmentDetails.map((detail, index) => {
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
                            fontSize="medium"
                            onClick={() => HandleEdit(index)}
                          />
                        ) : (
                          <Edit
                            fontSize="medium"
                            onClick={() => HandleEdit(index)}
                          />
                        )}
                        {/* <img src={deleteIcon} alt="Delete Icon" srcset="" /> */}
                        <Delete
                          fontSize="medium"
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
