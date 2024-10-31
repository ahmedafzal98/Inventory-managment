import "../viewStock/ViewStock.css";
import "./EditRemoveProduct.css";

import product from "../../../images/bursting.png";
import editIcon from "../../../assets/edit-black-icon.svg";
import deleteIcon from "../../../assets/delete-black-icon.svg";
const EditRemoveProduct = () => {
  const orderInfo = ["IMAGE", "ITEM", "PRODUCT ID", "ACTION"];

  const orderDetails = [
    {
      image: product,
      name: "Smart Phone",
      prod_id: 4827,
      editIcon: editIcon,
      deleteIcon: deleteIcon,
    },
    {
      image: product,
      name: "Smart Phone",
      prod_id: 4827,
    },
    {
      image: product,
      name: "Smart Phone",
      prod_id: 4827,
    },
    {
      image: product,
      name: "Smart Phone",
      prod_id: 4827,
    },
    {
      image: product,
      name: "Smart Phone",
      prod_id: 4827,
    },
    {
      image: product,
      name: "Smart Phone",
      prod_id: 4827,
    },
    {
      image: product,
      name: "Smart Phone",
      prod_id: 4827,
    },
    {
      image: product,
      name: "Smart Phone",
      prod_id: 4827,
    },
  ];
  return (
    <div className="stock">
      <div className="stock-card">
        <div style={{ justifyContent: "space-around" }} className="stock-info">
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
                  <div
                    style={{ justifyContent: "space-around" }}
                    className="stock-items"
                  >
                    <div className="product-img">
                      <img src={detail.image} alt="" srcset="" />
                    </div>
                    <span style={{ color: "#3D475C" }}>{detail.name}</span>
                    <span>{detail.prod_id}</span>
                    <div className="icons">
                      <img src={editIcon} alt="Edit Icon" srcset="" />
                      <img src={deleteIcon} alt="Delete Icon" srcset="" />
                    </div>
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
export default EditRemoveProduct;
