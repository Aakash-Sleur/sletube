import React from "react";
import { Box, CircularProgress, Stack } from "@mui/material";

const Loader = () => {
  return (
    <Box
      sx={{
        display: "grid",
        placeItems: "center",
      }}
      minHeight={"95vh"}
      width={"100%"}
    >
      <CircularProgress size={50} />
    </Box>
  );
};

export default Loader;
