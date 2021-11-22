import { useAuth } from "../../Context/AuthContext";
import GithubImg from "../../Assets/Images/github.png";
import { useHistory } from "react-router-dom";
import { useSnackBar } from "../../Context/snackBarContext";

function GitHubSignIn() {
  const history = useHistory();
  const { GitHubSignin } = useAuth();

  const { setSnackOpen, setSnackMessage } = useSnackBar();

  return (
    <>
      <img
        src={GithubImg}
        alt="github"
        style={{ width: "22px", height: "100%", cursor: "pointer" }}
        onClick={async () => {
          try {
            await GitHubSignin();
            history.push("/");
            setSnackOpen(true);
            setSnackMessage("GitHub Sign In success");
          } catch {
            setSnackOpen(true);
            setSnackMessage("GitHub Sign In failed");
          }
        }}
      />
    </>
  );
}

export default GitHubSignIn;
