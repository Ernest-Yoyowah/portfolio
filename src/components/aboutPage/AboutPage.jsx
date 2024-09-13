import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { Box } from "@mui/material";
import FooterCard from "../../container/Footer/FooterCard";
import { client, urlFor } from "../../client";

const AboutPage = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    // Query to fetch the 'about' data
    const query = '*[_type == "aboutme"]';

    // Fetch data from the CMS or data service
    client.fetch(query).then((data) => {
      if (data.length > 0) {
        setAboutData(data[0]); // Assuming there's only one document
      }
    });
  }, []);

  // Return loading indicator while data is being fetched
  if (!aboutData) return <div>Loading...</div>;

  return (
    <>
      <Navbar link="/" name="Home" />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          flexDirection: { md: "row", xs: "column", sm: "row" },
          alignItems: "center",
          padding: { md: "1rem 8rem", xs: "1rem" },
        }}
      >
        <Box
          sx={{
            width: { md: "40%", xs: "100%", sm: "45%" },
            background: "#ff9800",
            height: { md: "70vh", xs: "60vh", sm: "90vh" },
            borderRadius: "15px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <img
            src={urlFor(aboutData.profileImage)}
            style={{ width: "100%" }}
            alt="profile"
          />
        </Box>
        <Box
          sx={{
            width: { md: "50%", xs: "100%", sm: "50%" },
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 4,
            color: "#081e57",
          }}
        >
          <h1 style={{ fontWeight: 600, fontSize: "24px" }}>
            {aboutData.introduction.title}
          </h1>
          {aboutData.introduction.paragraphs.map((paragraph, index) => (
            <h2 key={index} style={{ fontWeight: 400, fontSize: "16px" }}>
              {paragraph}
            </h2>
          ))}
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
        {aboutData.experiences.map((exp, index) => (
          <h2 key={index} style={{ fontWeight: 400, fontSize: "16px" }}>
            {exp.description}
          </h2>
        ))}
        <h2 style={{ fontWeight: 400, fontSize: "16px" }}>
          {aboutData.additionalInfo.education}
        </h2>
        <h2 style={{ fontWeight: 400, fontSize: "16px" }}>
          {aboutData.additionalInfo.hobbies}
        </h2>
      </Box>
      <FooterCard />
    </>
  );
};

export default AboutPage;
