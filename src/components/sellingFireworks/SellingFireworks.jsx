import Headline from "../Headline/Headline";
import Sale from "../sale/Sale";
import "../sellingFireworks/SellingFireworks.css";
import SingleFirework from "../SingleFirework/SingleFirework";
const SellingFireworks = () => {
  return (
    <>
      <div className="hero-section">
        <Headline title="Best Selling Fireworks" />
        <section className="selling-fireworks">
          <section className="fireworks-container">
            <SingleFirework />
            <SingleFirework />
            <SingleFirework />
            <SingleFirework />
            <SingleFirework />
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
