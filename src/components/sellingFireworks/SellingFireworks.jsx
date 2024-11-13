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
    { src: product1, title: "Assortments", stock: "(45)" },
    { src: product2, title: "Multi-shot Cakes", stock: "(35)" },
    { src: product3, title: "Artillery", stock: "(15)" },
    { src: product4, title: "Fountains", stock: "(5)" },
  ];
  return (
    <>
      <div className="hero-section">
        <Headline text="Our Products" />
        <section className="selling-fireworks">
          <section className="fireworks-container">
            {productImages &&
              productImages.map((item) => {
                return (
                  <SingleFirework
                    src={item.src}
                    title={item.title}
                    stock={item.stock}
                  />
                );
              })}
          </section>
          <div className="sale">
            <Headline text="Our Organization Fundraisers" />
            <div className="saleContainer">
              <Sale title="Uniforms and Helmets" />
              <Sale title="Uniforms and Helmets" />
              <Sale title="Uniforms and Helmets" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default SellingFireworks;
