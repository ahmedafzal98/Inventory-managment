import "../Headline/Headline.css";
const Headline = ({ text }) => {
  return (
    <div className="headline">
      <span>{text}</span>
    </div>
  );
};
export default Headline;
