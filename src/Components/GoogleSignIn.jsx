import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { SignInWithGoogle } from "../Firebase/googleAuth";

function GoogleSignIn() {
  return (
    <>
      <hr
        style={{
          border: "1px solid #f2f2f2",
          width: "100%",
          borderRadius: 0,
        }}
      />
      <Button
        endIcon={<GoogleIcon color="warning" />}
        sx={{
          textTransform: "capitalize",
          width: "60%",
          margin: "0 auto",
        }}
        onClick={() => SignInWithGoogle()}
      >
        sign in with google
      </Button>
    </>
  );
}

export default GoogleSignIn;
