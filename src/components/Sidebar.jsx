import React from "react";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import {
  Stack,
  SwipeableDrawer,
  IconButton,
  Box,
  Typography,
  Tooltip,
  Fade,
} from "@mui/material";
import { categories } from "../utils/constants";

import { useCategory, useSidebar } from "../hooks/use-store-modal";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useSidebar();
  const { category, setCategory } = useCategory();
  const navigate = useNavigate();

  const onCategoryChange = (category) => {
    setCategory(category);
    navigate("/");
  };

  return (
    <SwipeableDrawer
      onOpen={onOpen}
      onClose={onClose}
      open={isOpen}
      sx={{
        overflowY: "auto",
        height: { xs: "auto", md: "95%" },
        flexDirection: { md: "column" },
        position: "fixed",
        zIndex: "1000",
        padding: 3,
      }}
    >
      <Stack
        sx={{
          overflowY: "auto",
          height: { xs: "auto", md: "100%" },
          background: "black",
        }}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          sx={{ paddingRight: "3rem", paddingTop: "1rem" }}
        >
          <Tooltip
            title="Close"
            arrow
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
          >
            <IconButton sx={{ color: "white" }} onClick={onClose}>
              <MenuOpenRoundedIcon fontSize="large" />
            </IconButton>
          </Tooltip>
          <Typography variant="h5" color={"white"}>
            Sle-Tube
          </Typography>
        </Box>

        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "2rem",
          }}
        >
          {categories.map((item) => (
            <button
              className="category-btn"
              onClick={() => onCategoryChange(item.name)}
              style={{
                background: item.name === category && "#272727",
                color: "white",
              }}
              key={item.name}
            >
              <span
                style={{
                  color: item.name === category ? "white" : "#272727",
                  marginRight: "15px",
                }}
              >
                {category.icon}
              </span>
              <span
                style={{
                  opacity: item.name === category ? "1" : "0.8",
                  fontSize: "1.2em",
                }}
              >
                {item.name === "New" ? "Home" : item.name}
              </span>
            </button>
          ))}
        </Stack>
      </Stack>
    </SwipeableDrawer>
  );
};

export default Sidebar;
