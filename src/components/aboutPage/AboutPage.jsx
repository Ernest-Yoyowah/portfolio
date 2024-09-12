import React from "react";
import Navbar from "../Navbar/Navbar";
import { images } from "../../constants";
import { Education } from "../../container";
import { Box } from "@mui/material";
import FooterCard from "../../container/Footer/FooterCard";

const AboutPage = () => {
  return (
    <>
      <Navbar link="/" name="Home" />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          // height: "40vh",
          justifyContent: "space-between",
          flexDirection: { md: "row", xs: "column" },
          alignItems: "center",
          padding: { md: "1rem 8rem", xs: "1rem" },
          // marginY: "2rem",
        }}
      >
        <Box
          sx={{
            width: { md: "40%", xs: "100%" },
            background: "#ff9800",
            height: { md: "70vh", xs: "60vh", sm: "80vh" },
            borderRadius: "15px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <img
            src={images.aboutImage}
            style={{ width: "100%" }}
            alt="profile"
          />
        </Box>
        <Box
          sx={{
            width: { md: "50%", xs: "100%" },
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 4,
            color: "#081e57",
          }}
        >
          <h1 style={{ fontWeight: 600, fontSize: "24px" }}>
            About Ernest Nii Okpoti Yoyowah, Frontend Engineer from Ghana, West
            Africa
          </h1>
          <h2 style={{ fontWeight: 400, fontSize: "16px" }}>
            I am a product designer with over two years of experience in
            designing and developing digital products that solve problems and
            delight users.
          </h2>

          <h2 style={{ fontWeight: 400, fontSize: "16px" }}>
            I am a product designer with over two years of experience in
            designing and developing digital products that solve problems and
            delight users.
          </h2>
        </Box>
      </Box>
      <Box
        sx={{
          width: { md: "90%", xs: "100%" },
          height: "100%",
          display: "flex",
          padding: { md: "1rem 8rem", xs: "1rem" },
          flexDirection: "column",
          justifyContent: "end",
          alignItems: "flex-end",
          gap: 5,
          color: "#081e57",
          marginBottom: 10,
        }}
      >
        <h2 style={{ fontWeight: 400, fontSize: "16px" }}>
          I am a product designer with over two years of experience in designing
          and developing digital products that solve problems and delight users.
          In addition to my role at Dexwin, I am also the co-founder and product
          lead of Ubadi, an education-first family-oriented savings, financial
          literacy and management mobile and web platform that helps teenagers
          and their families build essential financial habits for the future. I
          led market research activities, facilitated focus-group discussions,
          and executed user testing for Ubadi. I also developed essential
          elements like a design system, user personas, user flows,
          high-fidelity designs, and prototypes. I collaborated closely with
          co-founders, engineers, payment processing partners, and Ghana
          Co-operative Susu Collectors Association to launch Ubadi.
        </h2>
        <h2 style={{ fontWeight: 400, fontSize: "16px" }}>
          I am a product designer with over two years of experience in designing
          and developing digital products that solve problems and delight users.
          In addition to my role at Dexwin, I am also the co-founder and product
          lead of Ubadi, an education-first family-oriented savings, financial
          literacy and management mobile and web platform that helps teenagers
          and their families build essential financial habits for the future. I
          led market research activities, facilitated focus-group discussions,
          and executed user testing for Ubadi. I also developed essential
          elements like a design system, user personas, user flows,
          high-fidelity designs, and prototypes. I collaborated closely with
          co-founders, engineers, payment processing partners, and Ghana
          Co-operative Susu Collectors Association to launch Ubadi.
        </h2>
      </Box>
      <FooterCard />
      {/* <Education /> */}
    </>
  );
};

export default AboutPage;
