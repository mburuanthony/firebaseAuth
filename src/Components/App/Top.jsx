import { useState } from "react";
import { Box, Avatar, Popover, Button, Link } from "@mui/material";
import { useAuth } from "../../Context/AuthContext";
import { useHistory } from "react-router-dom";
import Signout from "../Auth/Signout";
import UserIcon from "@mui/icons-material/AccountCircle";
import { deepOrange } from "@mui/material/colors";
import Profilepic from "../../Assets/Images/default_profile_pic.png";

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
      padding="2px 6px"
      position="fixed"
      top={0}
      left={0}
      backgroundColor="transparent"
      zIndex={2000}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Link
        href="/login"
        underline="none"
        variant="button"
        display={!currentUser ? "block" : "none"}
        sx={{
          margin: "10px 0 0 0",
          padding: "5px 10px",
          border: 0,
          borderRadius: "4px",
          backgroundColor: "rgba(0, 0, 0, 0.25)",
          color: "rgb(255, 255, 255)",
          textTransform: "capitalize",
          transition: "all ease .4s",
          "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.55)" },
        }}
      >
        Sign In
      </Link>
      {currentUser && (
        <Avatar
          src={currentUser?.photoURL ?? Profilepic}
          sx={{
            width: "34px",
            height: "34px",
            bgcolor: deepOrange[300],
            margin: "10px 20px 0 0",
            cursor: "pointer",
          }}
          onClick={(e) => setAnchorElmnt(e.currentTarget)}
        />
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
