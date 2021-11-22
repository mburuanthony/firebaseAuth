import { Box, Typography } from "@mui/material";
import { useAuth } from "../../Context/AuthContext";
import Signout from "./Signout";

function Profile() {
  const { currentUser } = useAuth();

  return (
    <Box width="20rem" padding="6px" margin="2rem auto" border={0}>
      <Typography>Your Profile</Typography>
      <hr style={{ border: "1px solid #f2f2f2", borderRadius: 0 }} />
      <Typography>Name</Typography>
      <p>{currentUser?.displayName ?? ":)"}</p>
      <Typography>Email</Typography>
      <p>{currentUser?.email}</p>
      <Signout />
    </Box>
  );
}

export default Profile;
