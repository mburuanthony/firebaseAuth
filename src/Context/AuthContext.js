import { createContext, useContext, useEffect, useState } from "react";
import {
  SignUpWithEmailAndPAssword,
  SignInWithEmailAndPassword,
} from "../Firebase/emailAuth";
import {
  onAuthStateChanged,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/config";
import { SignInWithgitHub } from "../Firebase/gitHubAuth";
import { SignInWithGoogle } from "../Firebase/googleAuth";

export const authContext = createContext();

export function useAuth() {
  return useContext(authContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  const signUp = ({ email, password }) => {
    return SignUpWithEmailAndPAssword({ email, password });
  };

  const signIn = ({ email, password }) => {
    return SignInWithEmailAndPassword({ email, password });
  };

  const LogOut = () => {
    return signOut(auth);
  };

  const ResetPassword = ({ email }) => {
    return sendPasswordResetEmail(auth, email);
  };

  const GoogleSignin = () => {
    return SignInWithGoogle();
  };

  const GitHubSignin = () => {
    return SignInWithgitHub();
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      }
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    setCurrentUser,
    signUp,
    signIn,
    LogOut,
    ResetPassword,
    GoogleSignin,
    GitHubSignin,
  };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
}
