import { Button } from "@mui/material";
import GithubIcon from "@mui/icons-material/GitHub";
import { SignInWithgitHub } from "../Firebase/gitHubAuth";

function GitHubSignIn() {
  return (
    <Button onClick={() => SignInWithgitHub()} sx={{ color: "#000" }}>
      <GithubIcon />
    </Button>
  );
}

export default GitHubSignIn;
