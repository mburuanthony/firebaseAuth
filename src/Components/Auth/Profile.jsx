import { Box, Typography } from "@mui/material";
import { useAuth } from "../../Context/AuthContext";
import { ArrowBack } from "@mui/icons-material";
import { useHistory } from "react-router";

function Profile() {
  const history = useHistory();
  const { currentUser } = useAuth();

  return (
    <Box width="20rem" padding="6px" margin="2rem auto" border={0}>
      <Box display="flex">
        <ArrowBack
          onClick={() => history.push("/")}
          sx={{ margin: "0 10px 0 0", cursor: "pointer" }}
        />
        <Typography>Your Profile</Typography>
      </Box>
      <hr style={{ border: "1px solid #f2f2f2", borderRadius: 0 }} />
      <Typography>Name</Typography>
      <p>{currentUser?.displayName ?? ":)"}</p>
      <Typography>Email</Typography>
      <p>{currentUser?.email}</p>
    </Box>
  );
}

export default Profile;
