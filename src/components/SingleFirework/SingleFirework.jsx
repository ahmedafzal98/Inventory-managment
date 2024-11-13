import Button from "../Button/Button";
import "../SingleFirework/SingleFirework.css";
const SingleFirework = (props) => {
  return (
    <div className="fireworks">
      <div className="fireworks-img">
        <div className="discounts">
          <Button width={50} height={25} title="-11%" />
          <Button width={50} height={25} title="Hot" />
        </div>
        <img src={props.src} alt="Bursting" srcSet="" />
      </div>

      <div className="firework-span">
        <span className="productName">{props.title}</span>
        <span className="productStock">
          Stock{" "}
          <span style={{ color: "#B700FF", fontSize: 20 }}>{props.stock}</span>{" "}
        </span>
      </div>
    </div>
  );
};
export default SingleFirework;
