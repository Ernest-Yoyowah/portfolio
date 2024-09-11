import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";
import { Box } from "@mui/material";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <>
    <Box sx={{ marginX: { md: "8rem", xs: "1rem" } }}>
      <div className="badg-cmp">
        <Box sx={{ marginTop: { md: 7, xs: 5 } }}>
          <p className="about-text">Hello I'm Ernest Yoyowah</p>
          <h1
            className="about-paragraph-text"
            // sx={{
            //   fontSize: "45px",
            //   fontWeight: 700,
            //   marginTop: "11px",
            //   marginBottom: "20px",
            //   lineHeight: 1.2,
            //   color: "#081e57",
            // }}
          >
            Frontend engineer focused on crafting innovative solutions that
            align with business goals & user needs.
          </h1>
        </Box>
      </div>

      {/* <div className="app__header-img">
      <img src={images.profile2} alt="profile_bg" />
    </div> */}
      {/* <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Ernest</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Software Engineering Major</p>
          <p className="p-text">Front-end Developer</p>
        </div>
      </div>
    </motion.div> */}

      {/* <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div> */}
    </Box>
    {/* <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)", // 3 items per row by default
        width: "100%",
      }}
    >
      <div style={{ background: "#fcb900", height: "70vh" }}>A</div>
      <div style={{ background: "#0693e3", height: "100%" }}>B</div>
      <div style={{ background: "#00d084", height: "100%" }}>C</div>
    </div> */}
  </>
);

export default Header;
