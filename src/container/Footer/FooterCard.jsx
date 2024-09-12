import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { BsInstagram } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const FooterCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { md: "row", xs: "column" },
        textAlign: "center",
        padding: { md: "4rem 8rem", xs: "1rem" },
        color: "#081e57",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: { md: 3, xs: 1 },
          flexDirection: { md: "row", xs: "column" },
        }}
      >
        <Typography variant="body1">(+233) 050 692 3484</Typography>
        <Typography variant="body1">ernestniiyoyowah@gmail.com</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginTop: { md: 0, xs: 2 },
        }}
      >
        <IconButton
          component="a"
          href="https://www.instagram.com/ernest_yoyowah_jnr"
          sx={{ color: "#081e57" }}
        >
          <BsInstagram />
        </IconButton>
        <IconButton
          component="a"
          href="https://github.com/Ernest-Yoyowah"
          sx={{ color: "#081e57" }}
        >
          <FaGithub />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/ernestyoyowah"
          sx={{ color: "#081e57" }}
        >
          <FaLinkedin />
        </IconButton>
      </Box>
    </Box>
  );
};

export default FooterCard;
