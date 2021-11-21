import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./config";

const provider = new GithubAuthProvider();

export const SignInWithgitHub = () => signInWithPopup(auth, provider);
