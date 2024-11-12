import EnhancedTable from "../table/Table";
import "./LongCard.css";

const LongCards = ({
  salesTitle,
  productTitle,
  salesOverview,
  productOverview,
}) => {
  const title = salesTitle || productTitle;
  const overviewData = salesOverview || productOverview;
  return (
    <div className="long-card-container">
      <div className="long-card">
        <div className="card-title">
          <span>{title}</span>
        </div>
        <div className="cardContentContainer">
          {overviewData &&
            overviewData.map((item) => {
              return (
                <>
                  <div className="cardContent">
                    <div
                      style={{ backgroundColor: item.backgroundColor }}
                      className="cardIcon"
                    >
                      <img src={item.src} alt="Sales Icon" />
                    </div>
                    <div className="priceContent">
                      <span className="price">{item.price}</span>
                      <span className="content">{item.value}</span>
                    </div>
                  </div>
                  <div className="line">a</div>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default LongCards;
