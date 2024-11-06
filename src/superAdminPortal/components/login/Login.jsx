import "./Login.css";
import logo from "../../../assets/logo.svg";
import facebookIcon from "../../../assets/Facebook.svg";
import google from "../../../assets/Google.svg";
import twitter from "../../../assets/Twitter.svg";
import { signinWithEmailAndPassword } from "../../../firebase/AuthService";
import {
  Checkbox,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";

import * as Yup from "yup";
import { LockRounded, Password, PersonAddAlt1 } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/FirebaseConfig";

const Login = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is Required"),
    password: Yup.string().required("Password is Required"),
  });

  const formk = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,

    onSubmit: async (values) => {
      const { username, password } = values;

      try {
        const userDoc = await getDoc(doc(db, "users", username));

        if (userDoc.exists()) {
          const email = userDoc.data().email;

          await signinWithEmailAndPassword(email, password);
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div className="login">
      <div className="login-container">
        <div className="login-content">
          <div className="login-logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="login-card">
            <div className="login-heading">
              <span>LOGIN</span>
            </div>

            <form
              onSubmit={formk.handleSubmit}
              style={{ width: "100%", maxWidth: "400px", margin: "auto" }}
            >
              <FormControl
                variant="standard"
                sx={{ width: "80%", mb: 2 }}
                error={Boolean(formk.errors.username)}
              >
                <InputLabel
                  htmlFor="input-with-icon-adornment"
                  sx={{ fontSize: 15, fontWeight: 400 }}
                >
                  Username
                </InputLabel>
                <Input
                  id="input-with-icon-adornment"
                  placeholder="Type Your Username"
                  name="username"
                  onChange={formk.handleChange}
                  onBlur={formk.handleBlur}
                  value={formk.values.username}
                  startAdornment={
                    <InputAdornment position="start">
                      <PersonAddAlt1 fontSize="medium" />
                    </InputAdornment>
                  }
                  sx={{
                    fontSize: "1.2rem",
                    height: "56px",
                  }}
                />
                {formk.touched.username && formk.errors.username && (
                  <FormHelperText>{formk.errors.username}</FormHelperText>
                )}
              </FormControl>
              <FormControl
                variant="standard"
                sx={{ width: "80%", mb: 2 }}
                error={Boolean(formk.errors.password)}
              >
                <InputLabel
                  htmlFor="input-with-icon-adornment"
                  sx={{ fontSize: 15, fontWeight: 400 }}
                >
                  Password
                </InputLabel>
                <Input
                  id="input-with-icon-adornment"
                  placeholder="Type Your Password"
                  name="password"
                  startAdornment={
                    <InputAdornment position="start">
                      <LockRounded fontSize="medium" />
                    </InputAdornment>
                  }
                  sx={{
                    fontSize: "1.2rem",
                    height: "56px",
                  }}
                  onChange={formk.handleChange}
                  onBlur={formk.handleBlur}
                  value={formk.values.password}
                />
                {formk.touched.username && formk.errors.password && (
                  <FormHelperText>{formk.errors.password}</FormHelperText>
                )}
              </FormControl>
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

              <div className="loginBtn">
                <button type="submit" className="login-btn">
                  Sign In
                </button>
                <CircularProgress />
              </div>
            </form>
            <span
              style={{
                fontSize: 15,
                textAlign: "center",
                marginTop: "20px",
                marginBottom: "30px",
                color: "#525252",
              }}
            >
              Or SignUp Using
            </span>
            <div className="socialIcons">
              <img src={facebookIcon} alt="Facebook " />
              <img src={twitter} alt="Twitter " />
              <img src={google} alt="Google " />
            </div>

            {/* This text will stay at the bottom of the card */}

            <Link
              to="/signup"
              style={{
                textDecoration: "none", // Remove underline
                marginTop: "auto",
                marginBottom: "30px",
              }}
            >
              <span
                style={{
                  fontSize: 15,
                  textAlign: "center",
                  color: "#525252",
                }}
              >
                Or Signup
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
