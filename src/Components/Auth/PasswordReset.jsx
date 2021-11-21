import { useState, useRef } from "react";
import { Box, TextField, Button } from "@mui/material";
import ResetIcon from "@mui/icons-material/ChangeCircle";

function PasswordReset() {
  const emailRef = useRef();
  const [address, setAddress] = useState("");
  const [mailError, setMailError] = useState(false);
  const [showMsg, setShowMsg] = useState(false);

  const SendReq = () => {
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(address)) {
      setMailError(true);
    } else {
      setMailError(false);
      setShowMsg(true);
      console.log(`Sending password reset request for...${address}`);
    }
  };

  return (
    <Box
      width="25%"
      minWidth="22rem"
      display="flex"
      flexDirection="column"
      margin="2rem auto"
      padding="12px"
      border="0"
      borderRadius="8px"
      boxShadow="0px 2px 4px rgba(0, 0, 0, 0.15)"
    >
      {address && showMsg && (
        <span style={{ fontSize: "14px", margin: "20px auto" }}>
          Password reset request sent for {address}
        </span>
      )}
      <TextField
        ref={emailRef}
        variant="standard"
        label="Enter your email address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      {mailError && (
        <span style={{ color: "red", fontSize: "14px" }}>
          Invalid email address
        </span>
      )}
      <Button
        variant="contained"
        disableElevation
        sx={{
          width: "60%",
          margin: "20px auto 0 auto",
          borderRadius: "30px",
          textTransform: "capitalize",
        }}
        color="warning"
        endIcon={<ResetIcon />}
        onClick={SendReq}
      >
        Reset Password
      </Button>
    </Box>
  );
}

export default PasswordReset;
