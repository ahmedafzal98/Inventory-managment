import "../login/Login.css";
import logo from "../../../assets/logo.svg";
import facebookIcon from "../../../assets/Facebook.svg";
import * as Yup from "yup";
import google from "../../../assets/Google.svg";
import twitter from "../../../assets/Twitter.svg";
import { signupWithEmailAndPassword } from "../../../firebase/AuthService";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../../firebase/FirebaseConfig";

import {
  FormControl,
  FormHelperText,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { LockRounded, Mail, PersonAddAlt1 } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { openSnakbar } from "../../../store/SnackbarSlice";
import CustomSnackbar from "../snackbar/Snackbar";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Enter a valid Email")
      .required("Email is Required"),
    username: Yup.string().required("Username is Required"),
    password: Yup.string()
      .min(3, "Password should be more than 3 charachters")
      .required("Password is Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const { username, email, password } = values;

      try {
        const userCredential = await signupWithEmailAndPassword(
          email,
          password
        );
        // const uid = userCredential.uid;

        await setDoc(doc(db, "users", username), {
          username,
          email,
          createdAt: new Date(),
        });

        dispatch(
          openSnakbar({
            message: "You have successfully registered!",
            severity: "success",
          })
        );
      } catch (error) {
        dispatch(
          openSnakbar({ message: "Error signing up", severity: "error" })
        );
      }
    },
  });

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-content">
          <div className="login-logo">
            <img src={logo} alt="Logo" srcSet="" />
          </div>
          <div className="login-card">
            <div className="login-heading">
              <span>SignUp</span>
            </div>
            <form
              onSubmit={formik.handleSubmit}
              style={{ width: "100%", maxWidth: "400px", margin: "auto" }}
            >
              <FormControl
                variant="standard"
                sx={{ width: "80%", mb: 2 }}
                error={Boolean(formik.errors.email)}
              >
                <InputLabel
                  htmlFor="input-with-icon-adornment"
                  sx={{ fontSize: 15, fontWeight: 400 }}
                >
                  Email
                </InputLabel>

                <Input
                  id="input-with-icon-adornment"
                  placeholder="Type Your Email"
                  name="email"
                  startAdornment={
                    <InputAdornment position="start">
                      <Mail fontSize="medium" />
                    </InputAdornment>
                  }
                  sx={{
                    fontSize: "1.2rem", // Increase font size
                    height: "56px", // Set height
                  }}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <FormHelperText>{formik.errors.email}</FormHelperText>
                )}
              </FormControl>
              <FormControl
                variant="standard"
                sx={{ width: "80%", mb: 2 }}
                error={Boolean(formik.errors.username)}
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
                  startAdornment={
                    <InputAdornment position="start">
                      <PersonAddAlt1 fontSize="medium" />
                    </InputAdornment>
                  }
                  sx={{
                    fontSize: "1.2rem", // Increase font size
                    height: "56px", // Set height
                  }}
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.username && formik.errors.username && (
                  <FormHelperText>{formik.errors.username}</FormHelperText>
                )}
              </FormControl>
              <FormControl
                variant="standard"
                sx={{ width: "80%", mb: 2 }}
                error={Boolean(formik.errors.password)}
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
                    fontSize: "1.2rem", // Increase font size
                    height: "56px", // Set height
                  }}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password && (
                  <FormHelperText>{formik.errors.password}</FormHelperText>
                )}
              </FormControl>

              <div className="loginBtn">
                <button type="submit">SignUp</button>
              </div>
            </form>

            <CustomSnackbar />
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
              <img src={facebookIcon} alt="Facebook " srcSet="" />
              <img src={twitter} alt="Facebook " srcSet="" />
              <img src={google} alt="Facebook " srcSet="" />
            </div>
            <Link
              to="/login"
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
                Or Signin
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
