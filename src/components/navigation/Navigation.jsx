import "../navigation/Navigation.css";
import SearchIcon from "../../assets/search-Icon.svg";
import CartBadgeIcon from "../../assets/cart-badge-Icon.svg";
const Navigation = () => {
  const menuItems = [
    "Home",
    "Product",
    "About",
    "Fundraising",
    "Apply Online",
    "Contact",
  ];

  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <div className="logo">
          <span>LOGO HERE</span>
        </div>
        <div className="nav-items">
          {menuItems.map((item) => {
            return <span>{item}</span>;
          })}
        </div>
        <div className="nav-icons">
          <img src={SearchIcon} alt="Search Icon" srcset="" />
          <img src={CartBadgeIcon} alt="Cart Badge Icon" srcset="" />
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
