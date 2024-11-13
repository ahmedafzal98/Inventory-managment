import "../../components/sale/Sale.css";
const Sale = ({ title }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="sale-banner"></div>
      <span className="productName">{title}</span>
    </div>
  );
};
export default Sale;
