import "../SingleFirework/SingleFirework.css";
const SingleFirework = (props) => {
  return (
    <div className="fireworks">
      <div className="fireworks-img">
        <img src={props.src} alt="Bursting" srcSet="" />
      </div>

      <div className="firework-span">
        <span>{props.title}</span>
      </div>
    </div>
  );
};
export default SingleFirework;
