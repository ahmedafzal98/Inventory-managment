import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Product from "./Pages/Product";
import Dashboard from "./superAdminPortal/Pages/Dashboard/Dasboard";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
