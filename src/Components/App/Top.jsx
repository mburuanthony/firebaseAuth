import { useState } from "react";
import { Box, Avatar, Popover, Button } from "@mui/material";
import { useAuth } from "../../Context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Signout from "../Auth/Signout";
import UserIcon from "@mui/icons-material/AccountCircle";
import { deepOrange } from "@mui/material/colors";

function Top() {
  const history = useHistory();

  const [anchorElemnt, setAnchorElmnt] = useState(null);
  const closePopOver = () => {
    setAnchorElmnt(null);
  };
  const popOverOpen = Boolean(anchorElemnt);
  const id = popOverOpen ? "user_PopOver" : undefined;

  const { currentUser } = useAuth();

  return (
    <Box
      width="100%"
      height="50px"
      padding="2px 6px"
      position="fixed"
      top={0}
      left={0}
      backgroundColor="transparent"
      zIndex={2000}
    >
      <Link to="/login">Sign In</Link>

      {currentUser && (
        <Avatar
          src={currentUser?.photoURL}
          sx={{
            bgcolor: deepOrange[500],
            float: "right",
            margin: "10px 20px 0 0",
            cursor: "pointer",
          }}
          onClick={(e) => setAnchorElmnt(e.currentTarget)}
        >
          {currentUser?.email[0]}
        </Avatar>
      )}
      <Popover
        id={id}
        open={popOverOpen}
        anchorEl={anchorElemnt}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        onClose={closePopOver}
        elevation={0}
        PaperProps={{
          style: {
            display: "flex",
            flexDirection: "column",
            width: "8rem",
            margin: "4px 0",
            padding: "6px",
            border: 0,
            borderRadius: "12px",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.15)",
          },
        }}
      >
        <Button
          sx={{
            margin: "0 0 12px 0",
            border: 0,
            borderRadius: "8px",
            textDecoration: "none",
            color: "#000",
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "#f2f2f2",
            },
          }}
          endIcon={<UserIcon />}
          onClick={() => history.push("/profile")}
        >
          Profile
        </Button>
        <Signout />
      </Popover>
    </Box>
  );
}

export default Top;
