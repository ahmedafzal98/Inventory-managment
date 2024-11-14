import "./Footer.css";
import logo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="addressDetail">
          <img src={logo} alt="" srcset="" />
          <div className="addressLocation">
            <svg
              width={20}
              aria-hidden="true"
              class="e-font-icon-svg e-fas-map-marker-alt"
              viewBox="0 0 384 512"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
            >
              <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
            </svg>
            <span>Your Address Here</span>
          </div>
          <div className="addressLocation">
            <svg
              width={20}
              fill="white"
              aria-hidden="true"
              class="e-font-icon-svg e-far-envelope"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
            </svg>
            <span>ptwbrad@gmail.com</span>
          </div>
          <div className="addressLocation">
            <svg
              width={20}
              fill="white"
              aria-hidden="true"
              class="e-font-icon-svg e-fas-phone-alt"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
            </svg>
            <span>+1 123 456 7890</span>
          </div>
          <div className="socialIconsFooter">
            <div className="whiteRoundCircle">
              <svg
                width={20}
                fill="#B700FF"
                class="e-font-icon-svg e-fab-x-twitter"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
              </svg>
            </div>
            <div className="whiteRoundCircle">
              <svg
                width={15}
                fill="#B700FF"
                class="e-font-icon-svg e-fab-facebook-f"
                viewBox="0 0 320 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
              </svg>
            </div>
            <div className="whiteRoundCircle">
              <svg
                width={20}
                fill="#B700FF"
                color="#B700FF"
                class="e-font-icon-svg e-fab-linkedin-in"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
              </svg>
            </div>
            <div className="whiteRoundCircle">
              <svg
                width={20}
                fill="#B700FF"
                class="e-font-icon-svg e-fab-youtube"
                viewBox="0 0 576 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="quickLinks">
          <span className="title"> Quick Links</span>
          <span className="content">Home</span>
          <span className="content">About</span>
          <span className="content">Product</span>
          <span className="content">Fundraising</span>
          <span className="content">Contact</span>
        </div>
        <div style={{ height: "40%" }} className="quickLinks">
          <span className="title">Customer Support </span>
          <span className="content">Track Order</span>
          <span className="content">Returns</span>
          <span className="content">Shipping Info</span>
        </div>
        <div className="signinUpdates">
          <span style={{ fontSize: 31, color: "#fff" }}>
            Sign up for updates
          </span>
          <input className="signinInput" type="email" placeholder="Email" />
          <button className="signinBtn">SUBMIT</button>
        </div>
      </div>
      <div className="footerBottom">
        <span>DESIGN & DEVELOP BY: FZHP © 2024</span>
        <img
          src="https://bradmartin.fzhpsolutions.com/wp-content/uploads/2024/10/paymet-1.png.png"
          alt=""
        />
      </div>
    </footer>
  );
};
export default Footer;
