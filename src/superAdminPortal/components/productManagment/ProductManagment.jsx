import "../viewStock/ViewStock.css";
import "./ProductManagment.css";
import data from "../../../data/data";
import image from "../../../images/bursting.png";

import { useEffect, useState } from "react";
import { Add, Check, Delete, Edit } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  deleteProduct,
  getProducts,
  updateProduct,
} from "../../../firebase/dbService";

const ProductManagment = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  const [OrderDetail, setOrderDetail] = useState([]);
  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [organization, setOrganization] = useState("");
  const [productQuantity, setProductQuantity] = useState(0);

  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const { uid } = useSelector((state) => state.users);

  const uid = localStorage.getItem("uid");
  console.log(uid);

  const handleAddProductClick = () => {
    navigate("/inventory/addProduct");
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts(uid);
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const HandleEdit = (productId, index) => {
    setIsEdit(!isEdit);
    setSelectedItem(index);
  };

  const HandleDelete = (productId, index) => {
    const updatedOrderDetail = [...OrderDetail];
    updatedOrderDetail.splice(index, 1); // Remove 1 item
    setOrderDetail(updatedOrderDetail); // Update state with the new array
    deleteProduct(uid, productId);
  };

  const HandleSaveClick = (productId) => {
    const updatedData = {
      name,
      price,
      organization,
      productQuantity,
    };
    updateProduct(productId, updatedData);
  };

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
            {products &&
              products.map((detail, index) => {
                const isDisabled = isEdit && index === selectedItem;
                const classname =
                  detail.productQuantity > 0 ? "in-stock" : "empty-stock";

                return (
                  <>
                    <div className="stock-items">
                      <div className="product-img">
                        <img src={image} alt="" srcset="" />
                      </div>
                      <input
                        type="text"
                        value={detail.name}
                        disabled={!isDisabled}
                      />
                      <input type="text" value={detail.id} disabled />

                      <input
                        type="text"
                        value={detail.date}
                        disabled={!isDisabled}
                      />
                      <input
                        type="text"
                        value={detail.price}
                        disabled={!isDisabled}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                      <input
                        type="text"
                        value={detail.organization}
                        disabled={!isDisabled}
                        onChange={(e) => setOrganization(e.target.value)}
                      />
                      <input
                        type="number"
                        value={detail.productQuantity}
                        disabled={!isDisabled}
                        onChange={(e) => setProductQuantity(e.target.value)}
                      />

                      <div className={`status ${classname}`}>
                        <span>
                          {detail.productQuantity > 0
                            ? "In Stock"
                            : "Out Stock"}
                        </span>
                      </div>
                      <div className="icons">
                        {isEdit && index === selectedItem ? (
                          <Check
                            fontSize="medium"
                            onClick={() => HandleSaveClick(detail.id, index)}
                          />
                        ) : (
                          <Edit
                            fontSize="medium"
                            onClick={() => HandleEdit(detail.id, index)}
                          />
                        )}
                        {/* <img src={deleteIcon} alt="Delete Icon" srcset="" /> */}
                        <Delete
                          fontSize="medium"
                          onClick={() => HandleDelete(detail.id, index)}
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
