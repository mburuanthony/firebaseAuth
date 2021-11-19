import { Box } from "@mui/material";
import GoogleSignIn from "./GoogleSignIn";
import GitHubSignIn from "./GitHubSignIn";

function Oauth() {
  return (
    <Box width="fit-content" margin="0 auto 8px auto">
      <GoogleSignIn />
      <GitHubSignIn />
    </Box>
  );
}

export default Oauth;
