import "../login/Login.css";
import logo from "../../../assets/logo.svg";
import facebookIcon from "../../../assets/Facebook.svg";
import google from "../../../assets/Google.svg";
import twitter from "../../../assets/Twitter.svg";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import {
  AccountCircle,
  LockRounded,
  Mail,
  PersonAddAlt1,
} from "@mui/icons-material";
const Signup = () => {
  return (
    <div className="login">
      <div className="login-container">
        <div className="login-content">
          <div className="login-logo">
            <img src={logo} alt="Logo" srcset="" />
          </div>
          <div className="login-card">
            <div className="login-heading">
              <span>SIGN UP</span>
            </div>
            <FormControl variant="standard" sx={{ width: "80%", mb: 2 }}>
              <InputLabel
                htmlFor="input-with-icon-adornment"
                sx={{ fontSize: 15, fontWeight: 400 }}
              >
                Email
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                placeholder="Type Your Email"
                startAdornment={
                  <InputAdornment position="start">
                    <Mail fontSize="medium" />
                  </InputAdornment>
                }
                sx={{
                  fontSize: "1.2rem", // Increase font size
                  height: "56px", // Set height
                }}
              />
            </FormControl>
            <FormControl variant="standard" sx={{ width: "80%", mb: 2 }}>
              <InputLabel
                htmlFor="input-with-icon-adornment"
                sx={{ fontSize: 15, fontWeight: 400 }}
              >
                Username
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                placeholder="Type Your Username"
                startAdornment={
                  <InputAdornment position="start">
                    <PersonAddAlt1 fontSize="medium" />
                  </InputAdornment>
                }
                sx={{
                  fontSize: "1.2rem", // Increase font size
                  height: "56px", // Set height
                }}
              />
            </FormControl>
            <FormControl variant="standard" sx={{ width: "80%", mb: 2 }}>
              <InputLabel
                htmlFor="input-with-icon-adornment"
                sx={{ fontSize: 15, fontWeight: 400 }}
              >
                Password
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                placeholder="Type Your Password"
                startAdornment={
                  <InputAdornment position="start">
                    <LockRounded fontSize="medium" />
                  </InputAdornment>
                }
                sx={{
                  fontSize: "1.2rem", // Increase font size
                  height: "56px", // Set height
                }}
              />

              <div className="loginBtn">
                <button className="login-btn">SIGNUP</button>
              </div>
              <span
                style={{
                  fontSize: 15,
                  textAlign: "center",
                  marginTop: "20px",
                  marginBottom: "20px",
                  color: "#525252",
                }}
              >
                Or Signup Using
              </span>
              <div className="socialIcons">
                <img src={facebookIcon} alt="Facebook " srcset="" />
                <img src={twitter} alt="Facebook " srcset="" />
                <img src={google} alt="Facebook " srcset="" />
              </div>
            </FormControl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
