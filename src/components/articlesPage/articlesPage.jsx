import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import ArticleCard from "./components/articleCard";

const articles = [
  {
    id: 1,
    title: "UI & UX",
    description:
      "A deep dive into how React components work and how to use them effectively.",
    imageUrl:
      "https://images.shiksha.com/mediadata/shikshaOnline/mailers/2021/naukri-learning/oct/27oct/What-is-UI-UX-Design.jpg",
  },
  {
    id: 2,
    title: "JavaScript ES6 Features",
    description:
      "Explore the new and powerful features introduced in ECMAScript 6.",
    imageUrl:
      "https://yawprecious.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F3lm8l8o5%2Fproduction%2Fdf539099197c82fdc1bbbfd942a9e7d29253a171-768x576.png&w=640&q=75",
  },
  {
    id: 3,
    title: "CSS Grid Layout",
    description:
      "Learn how to use CSS Grid to create responsive web layouts easily.",
    imageUrl:
      "https://yawprecious.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F3lm8l8o5%2Fproduction%2F4813843ad03105ff7ce48df656a249ab52fa6d09-768x576.png&w=640&q=75",
  },
];

const ArticlesPage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        paddingTop: "5rem",
        textAlign: "center",
        color: "#081e57",
      }}
    >
      <h1 className="head-text">My Articles</h1>
      <Typography
        variant="h2"
        component="h2"
        sx={{ fontWeight: 400, fontSize: "1rem", mb: 4 }}
      >
        Aside from keeping a journal, I enjoy writing these articles.
      </Typography>
      <Grid
        container
        spacing={0}
        sx={{
          paddingX: { md: "8rem", xs: "1rem" },
          justifyContent: "center",
          width: "100%",
        }}
      >
        {articles.map((article) => (
          <Grid
            item
            key={article.id}
            xs={12} // 1 item on small screens
            sm={6} // 2 items on tablets
            lg={4} // 3 items on large screens
            sx={{ padding: "1rem", display: "flex", justifyContent: "center" }}
          >
            <ArticleCard article={article} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ArticlesPage;
