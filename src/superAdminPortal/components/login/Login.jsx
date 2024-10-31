import "./Login.css";
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
import { AccountCircle } from "@mui/icons-material";
const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <div className="login-content">
          <div className="login-logo">
            <img src={logo} alt="Logo" srcset="" />
          </div>
          <div className="login-card">
            <div className="heading">
              <span>LOGIN</span>
            </div>
            <FormControl
              variant="standard"
              sx={{ width: "80%", mb: 2, marginTop: "40px" }}
            >
              <InputLabel
                htmlFor="input-with-icon-adornment"
                sx={{ fontSize: "1.2rem" }}
              >
                Username
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle fontSize="large" />
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
                sx={{ fontSize: "1.2rem" }}
              >
                Password
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle fontSize="large" />
                  </InputAdornment>
                }
                sx={{
                  fontSize: "1.2rem", // Increase font size
                  height: "56px", // Set height
                }}
              />
              <div className="remeber">
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked
                      sx={{
                        color: "#878C90",
                        "&.Mui-checked": { color: "#878C90" },
                      }}
                    />
                  }
                  label={<span style={{ color: "#878C90" }}>Remember Me</span>}
                />

                <span>Forget Password</span>
              </div>

              <button className="login-btn">SIGNIN</button>
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

export default Login;
