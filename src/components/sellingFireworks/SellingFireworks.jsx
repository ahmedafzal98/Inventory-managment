import Headline from "../Headline/Headline";
import Sale from "../sale/Sale";
import "../sellingFireworks/SellingFireworks.css";
import SingleFirework from "../SingleFirework/SingleFirework";

import product1 from "../../images/product1.png";
import product2 from "../../images/product2.png";
import product3 from "../../images/product3.png";
import product4 from "../../images/product4.png";
const SellingFireworks = () => {
  const productImages = [
    { src: product1, title: "Assortments" },
    { src: product2, title: "Multi-shot Cakes" },
    { src: product3, title: "Artillery" },
    { src: product4, title: "Fountains" },
  ];
  return (
    <>
      <div className="hero-section">
        <Headline title="Our Products" />
        <section className="selling-fireworks">
          <section className="fireworks-container">
            {productImages &&
              productImages.map((item) => {
                return <SingleFirework src={item.src} title={item.title} />;
              })}
          </section>
          <div className="sale">
            <Sale />
            <Sale />
            <Sale />
          </div>
        </section>
      </div>
    </>
  );
};
export default SellingFireworks;
