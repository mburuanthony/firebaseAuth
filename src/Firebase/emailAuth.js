import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./config";

export const SignUpWithEmailAndPAssword = ({ email, password }) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
      const user = res.user;
      localStorage.setItem("user", user);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const SignInWithEmailAndPassword = ({ email, password }) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      const user = res.user;
      localStorage.setItem("user", user);
    })
    .catch((err) => {
      console.log(err);
    });
};
