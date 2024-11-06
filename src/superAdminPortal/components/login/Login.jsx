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
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../../firebase/FirebaseConfig";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { openSnakbar } from "../../../store/SnackbarSlice";
import { getUserId } from "../../../store/UserSlice";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        setIsLoading(true);

        const usersQuery = query(
          collection(db, "users"),
          where("username", "==", username)
        );

        const querySnapshot = await getDocs(usersQuery);

        if (!querySnapshot.empty) {
          const userDoc = querySnapshot.docs[0];

          const email = userDoc.data().email;

          const userCredential = await signinWithEmailAndPassword(
            email,
            password
          );
          const user = userCredential.user;
          const uid = user.uid;

          localStorage.setItem("uid", uid);
          dispatchUserId(uid);
          dispatchSnackBar("Logged in successfully!", "success");

          setIsLoading(false);
          navigate("/");
        } else {
          setIsLoading(false);
          dispatchSnackBar("This Username Does not exist", "error");
        }
      } catch (error) {
        setIsLoading(false);
        dispatchSnackBar(getFirebaseErrorMessage(error.code), "error");
      }
    },
  });

  const dispatchUserId = (id) => {
    dispatch(
      getUserId({
        uid: id,
      })
    );
  };
  const dispatchSnackBar = (message, type) => {
    dispatch(
      openSnakbar({
        message: message,
        severity: type,
      })
    );
  };
  const getFirebaseErrorMessage = (code) => {
    switch (code) {
      case "auth/user-not-found":
        return "No user found with this email address.";
      case "auth/wrong-password":
        return "Incorrect password. Please try again.";
      case "auth/email-already-in-use":
        return "This email is already associated with an account.";
      case "auth/weak-password":
        return "Password should be at least 6 characters.";
      case "auth/invalid-email":
        return "The email address is not valid.";
      case "auth/invalid-credential":
        return "Invalid credential. Please check your login information.";
      default:
        return "An unexpected error occurred. Please try again.";
    }
  };

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
                {isLoading ? (
                  <CircularProgress />
                ) : (
                  <button type="submit" className="login-btn">
                    Sign In
                  </button>
                )}
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
