import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import "./CardContainer.css";
const CardContainer = () => {
  const info = [
    {
      title: "Oders",
      src: <ListAltOutlinedIcon fontSize="large" sx={{ color: "white" }} />,
      price: 550,
    },
    {
      title: "Organization",
      src: <ApartmentOutlinedIcon fontSize="large" sx={{ color: "white" }} />,
      price: 10,
    },
    {
      title: "Inventory",
      src: <Inventory2OutlinedIcon fontSize="large" sx={{ color: "white" }} />,
      price: 50,
    },
  ];
  return (
    <div className="card-container">
      {info &&
        info.map((item) => {
          return (
            <div className="card">
              <div className="card-content">
                <div className="card-detail">
                  <div className="card-title">
                    <span>{item.title}</span>
                  </div>
                  <div className="card-price">
                    <span>{item.price}</span>
                  </div>
                </div>
                <div className="card-icon">{item.src}</div>
              </div>
              <div className="card-bottom">
                <span>More Info</span>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CardContainer;
