import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./config";

export const SignUpWithEmailAndPAssword = ({ email, password }) =>
  createUserWithEmailAndPassword(auth, email, password);

export const SignInWithEmailAndPassword = ({ email, password }) =>
  signInWithEmailAndPassword(auth, email, password);
