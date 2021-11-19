import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./config";

const provider = new GoogleAuthProvider();

export const SignInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((res) => {
      localStorage.setItem("username", res.user.displayName);
      localStorage.setItem("email", res.user.email);
      localStorage.setItem("profilePic", res.user.photoURL);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
