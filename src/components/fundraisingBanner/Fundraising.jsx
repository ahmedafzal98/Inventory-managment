import "./Fundraising.css";
import spark from "../../images/spark.png";
import purple_bg from "../../images/purple-bg.png";
const Fundraising = () => {
  return (
    <section className="firework_bg">
      <img
        className="purple-bg"
        src={purple_bg}
        alt="Firework Background"
        srcSet=""
      />
      <img className="spark" src={spark} alt="Spark" srcSet="" />
      <span className="text-overlay">
        Fundraising Has Never <br /> Been So Easy{" "}
        <span className="para-text">
          Lorem ipsum dolor sit amet, co nsectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper <br /> mattis, pulvinar dapibus leo.
        </span>{" "}
      </span>
    </section>
  );
};
export default Fundraising;
