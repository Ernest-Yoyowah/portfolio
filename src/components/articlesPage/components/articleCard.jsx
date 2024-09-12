import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom"; // Assuming you're using react-router

const ArticleCard = ({ article }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/articles/${article.slug}`);
  };

  return (
    <Box
      sx={{
        overflow: "hidden",
        cursor: "pointer",
        width: { md: "350px", xs: "300px" },
      }}
      onClick={handleClick}
    >
      <div
        style={{
          height: "200px",
          overflow: "hidden",
        }}
      >
        <img
          src={article.imageUrl}
          alt={article.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.3s ease",
            borderRadius: "15px",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>

      <div style={{ padding: "1rem 0" }}>
        <h3 style={{ margin: "0 0 10px", fontWeight: "bold" }}>
          {article.title}
        </h3>
      </div>
    </Box>
  );
};

export default ArticleCard;
