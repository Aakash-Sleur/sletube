import { useState, useEffect } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { Sidebar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { useCategory } from "../hooks/use-store-modal";

const Feed = () => {
  const { category } = useCategory();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${category}`).then((data) =>
      setVideos(data.items)
    );
  }, [category]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        p={2}
        sx={{ overflowY: "auto", height: "90vh", flex: 2, marginTop: "1rem" }}
      >
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
