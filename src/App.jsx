import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./Pages/Home";
import Product from "./Pages/Product";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
