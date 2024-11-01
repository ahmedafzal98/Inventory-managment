import { Route, Router, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import ViewStock from "../components/viewStock/ViewStock";
import AddProduct from "../components/addProduct/AddProduct";
import EditRemoveProduct from "../components/editRemoveProduct/EditRemoveProduct";
import Price from "../components/price/price";
import "../../App.css";
import Dashboard from "../components/main/Main";
import ProductManagment from "../productManagment/ProductManagment";
import OrderManagment from "../components/orderManagment/OrderManagment";
import Login from "../components/login/Login";

const MainRoute = () => {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Sidebar />

        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inventory/view-stock" element={<ViewStock />} />
          <Route path="/inventory/addProduct" element={<AddProduct />} />
          <Route
            path="/inventory/productManagment"
            element={<ProductManagment />}
          />
          <Route
            path="/inventory/orderManagment"
            element={<OrderManagment />}
          />

          <Route
            path="/inventory/edit-remove"
            element={<EditRemoveProduct />}
          />
          <Route path="/inventory/price" element={<Price />} />
        </Routes>
      </div>
    </>
  );
};
export default MainRoute;
