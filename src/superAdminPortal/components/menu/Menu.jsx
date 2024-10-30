import home from "../../../assets/home.svg";
import reports from "../../../assets/reports.svg";
import orders from "../../../assets/orders.svg";
import tracking from "../../../assets/tracking.svg";
import message from "../../../assets/message.svg";
import delievery from "../../../assets/delievery.svg";
import wallet from "../../../assets/wallet.svg";
import settings from "../../../assets/settings.svg";

import "./Menu.css";
const Menu = () => {
  const menu = [
    { title: "Dashboard", src: home },
    { title: "Inventory Qty", src: reports },
    { title: "Orders / Invoice", src: orders },
    { title: "Tracking", src: tracking },
    { title: "Tracking Status ", src: reports },
    { title: "Email Updates", src: message },
    { title: "Delivery Confirmation", src: delievery },
    { title: "Tax", src: reports },
    { title: "Wallet", src: wallet },
    { title: "Settings", src: settings },
  ];

  return (
    <section className="menu">
      {menu.map((item) => {
        return (
          <div className="menu-item">
            <img src={item.src} alt="Home" srcSet="" />
            <span>{item.title}</span>
          </div>
        );
      })}
    </section>
  );
};
export default Menu;
