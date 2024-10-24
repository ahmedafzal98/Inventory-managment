import "../SingleFirework/SingleFirework.css";
import Bursting from "../../images/bursting.png";
const SingleFirework = () => {
  return (
    <div className="fireworks">
      <div className="fireworks-img">
        <img src={Bursting} alt="Bursting" srcset="" />
      </div>

      <div className="firework-span">
        <span>Bursting Golden</span>
      </div>
    </div>
  );
};
export default SingleFirework;
