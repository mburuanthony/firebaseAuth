import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { SignInWithGoogle } from "../Firebase/googleAuth";

function GoogleSignIn() {
  return (
    <Button onClick={() => SignInWithGoogle()}>
      <GoogleIcon sx={{ color: "rgba(2, 2, 22, 1)" }} />
    </Button>
  );
}

export default GoogleSignIn;
