import "./Table.css";
import product from "../../../images/bursting.png";
import data from "../../../data/data";
import { Check, Delete, Edit } from "@mui/icons-material";
const Table = ({ titles, info }) => {
  return (
    <section className="table">
      <div className="table-container">
        <div className="table-title">
          {titles &&
            titles.map((title) => {
              return <span>{title}</span>;
            })}
        </div>
        <div className="line"></div>
        <div className="table-info">
          {info &&
            info.map((item) => {
              return (
                <>
                  <div className="table-items">
                    <div className="product-img">
                      <img src={product} alt="" srcset="" />
                    </div>
                    <span>{item.name}</span>
                    <span>{item.prod_id}</span>
                    <span>{item.organization}</span>
                    <span>{item.date}</span>
                    <span>{item.price}</span>
                    <span>{item.qty}</span>
                    <span>{item.supplier}</span>
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
                    <div className="icons">
                      <Check
                        sx={{ display: "none" }}
                        fontSize="medium"
                        onClick={() => HandleEdit(index)}
                      />
                      <Edit
                        fontSize="medium"
                        // onClick={() => HandleEdit(index)}
                      />
                      {/* <img src={deleteIcon} alt="Delete Icon" srcset="" /> */}
                      <Delete
                        fontSize="medium"
                        // onClick={() => HandleDelete(index)}
                      />
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
