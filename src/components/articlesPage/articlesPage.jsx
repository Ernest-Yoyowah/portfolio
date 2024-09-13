import React, { useState, useEffect } from "react";
import { Grid, Box, Typography } from "@mui/material";
import ArticleCard from "./components/articleCard";
import { client } from "../../client"; // Import your client or data fetching utility

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch articles from the CMS or data service
    const query = '*[_type == "article"]'; // Adjust the query based on your schema

    client.fetch(query).then((data) => {
      setArticles(data); // Update state with fetched data
      console.log(data);
    });
  }, []);

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
        sx={{ fontWeight: 400, fontSize: "1rem", mb: 4, px: "1rem" }}
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
            key={article._id} // Ensure unique key for each item
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
