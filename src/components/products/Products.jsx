import Headline from "../Headline/Headline";
import "../products/Products.css";
import SingleProduct from "../SingleProduct/SingleProduct";

const Products = () => {
  return (
    <section className="products">
      <Headline title="Our Products" />

      <div className="products-container">
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
      </div>
    </section>
  );
};
export default Products;
