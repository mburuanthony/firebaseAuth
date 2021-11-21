import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./config";

const provider = new GoogleAuthProvider();

export const SignInWithGoogle = () => signInWithPopup(auth, provider);
