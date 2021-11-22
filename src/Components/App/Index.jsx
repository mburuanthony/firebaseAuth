import { Box } from "@mui/material";

function Index() {
  return (
    <Box
      width="100vw"
      height="100vh"
      sx={{
        backgroundImage: "url(https://source.unsplash.com/random)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    ></Box>
  );
}

export default Index;
