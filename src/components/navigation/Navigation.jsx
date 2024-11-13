import "../navigation/Navigation.css";
import SearchIcon from "../../assets/search-Icon.svg";
import CartBadgeIcon from "../../assets/cart-badge-icon.svg";
import logo from "../../assets/logo.svg";
import { ShoppingBag } from "@mui/icons-material";
import Button from "../Button/Button";
const Navigation = () => {
  const menuItems = ["Home", "About", "Products"];

  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <div className="nav-content">
          <div className="logo">
            <img src={logo} alt="" srcset="" />
          </div>
          <div className="nav-items">
            {menuItems.map((item, index) => {
              return <span key={index}>{item}</span>;
            })}
          </div>
          <div className="track-order">
            <ShoppingBag />
            <Button height="50px" width="200px" title="Track Orders" />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
