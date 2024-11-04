import "./Table.css";
import product from "../../../images/bursting.png";
import data from "../../../data/data";
const Table = () => {
  return (
    <section className="table">
      <div className="table-container">
        <div className="table-title">
          {data.orderInfo &&
            data.orderInfo.map((title) => {
              return <span>{title}</span>;
            })}
        </div>
        <div className="line"></div>
        <div className="table-info">
          {data.orderDetails &&
            data.orderDetails.map((item) => {
              return (
                <>
                  <div className="table-items">
                    <div className="product-img">
                      <img src={product} alt="" srcset="" />
                    </div>
                    <span>{item.name}</span>
                    <span>{item.prod_id}</span>
                    <span>{item.date}</span>
                    <span>{item.price}</span>
                    <span>{item.customName}</span>
                    <span>{item.qty}</span>
                    <span>{item.city}</span>
                    <div
                      className={`status ${
                        item.status === "In Stock"
                          ? "in-stock"
                          : item.status === "Out Stock"
                          ? "empty-stock"
                          : item.status === "Low Stock"
                          ? "low-stock"
                          : ""
                      }`}
                    >
                      <span>{item.status}</span>
                    </div>
                  </div>
                  <div className="line"></div>
                </>
              );
            })}
        </div>
      </div>
    </section>
  );
};
export default Table;
