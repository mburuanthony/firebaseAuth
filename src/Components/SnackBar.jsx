import React from "react";
import { Snackbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useSnackBar } from "../Context/snackBarContext";

function SnackBar() {
  const { sanckOpen, setSnackOpen, snackMessage } = useSnackBar();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackOpen(false);
  };

  const snackAction = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      open={sanckOpen}
      message={snackMessage}
      autoHideDuration={3500}
      onClose={handleClose}
      action={snackAction}
    />
  );
}

export default SnackBar;
