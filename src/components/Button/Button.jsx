import "./Button.css";
const Button = (props) => {
  return (
    <div className="button">
      <button>{props.title}</button>
    </div>
  );
};
export default Button;
