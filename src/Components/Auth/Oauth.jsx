import { Box } from "@mui/material";
import GoogleSignIn from "./GoogleSignIn";
import GitHubSignIn from "./GitHubSignIn";

function Oauth() {
  return (
    <Box width="fit-content" margin="0 auto 8px auto">
      <GoogleSignIn />
      <span style={{ margin: "0 10px 0 10px" }}>or</span>
      <GitHubSignIn />
    </Box>
  );
}

export default Oauth;
