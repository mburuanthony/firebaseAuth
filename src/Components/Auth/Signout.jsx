import { useAuth } from "../../Context/AuthContext";
import { Button } from "@mui/material";
import { ExitToAppRounded } from "@mui/icons-material";
import { useHistory } from "react-router-dom";

function Signout() {
  const history = useHistory();
  const { LogOut } = useAuth();

  return (
    <Button
      variant="text"
      color="warning"
      sx={{ textTransform: "capitalize" }}
      endIcon={<ExitToAppRounded />}
      onClick={async () => {
        try {
          await LogOut();
          window.location.reload();
          history.push("/");
        } catch (e) {
          console.log(e);
        }
      }}
    >
      Sign Out
    </Button>
  );
}

export default Signout;
