import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import { useStore } from "../Store";

const Header = () => {
  const isDarkMode = useStore((state) => state.isDarkMode);
  const toggleDarkMode = useStore((state) => state.toggleDarkMode);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: isDarkMode ? "#2b3743" : "#ffffff",
        boxShadow: "8px 2px 2px lightgrey",
      }}
    >
      <Typography variant="h1" sx={{ fontSize: "1.5rem", fontWeight: 700 }}>
        Where in the world?
      </Typography>
      <Button onClick={toggleDarkMode}>
        <ModeNightIcon />
        Dark Mode
      </Button>
    </Box>
  );
};

export default Header;
