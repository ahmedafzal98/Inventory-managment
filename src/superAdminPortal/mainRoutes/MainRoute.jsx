import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import ViewStock from "../components/viewStock/ViewStock";
import AddProduct from "../components/addProduct/AddProduct";
import EditRemoveProduct from "../components/editRemoveProduct/EditRemoveProduct";
import Price from "../components/price/price";
import "../../App.css";
import Dashboard from "../components/main/Main";
import OrderManagement from "../components/orderManagment/OrderManagment";
import Login from "../components/login/Login";
import { useEffect, useState } from "react";
import ProductManagment from "../components/productManagment/ProductManagment";
import Sales from "../components/sales/Sales";

const MainRoute = () => {
  const [navText, setNavText] = useState("Dashboard"); // Default navbar text
  const location = useLocation(); // To get current path

  // Function to set navbar text based on current route
  const updateNavText = () => {
    switch (location.pathname) {
      case "/":
        setNavText("Dashboard");
        break;
      case "/inventory/view-stock":
        setNavText("View Stock");
        break;
      case "/inventory/addProduct":
        setNavText("Add Product");
        break;
      case "/inventory/productManagement":
        setNavText("Product Management");
        break;
      case "/inventory/orderManagement":
        setNavText("Order Management");
        break;
      case "/inventory/edit-remove":
        setNavText("Edit/Remove Product");
        break;
      case "/inventory/price":
        setNavText("Price Management");
        break;
      case "/login":
        setNavText("Login");
        break;
      case "/sales":
        setNavText("Sales");
        break;
      default:
        setNavText("Dashboard");
        break;
    }
  };

  // Update navbar text whenever the route changes
  useEffect(() => {
    updateNavText();
  }, [location.pathname]);

  return (
    <>
      <Navbar navText={navText} />
      <div className="main-content">
        <Sidebar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/inventory/view-stock" element={<ViewStock />} />
          <Route path="/inventory/addProduct" element={<AddProduct />} />
          <Route
            path="/inventory/productManagement"
            element={<ProductManagment />}
          />
          <Route
            path="/inventory/orderManagement"
            element={<OrderManagement />}
          />
          <Route
            path="/inventory/edit-remove"
            element={<EditRemoveProduct />}
          />
          <Route path="/inventory/price" element={<Price />} />
          <Route path="/sales" element={<Sales />} />
        </Routes>
      </div>
    </>
  );
};

export default MainRoute;
