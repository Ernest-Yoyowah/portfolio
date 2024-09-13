import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { client, urlFor } from "../../client"; // Adjust the import based on your data setup

const Portfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    // Fetch portfolio items from the CMS or data service
    const query = '*[_type == "portfolio"]'; // Adjust the query based on your schema

    client.fetch(query).then((data) => {
      setPortfolioItems(data); // Update state with fetched data
      console.log(data);
    });
  }, []);

  const handleMouseOver = (id) => setHoveredItem(id);
  const handleMouseOut = () => setHoveredItem(null);

  return (
    <Box sx={{ width: "100%", marginTop: "7rem" }}>
      <Grid container spacing={0}>
        {portfolioItems.map((item) => (
          <Grid item key={item._id} xs={12} sm={6} lg={4}>
            <Box
              sx={{
                position: "relative",
                height: "70vh",
                backgroundImage: `url(${urlFor(item.imgUrl)})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                gap: "0px",
                backgroundColor:
                  hoveredItem === item._id
                    ? "rgba(37, 64, 204, 0.6)"
                    : "transparent",
              }}
              onMouseOver={() => handleMouseOver(item._id)}
              onMouseOut={handleMouseOut}
            >
              <a
                href={`/portfolio/${item.slug?.current || ""}`}
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: 600,
                  fontSize: "24px",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    bottom: 0,
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    textAlign: "center",
                    padding: "10px",
                    opacity: hoveredItem === item._id ? 1 : 0,
                    transition: "opacity 0.3s ease",
                    zIndex: 2,
                  }}
                >
                  {item.title}
                </Box>
              </a>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
