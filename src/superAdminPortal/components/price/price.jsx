import "../viewStock/ViewStock.css";

import product from "../../../images/bursting.png";
import editIcon from "../../../assets/edit-black-icon.svg";
const Price = () => {
  const orderInfo = ["IMAGE", "ITEM", "PRODUCT ID", "PRICE", "ACTION"];

  const orderDetails = [
    {
      image: product,
      name: "Smart Phone",
      prod_id: 4827,
      price: "$1200",
      editIcon: editIcon,
    },
    {
      image: product,
      name: "Smart Phone",
      prod_id: 4827,
      price: "$1200",
      editIcon: editIcon,
    },
    {
      image: product,
      name: "Smart Phone",
      prod_id: 4827,
      price: "$1200",
      editIcon: editIcon,
    },
    {
      image: product,
      name: "Smart Phone",
      prod_id: 4827,
      price: "$1200",
      editIcon: editIcon,
    },
    {
      image: product,
      name: "Smart Phone",
      prod_id: 4827,
      price: "$1200",
      editIcon: editIcon,
    },
    {
      image: product,
      name: "Smart Phone",
      prod_id: 4827,
      price: "$1200",
      editIcon: editIcon,
    },
    {
      image: product,
      name: "Smart Phone",
      prod_id: 4827,
      price: "$1200",
      editIcon: editIcon,
    },
    {
      image: product,
      name: "Smart Phone",
      prod_id: 4827,
      price: "$1200",
      editIcon: editIcon,
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
                    <span>{detail.price}</span>

                    <img
                      style={{ cursor: "pointer" }}
                      src={editIcon}
                      alt=""
                      srcset=""
                    />
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
export default Price;
