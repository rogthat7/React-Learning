import { Link } from "react-router";
import { Box, Button, Typography } from "@mui/material";

export default function MenuItems() {
  return (
    <Box display={"flex"}>
      <Button
        sx={{
          backgroundColor: "white",
          borderRadius: "25px",
          color: "black",
        }}
        variant="outlined"
        component={Link}
        to="/"
      >
        <Typography sx={{ color: "black" }}>Home</Typography>
      </Button>
      <Button
        sx={{ backgroundColor: "white", borderRadius: "25px" }}
        variant="outlined"
        component={Link}
        to="/watchlist"
      >
        <Typography sx={{ color: "black" }}>Watchlist</Typography>
      </Button>
    </Box>
  );
}
