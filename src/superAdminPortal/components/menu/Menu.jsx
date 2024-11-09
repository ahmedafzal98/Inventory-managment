import home from "../../../assets/home.svg";
import reports from "../../../assets/reports.svg";
import orders from "../../../assets/orders.svg";
import tracking from "../../../assets/tracking.svg";
import message from "../../../assets/message.svg";
import delievery from "../../../assets/delievery.svg";
import wallet from "../../../assets/wallet.svg";
import settings from "../../../assets/settings.svg";
import { Link, useLocation } from "react-router-dom";

import "./Menu.css";
import { useState } from "react";

const Menu = () => {
  const [selectedItem, setSelectedItem] = useState();
  const [showSubMenu, setShowSubMenu] = useState(false);
  const location = useLocation(); // Hook to get the current location

  const menu = [
    { title: "Dashboard", src: home, path: "/" },
    {
      title: "Inventory",
      src: reports,
      path: "/inventory/view-stock",
      subInventory: [
        { title: "Add Product", path: "/inventory/addProduct" },
        { title: "Product Managment", path: "/inventory/productManagement" },
        { title: "Order Managment", path: "/inventory/orderManagement" },
      ],
    },
    { title: "Orders / Invoice", src: orders, path: "/orders" },
    { title: "Sales", src: tracking, path: "/sales" },
  ];

  const handleMenuClick = (item) => {
    if (item.title === "Inventory") {
      setShowSubMenu((prev) => !prev); // Toggle submenu
    } else {
      setShowSubMenu(false); // Close submenu for other items
    }
    setSelectedItem(item.title);
  };

  const handleSubMenuClick = (subItem) => {
    setSelectedItem(subItem.title); // Update selected item for sub-menu
    // Do not close the submenu here
  };

  return (
    <section className="menu">
      {menu.map((item, index) => (
        <div key={index} className="menu-item-container">
          <Link
            onClick={() => handleMenuClick(item)}
            to={item.path}
            className="menu-item"
          >
            <img src={item.src} alt={item.title} />
            <span
              style={{
                fontWeight: selectedItem === item.title ? "bold" : "normal",
              }}
            >
              {item.title}
            </span>
          </Link>
          {item.title === "Inventory" && showSubMenu && (
            <ul className={`submenu ${showSubMenu ? "show" : ""}`}>
              {item.subInventory.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <Link
                    className="sub-menu-item"
                    onClick={() => handleSubMenuClick(subItem)} // Handle sub-item click
                    to={subItem.path}
                  >
                    {subItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
};

export default Menu;
