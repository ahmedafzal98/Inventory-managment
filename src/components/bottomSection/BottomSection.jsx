import Headline from "../Headline/Headline";
import "./BottomSection.css";

const BottomSection = () => {
  return (
    <section className="bottomSection">
      <Headline text="Fund Raising Has Never Been This Easy !!" />
      <div className="bottomSectionContainer">
        <div className="bottomSectionContent">
          <span className="title">Our Commitment</span>
          <span className="content">
            Great Products – Great Prices – Supporting Causes We only sell
            quality fireworks!! Enthusiasts will know these names!!
          </span>
        </div>
        <div className="bottomSectionContent">
          <span className="title">Priced Fairly</span>
          <span className="content">
            Unlike most fundraisers, we do not inflate pricing.
          </span>
        </div>
        <div className="bottomSectionContent">
          <span className="title">Fundraising With Fireworks</span>
          <span className="content">
            We want you to celebrate America, support a cause, but not break the
            bank. Our prices meet or beat most tents. You save and your cause
            wins!!
          </span>
        </div>
      </div>
    </section>
  );
};

export default BottomSection;
