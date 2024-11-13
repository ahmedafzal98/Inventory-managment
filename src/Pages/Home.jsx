import Banner from "../components/banner/banner";
import Footer from "../components/footer/Footer";
import Fundraising from "../components/fundraisingBanner/Fundraising";
import Navigation from "../components/navigation/Navigation";
import Partners from "../components/partners/Partners";
import SellingFireworks from "../components/sellingFireworks/SellingFireworks";
import WorkBanner from "../components/worksBanner/WorkBanner";

const Home = () => {
  return (
    <>
      <Navigation />

      <main style={{ backgroundColor: "#D8F7FF" }}>
        <Banner />
        {/* <SupportBanner /> */}
        <Partners />
        <Fundraising />
        <SellingFireworks />
        {/* <Products /> */}
        <WorkBanner />
        {/* <Footer /> */}
      </main>
    </>
  );
};
export default Home;
