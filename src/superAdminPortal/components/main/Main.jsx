import "./Main.css";
import cart from "../../../assets/cart-white-icon.svg";
import sales from "../../../assets/sales-white-icon.svg";
import inventory from "../../../assets/inventory-white-icon.png";
import Chart from "../charts/Chart";
import RecentOrders from "../recentOrders/RecentOrders";

const Main = () => {
  const info = [
    { title: "Reparation", src: cart, price: 550 },
    { title: "Client", src: sales, price: 220 },
    { title: "Inventory Product", src: inventory, price: 50 },
  ];
  return (
    <main className="dashboard">
      <div className="card-container">
        {info &&
          info.map((item) => {
            return (
              <div className="card">
                <div className="card-content">
                  <div className="card-detail">
                    <div className="card-title">
                      <span>{item.title}</span>
                    </div>
                    <div className="card-price">
                      <span>{item.price}</span>
                    </div>
                  </div>
                  <div className="card-icon">
                    <img src={item.src} alt="Cart" srcSet="" />
                  </div>
                </div>
                <div className="card-bottom">
                  <span>More Info</span>
                </div>
              </div>
            );
          })}
      </div>
      <Chart />
      <RecentOrders />
    </main>
  );
};
export default Main;
