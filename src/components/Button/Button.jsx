import "./Button.css";
const Button = ({ height: height, width, title, marginTop }) => {
  return (
    <div style={{}} className="button">
      <button style={{ marginTop: marginTop, height: height, width: width }}>
        {title}
      </button>
    </div>
  );
};
export default Button;
