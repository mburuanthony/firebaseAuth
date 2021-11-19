import { useRef } from "react";
import { Box } from "@mui/material";
import Input from "./Input";
import ButtonComponent from "./ButtonComponent";
import SignupIcon from "@mui/icons-material/ArrowRightAltRounded";
import GoogleSignIn from "./GoogleSignIn";
import { Link } from "react-router-dom";

function Signup() {
  const emailRef = useRef();
  const passwordref = useRef();
  const passwordConfRef = useRef();

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
      <h3>Sign Up</h3>
      <Input
        ref={emailRef}
        type="email"
        placeholder="Email"
        onChangefunc={() => emailRef.current.setInputValue()}
      />
      <Input
        ref={passwordref}
        type="password"
        placeholder="Password"
        onChangefunc={() => emailRef.current.setInputValue()}
      />
      <Input
        ref={passwordConfRef}
        type="password"
        placeholder="Confirm Password"
        onChangefunc={() => emailRef.current.setInputValue()}
      />
      <ButtonComponent
        displayText="Sign Up"
        displayIcon={<SignupIcon />}
        onClickFunc={() => console.log("Signing Up....")}
      />
      <Link to="/" style={{ margin: "0 auto" }}>
        Already have an account ? Sign In
      </Link>
      <GoogleSignIn />
    </Box>
  );
}

export default Signup;
