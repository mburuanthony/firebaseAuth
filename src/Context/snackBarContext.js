import { createContext, useContext, useState } from "react";

const snackBarContext = createContext();

export function useSnackBar() {
  return useContext(snackBarContext);
}

export function SnackBarProvider({ children }) {
  const [sanckOpen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  const value = {
    sanckOpen,
    setSnackOpen,
    snackMessage,
    setSnackMessage,
  };

  return (
    <snackBarContext.Provider value={value}>
      {children}
    </snackBarContext.Provider>
  );
}
