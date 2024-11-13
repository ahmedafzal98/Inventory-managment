import Headline from "../Headline/Headline";
import "./Partners.css";
const Partners = () => {
  return (
    <section className="partners">
      <Headline text="Our Partners In Fundraising " fontsize={40} />
      <div className="partner-logos">
        <img
          src="https://bradmartin.fzhpsolutions.com/wp-content/uploads/2024/10/Group-80.png"
          alt="Partner Logo 1"
          srcSet=""
        />
      </div>
    </section>
  );
};
export default Partners;
