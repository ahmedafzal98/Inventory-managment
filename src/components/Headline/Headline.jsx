import "../Headline/Headline.css";
const Headline = (props) => {
  return (
    <div className="headline">
      <span>{props.title}</span>
    </div>
  );
};
export default Headline;
