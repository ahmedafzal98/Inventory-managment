import Headline from "../Headline/Headline";
import "./Partners.css";
import partner_logo_1 from "../../images/partner-logo-1.png";
import partner_logo_2 from "../../images/partner-logo-2.png";
import partner_logo_3 from "../../images/partner-logo-3.png";
import partner_logo_4 from "../../images/partner-logo-4.png";
import partner_logo_5 from "../../images/partner-logo-5.png";
const Partners = () => {
  return (
    <section className="partners">
      <Headline title="Our Partners In Fundraising " />
      <div className="partner-logos">
        <img src={partner_logo_1} alt="Partner Logo 1" srcSet="" />
        <img src={partner_logo_2} alt="Partner Logo 2" srcSet="" />
        <img src={partner_logo_3} alt="Partner Logo 3" srcSet="" />
        <img src={partner_logo_4} alt="Partner Logo 4" srcSet="" />
        <img src={partner_logo_5} alt="Partner Logo 5" srcSet="" />
      </div>
    </section>
  );
};
export default Partners;
