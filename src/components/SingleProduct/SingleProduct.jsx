import "../SingleProduct/SingleProduct.css";
import Product1 from "../../images/product1.png";
import Review from "../../assets/review.svg";

const SingleProduct = () => {
  return (
    <div className="product">
      <div className="product-image">
        <img src={Product1} alt="Product 1" />
      </div>
      <div className="product-detail">
        <div className="product-review">
          <img src={Review} alt="Review" />
          <img src={Review} alt="Review" />
          <img src={Review} alt="Review" />
          <img src={Review} alt="Review" />
          <img src={Review} alt="Review" />
          <span>(1)</span>
        </div>
        <div className="product-title">
          <span>Colorful Sparklers</span>
        </div>
        <div className="product-price">
          <span>$40.00 – $45.00</span>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
