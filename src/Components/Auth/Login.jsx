import { useState } from "react";
import { Box } from "@mui/material";
import Input from "../Input";
import ButtonComponent from "../ButtonComponent";
import SignInIcon from "@mui/icons-material/LoginRounded";
import Oauth from "./Oauth";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { useSnackBar } from "../../Context/snackBarContext";

function Login() {
  const history = useHistory();
  const { signIn } = useAuth();

  const { setSnackOpen, setSnackMessage } = useSnackBar();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function LoginFunc() {
    if (email === "" || password === "") {
      setSnackOpen(true);
      setSnackMessage("Unable to Sign In");
    } else {
      try {
        await signIn({ email, password });
        history.push("/");
        setSnackOpen(true);
        setSnackMessage("You were Signed In");
      } catch {
        setSnackOpen(true);
        setSnackMessage("Unable to Sign In");
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
      <h3>Sign In</h3>
      <Input
        inputType="email"
        placeholder="Email"
        inputVal={email}
        onChangefunc={(e) => setEmail(e.target.value)}
      />

      <Input
        inputType="password"
        placeholder="Password"
        inputVal={password}
        onChangefunc={(e) => setPassword(e.target.value)}
      />

      <ButtonComponent
        displayText="Sign In"
        displayIcon={<SignInIcon />}
        onClickFunc={LoginFunc}
      />
      <p style={{ margin: "10px auto", textDecoration: "underline" }}>
        Sign in with
      </p>
      <Oauth />
      <Link to="/signup" style={{ margin: "0 auto" }}>
        Do not have an account ? Sign Up
      </Link>
      <br />
      <Link to="/forgot-password" style={{ margin: "0 auto" }}>
        Forgot Password ? Reset here
      </Link>
    </Box>
  );
}

export default Login;
