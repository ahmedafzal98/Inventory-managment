import Banner from "../components/banner/banner";
import Footer from "../components/footer/Footer";
import Fundraising from "../components/fundraisingBanner/Fundraising";
import Navigation from "../components/navigation/Navigation";
import Partners from "../components/partners/Partners";
import SellingFireworks from "../components/sellingFireworks/SellingFireworks";

const Home = () => {
  return (
    <>
      <Navigation />

      <main style={{ backgroundColor: "#D8F7FF" }}>
        <Banner />
        <Partners />
        <Fundraising />
        <SellingFireworks />
        {/* <Products /> */}
        <Footer />
      </main>
    </>
  );
};
export default Home;
