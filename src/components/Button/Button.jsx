import "./Button.css";
const Button = ({ height: height, width, title, marginTop, borderRadius }) => {
  return (
    <div style={{}} className="button">
      <button
        style={{
          marginTop: marginTop,
          height: height,
          width: width,
          borderRadius: borderRadius,
        }}
      >
        {title}
      </button>
    </div>
  );
};
export default Button;
