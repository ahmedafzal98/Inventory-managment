import Banner from "../components/banner/banner";
import BottomSection from "../components/bottomSection/BottomSection";
import Footer from "../components/footer/Footer";
import Fundraising from "../components/fundraisingBanner/Fundraising";
import Navigation from "../components/navigation/Navigation";
import Partners from "../components/partners/Partners";
import SellingFireworks from "../components/sellingFireworks/SellingFireworks";
import WorkBanner from "../components/worksBanner/WorkBanner";
import Contact from "../contact/Contact";

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
        <BottomSection />
      </main>
      <Contact />
      <Footer />
    </>
  );
};
export default Home;
