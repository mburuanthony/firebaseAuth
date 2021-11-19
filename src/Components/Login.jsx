import { useRef } from "react";
import { Box } from "@mui/material";
import Input from "./Input";
import ButtonComponent from "./ButtonComponent";
import SignInIcon from "@mui/icons-material/LoginRounded";
import Oauth from "./Oauth";
import { Link } from "react-router-dom";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <Box
      width="25%"
      minWidth="20rem"
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
        ref={emailRef}
        inputType="email"
        placeholder="Email"
        onChangefunc={() => emailRef.current.setInputValue()}
      />

      <Input
        ref={passwordRef}
        inputType="password"
        placeholder="Password"
        onChangefunc={() => passwordRef.current.setInputValue()}
      />

      <ButtonComponent
        displayText="Sign In"
        displayIcon={<SignInIcon />}
        onClickFunc={() => console.log("Signing in....")}
      />
      <p style={{ margin: "10px auto", textDecoration: "underline" }}>
        Sign in with
      </p>
      <Oauth />
      <Link to="/signup" style={{ margin: "0 auto" }}>
        Do not have an account ? Signup
      </Link>
    </Box>
  );
}

export default Login;
