import Button from "../Button/Button";
import "./WorkBanner.css";
const WorkBanner = () => {
  return (
    <div className="workBanner">
      <div className="question">
        <span className="question-text">HOW IT WORKS ?</span>
        <div className="points">
          <span>• Make your firework selections.</span>
          <span>
            • At checkout select your organization (or your pickup location for
            Razorback NIL).
          </span>
          <span>
            • Your organization will receive 20% of your purchase. Spend $200
            and your <br /> organization receives $40.
          </span>
          <span>
            • Fireworks will be delivered to organizations in late June.
          </span>
        </div>
        <Button title="Get Started" width={190} height={50} marginTop={20} />
      </div>
    </div>
  );
};

export default WorkBanner;
