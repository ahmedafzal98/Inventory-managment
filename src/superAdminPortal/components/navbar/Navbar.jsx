import "./Navbar.css";
import searchIcon from "../../../assets/search-Icon-white.svg";
import mailIcon from "../../../assets/mail-Icon.svg";
import notificationIcon from "../../../assets/notification-Icon.svg";
import infoIcon from "../../../assets/info-Icon.svg";
import logo from "../../../assets/logo.svg";
import Title from "../portalTitle/Title";
import { Link } from "react-router-dom";
const Navbar = ({ navText }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-title">
            <div className="navbar-title-logo">
              <img src={logo} alt="" srcSet="" />
              <Title title={navText} />
            </div>
          </div>
          <div className="right-part">
            <div className="search-box">
              <input type="text" placeholder="Search" />
              <div className="search-icon">
                <img src={searchIcon} alt="Search Icon" srcSet="" />
              </div>
            </div>
            <div className="social-icons">
              <img src={notificationIcon} alt="notification Icon" srcset="" />
              <img src={mailIcon} alt="Mail Icon" srcset="" />
              <img src={infoIcon} alt="Info Icon" srcset="" />
            </div>
            <div className="vr">a</div>
            <div className="logo">
              <Link to="/login">
                <img src={logo} alt="Logo" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
