import AddressIcon from "../../assets/addressIcon.svg";
import MobileIcon from "../../assets/mobileIcon.svg";
import TwitterIcon from "../../assets/twitterIcon.svg";
import FacebookIcon from "../../assets/facebookIcon.svg";
import InstaIcon from "../../assets/instaIcon.svg";
import LinkedInIcon from "../../assets/linkedInIcon.svg";
import pinterestIcon from "../../assets/pinterestIcon.svg";
import UpArrow from "../../assets/upArrow.svg";
import PaymentCard from "../../assets/paymetCard.png";
import "../footer/footer.css";
import EmailTextfield from "../emailTextfield/EmailTextfield";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="signup-container">
          <div className="signup">
            <div className="signup-offer">
              <span className="signup-heading">Sign up for offers</span>
              <span className="signup-detail">
                Sign up for our newsletter to receive <br /> exclusive offers &
                discounts!
              </span>
            </div>
            <div className="vr"></div>

            <EmailTextfield />
          </div>
        </div>
        <div className="footer-menu">
          <div className="footer-logo-section">
            <div className="footer-logo">
              <span>LOGO HERE</span>
            </div>
            <div className="query">
              <span>
                If you have any question, please <br /> contact us at
                <strong> ptwbrad@gmail.com</strong>
              </span>
            </div>
            <div className="address">
              <img src={AddressIcon} alt="Address Icon" srcSet="" />
              <span>Address</span>
            </div>
            <div className="mobile">
              <img src={MobileIcon} alt="MobileIcon" srcSet="" />
              <span>(+1)-000-000-0000</span>
            </div>
            <div className="socialIcons">
              <div className="round-circle">
                <img src={TwitterIcon} alt="Twitter Icon" srcSet="" />
              </div>
              <div className="round-circle">
                <img src={InstaIcon} alt="Insta Icon" srcSet="" />
              </div>
              <div className="round-circle">
                <img src={FacebookIcon} alt="Facebook Icon" srcSet="" />
              </div>
              <div className="round-circle">
                <img src={LinkedInIcon} alt="LinkedIn Icon" srcSet="" />
              </div>
              <div className="round-circle">
                <img src={pinterestIcon} alt="Pinterest Icon" srcSet="" />
              </div>
            </div>
          </div>

          <div className="footer-details">
            <div className="footer-corporate">
              <span>Corporate</span>

              <ul>
                <li>Home</li>
                <li>Product</li>
                <li>About</li>
                <li>Fundraising</li>
                <li>Apply Online</li>
                <li>Contact</li>
              </ul>
            </div>

            <div className="customer-service">
              <span>Customer Service</span>

              <ul>
                <li>Track Order</li>
                <li>Returns</li>
                <li>Shipping Info</li>
                <li>Recalls & Advisories</li>
                <li>Pet Store Locator</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div className="footer-products">
              <span>Products</span>

              <ul>
                <li>Round Shell</li>
                <li>Dazzling Colours</li>
                <li>Crackling Sound</li>
                <li>Color Fountains</li>
                <li>Bursting Golden</li>
                <li>Colorful Sparklers</li>
              </ul>
            </div>
            <div className="up-arrow">
              <div className="round-circle">
                <img src={UpArrow} alt="Up Arrow" srcSet="" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="hr"></div>
          <div className="footer-bottom-content">
            <div className="designer">DESIGN & DEVELOP BY: FZHP © 2024</div>
            <div className="payment-cards">
              <img src={PaymentCard} alt="Payment Card" srcSet="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
