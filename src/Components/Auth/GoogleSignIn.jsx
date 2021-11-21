import { useAuth } from "../../Context/AuthContext";
import GoogleImg from "../../Assets/Images/google.png";
import { useHistory } from "react-router-dom";

function GoogleSignIn() {
  const history = useHistory();
  const { GoogleSignin } = useAuth();

  return (
    <>
      <img
        src={GoogleImg}
        alt="google"
        style={{ width: "30px", height: "100%", cursor: "pointer" }}
        onClick={async () => {
          try {
            await GoogleSignin();
            history.push("/");
          } catch (e) {
            console.log(e);
          }
        }}
      />
    </>
  );
}

export default GoogleSignIn;
