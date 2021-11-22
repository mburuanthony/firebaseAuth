import { useAuth } from "../../Context/AuthContext";
import GoogleImg from "../../Assets/Images/google.png";
import { useHistory } from "react-router-dom";
import { useSnackBar } from "../../Context/snackBarContext";

function GoogleSignIn() {
  const history = useHistory();
  const { GoogleSignin } = useAuth();

  const { setSnackOpen, setSnackMessage } = useSnackBar();

  return (
    <>
      <img
        src={GoogleImg}
        alt="google"
        style={{ width: "20px", height: "100%", cursor: "pointer" }}
        onClick={async () => {
          try {
            await GoogleSignin();
            history.push("/");
            setSnackOpen(true);
            setSnackMessage("Google Sign In success");
          } catch {
            setSnackOpen(true);
            setSnackMessage("Google Sign In failed");
          }
        }}
      />
    </>
  );
}

export default GoogleSignIn;
