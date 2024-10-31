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
    { title: "Dashboard", src: home, path: "/dashboard" },
    {
      title: "Inventory Qty",
      src: reports,
      path: "/inventory/view-stock",
      subInventory: [
        { title: "View Stock", path: "/inventory/view-stock" },
        { title: "Add Product", path: "/inventory/addProduct" },
        { title: "Remove / Edit", path: "/inventory/edit-remove" },
        { title: "Price", path: "/inventory/price" },
        { title: "Product", path: "/inventory/product" },
        { title: "In/Out", path: "/inventory/in-out" },
        { title: "Account", path: "/inventory/account" },
      ],
    },
    { title: "Orders / Invoice", src: orders, path: "/orders" },
    { title: "Tracking", src: tracking, path: "/tracking" },
    { title: "Tracking Status", src: reports, path: "/tracking-status" },
    { title: "Email Updates", src: message, path: "/email-updates" },
    {
      title: "Delivery Confirmation",
      src: delievery,
      path: "/delivery-confirmation",
    },
    { title: "Tax", src: reports, path: "/tax" },
    { title: "Wallet", src: wallet, path: "/wallet" },
    { title: "Settings", src: settings, path: "/settings" },
  ];

  const handleMenuClick = (item) => {
    if (item.title === "Inventory Qty") {
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
          {item.title === "Inventory Qty" && showSubMenu && (
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
