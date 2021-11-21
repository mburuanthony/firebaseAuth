import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Input from "../Input";
import ButtonComponent from "../ButtonComponent";
import SignupIcon from "@mui/icons-material/ArrowRightAltRounded";
import Oauth from "./Oauth";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

function Signup() {
  const history = useHistory();
  const { signUp } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");

  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [isDisabled, setisDisabled] = useState(false);

  useEffect(() => {
    email === "" || password === "" || passwordConf === ""
      ? setisDisabled(true)
      : setisDisabled(false);
  }, [email, password, passwordConf]);

  async function SignUpFunc() {
    // regular expression email validation
    !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email) || !email
      ? setEmailError(true)
      : setEmailError(false);
    if (password.length < 6) {
      setError(true);
      setErrorMsg("Password entered is too short");
    } else if (password !== passwordConf) {
      setError(true);
      setErrorMsg("Passwords do not match");
    } else {
      // reset errors
      setError(false);
      setErrorMsg(null);
      // create user
      try {
        await signUp({ email, password });
        history.pushState("/");
      } catch (e) {
        setErrorMsg("Failed to create account");
        console.log(e);
      }
    }
  }

  return (
    <Box
      width="25%"
      minWidth="22rem"
      display="flex"
      flexDirection="column"
      margin="2rem auto"
      padding="12px"
      border="0"
      borderRadius="8px"
      boxShadow="0px 2px 4px rgba(0, 0, 0, 0.15)"
    >
      <h3>Sign Up</h3>
      <Input
        inputType="email"
        placeholder="Email"
        inputVal={email}
        onChangefunc={(e) => setEmail(e.target.value)}
      />
      {emailError && (
        <span style={{ color: "red", fontSize: "14px" }}>
          Enter a valid email
        </span>
      )}
      <Input
        inputType="password"
        placeholder="Password"
        inputVal={password}
        onChangefunc={(e) => setPassword(e.target.value)}
        inputError={error}
      />
      <Input
        inputType="password"
        placeholder="Confirm Password"
        inputVal={passwordConf}
        onChangefunc={(e) => setPasswordConf(e.target.value)}
        inputError={error}
      />
      {errorMsg && (
        <span style={{ color: "red", fontSize: "14px" }}>{errorMsg}</span>
      )}
      <ButtonComponent
        displayText="Sign Up"
        displayIcon={<SignupIcon />}
        onClickFunc={SignUpFunc}
        isDisabled={isDisabled}
      />
      <p style={{ margin: "10px auto", textDecoration: "underline" }}>
        Sign in with
      </p>
      <Oauth />
      <Link to="/login" style={{ margin: "0 auto" }}>
        Already have an account ? Sign In
      </Link>
    </Box>
  );
}

export default Signup;
