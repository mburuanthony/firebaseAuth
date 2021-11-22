import { useAuth } from "../../Context/AuthContext";
import { Button } from "@mui/material";
import { ExitToAppRounded } from "@mui/icons-material";
import { useHistory } from "react-router-dom";
import { useSnackBar } from "../../Context/snackBarContext";

function Signout({ closeMenu }) {
  const history = useHistory();
  const { LogOut, setCurrentUser } = useAuth();

  const { setSnackOpen, setSnackMessage } = useSnackBar();

  return (
    <Button
      variant="text"
      color="warning"
      sx={{ textTransform: "capitalize" }}
      endIcon={<ExitToAppRounded />}
      onClick={async () => {
        closeMenu();
        try {
          await LogOut();
          setCurrentUser(null);
          history.push("/");
          setSnackOpen(true);
          setSnackMessage("You were Signed Out");
        } catch (e) {
          setSnackOpen(true);
          setSnackMessage("Unable to sign out");
        }
      }}
    >
      Sign Out
    </Button>
  );
}

export default Signout;
