import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import {
  Feed,
  VideoDetails,
  SearchFeed,
  Navbar,
  ChannelDetail,
  Sidebar,
} from "./components";

function App() {
  return (
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetails />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  );
}

export default App;
