import "../emailTextfield/EmailTextfield.css";
import MailIcon from "../../assets/mailIcon.svg";
const EmailTextfield = () => {
  return (
    <div className="email-textfield">
      <input type="email" placeholder="Your email address" />
      <div className="button">
        <button>
          <img src={MailIcon} alt="Mail Icon" srcSet="" />
        </button>
      </div>
    </div>
  );
};
export default EmailTextfield;
