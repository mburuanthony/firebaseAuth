import { useAuth } from "../../Context/AuthContext";
import GithubImg from "../../Assets/Images/github.png";
import { useHistory } from "react-router-dom";

function GitHubSignIn() {
  const history = useHistory();
  const { GitHubSignin } = useAuth();

  return (
    <>
      <img
        src={GithubImg}
        alt="github"
        style={{ width: "30px", height: "100%", cursor: "pointer" }}
        onClick={async () => {
          try {
            await GitHubSignin();
            history.push("/");
          } catch (e) {
            console.log(e);
          }
        }}
      />
    </>
  );
}

export default GitHubSignIn;
