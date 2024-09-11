import React, { useState } from "react";
import { HiX, HiOutlineMenu } from "react-icons/hi";
import { motion } from "framer-motion";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { images } from "../../constants";

const Navbar = ({ name, link }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        zIndex: 2,
        padding: { md: "1rem 8rem", xs: "1rem " },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <a href="/">
          <img
            src={images.navLogo}
            alt="logo"
            style={{
              width: "40%",
              height: "auto",
              "@media(min-width: 2000px)": {
                width: "190px",
                height: "50px",
                backgroundColor: "red", // Remove or adjust as needed
              },
            }}
          />
        </a>
      </Box>
      <Button
        sx={{
          borderRadius: "40px",
          backgroundColor: "#081e57",
          color: "#ffffff",
          padding: "10px 40px",
          transition:
            "background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <a
          href={link}
          style={{
            textDecoration: "none",
            color: "inherit",
            fontWeight: 700,
            fontSize: "20px",
          }}
        >
          {name}
        </a>
      </Button>
    </Box>
  );
};

export default Navbar;
