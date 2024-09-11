import React, { useState } from "react";
import { Box, Grid } from "@mui/material";

const Demo = () => {
  const items = [
    {
      id: 1,
      title: "Item 1",
      imgUrl:
        "https://yawantwiowusu.com/wp-content/uploads/2024/02/MTN-Rewards-300x300.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "Item 2",
      imgUrl:
        "https://yawantwiowusu.com/wp-content/uploads/2024/02/ubadi-500x500.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "Item 3",
      imgUrl:
        "https://yawantwiowusu.com/wp-content/uploads/2024/02/dexwin-2-500x500.jpg",
      link: "#",
    },
    {
      id: 4,
      title: "Item 4",
      imgUrl:
        "https://yawantwiowusu.com/wp-content/uploads/2024/02/saving-grains-500x500.jpg",
      link: "#",
    },
    {
      id: 5,
      title: "Item 5",
      imgUrl:
        "https://yawantwiowusu.com/wp-content/uploads/2024/02/MTN-Hoods-copy-500x500.jpg",
      link: "#",
    },
    {
      id: 6,
      title: "Item 6",
      imgUrl:
        "https://yawantwiowusu.com/wp-content/uploads/2022/09/featured-imagesArtboard-1-copy-500x500.png",
      link: "#",
    },
  ];

  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseOver = (id) => setHoveredItem(id);
  const handleMouseOut = () => setHoveredItem(null);

  return (
    <Box sx={{ width: "100%", marginTop: "7rem" }}>
      <Grid container spacing={0}>
        {items.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} lg={4}>
            <Box
              sx={{
                position: "relative",
                height: "70vh",
                backgroundImage: `url(${item.imgUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                gap: "0px",
                backgroundColor:
                  hoveredItem === item.id
                    ? "rgba(37, 64, 204, 0.6)"
                    : "transparent",
              }}
              onMouseOver={() => handleMouseOver(item.id)}
              onMouseOut={handleMouseOut}
            >
              <a
                href={item.link}
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
                    opacity: hoveredItem === item.id ? 1 : 0,
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

export default Demo;
