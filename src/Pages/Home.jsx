import Banner from "../components/banner/banner";
import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";
import Products from "../components/products/products";
import SellingFireworks from "../components/sellingFireworks/SellingFireworks";

const Home = () => {
  return (
    <>
      <Navigation />

      <main style={{ backgroundColor: "#D8F7FF" }}>
        <Banner />
        <SellingFireworks />
        <Products />
        <Footer />
      </main>
    </>
  );
};
export default Home;
