import React, { useState, useEffect } from "react";
import { Box, Typography, Container, List, ListItem } from "@mui/material";
import { useParams } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import FooterCard from "../../../container/Footer/FooterCard";
import { client, urlFor } from "../../../client"; // Import your client or data-fetching utility

const ArticleDetail = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const query = `*[_type == "article" && slug == "${slug}"]`;
        const data = await client.fetch(query);
        if (data.length > 0) {
          setArticle(data[0]);
        } else {
          setError("Article not found");
        }
      } catch (err) {
        setError("Error fetching article");
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  if (loading) {
    return (
      <Container
        sx={{
          paddingTop: "5rem",
          paddingBottom: "2rem",
          color: "#081e57",
          textAlign: "center",
        }}
      >
        <Typography variant="h5">Loading...</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container
        sx={{
          paddingTop: "5rem",
          paddingBottom: "2rem",
          color: "#081e57",
          textAlign: "center",
        }}
      >
        <Typography variant="h5">{error}</Typography>
      </Container>
    );
  }

  if (!article) {
    return (
      <Container
        sx={{
          paddingTop: "5rem",
          paddingBottom: "2rem",
          color: "#081e57",
          textAlign: "center",
        }}
      >
        <Typography variant="h5">Article not found</Typography>
      </Container>
    );
  }

  return (
    <>
      <Navbar name="Home" link="/" />
      <Container
        sx={{
          paddingTop: { md: "2rem", xs: "1rem" },
          paddingBottom: "2rem",
          color: "#081e57",
        }}
      >
        <Box
          sx={{
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {/* Main Image */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "auto",
              overflow: "hidden",
              borderRadius: "15px",
              mb: 3,
            }}
          >
            <img
              src={urlFor(article.imageUrl)}
              alt={article.title}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                borderRadius: "15px",
              }}
            />
          </Box>

          {/* Title */}
          <Typography sx={{ fontWeight: "bold", mb: 2, fontSize: "2.2rem" }}>
            {article.title}
          </Typography>

          {/* Subtitle */}
          {article.subtitle && (
            <Typography
              variant="h4"
              component="h2"
              sx={{ fontWeight: "normal", mb: 2, color: "#666" }}
            >
              {article.subtitle}
            </Typography>
          )}

          {/* Author and Publication Date */}
          <Typography variant="body2" sx={{ color: "#888", mb: 2 }}>
            {article.author ? `By ${article.author}` : "By Author"} •{" "}
            {new Date(article.publicationDate).toLocaleDateString()}
          </Typography>

          {/* Introduction */}
          <Typography variant="body1" sx={{ mb: 4 }}>
            {article.introduction}
          </Typography>

          {/* Headings and Subheadings */}
          {article.sections.map((section, index) => (
            <Box key={index} sx={{ mb: 4 }}>
              <Typography sx={{ fontWeight: "bold", mb: 2, fontSize: "2rem" }}>
                {section.heading}
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {section.content}
              </Typography>
              {section.list && (
                <List sx={{ paddingLeft: 2 }}>
                  {section.list.map((item, i) => (
                    <ListItem key={i} sx={{ padding: 0, marginBottom: 1 }}>
                      <ul
                        style={{
                          paddingLeft: "20px",
                          margin: 0,
                        }}
                      >
                        <li>{item}</li>
                      </ul>
                    </ListItem>
                  ))}
                </List>
              )}
            </Box>
          ))}

          {/* Conclusion */}
          <Box sx={{ mt: 4 }}>
            <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
              {article.conclusion}
            </Typography>
          </Box>

          {/* References/Sources */}
          {article.references && (
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                References
              </Typography>
              <List>
                {article.references.map((reference, index) => (
                  <ListItem key={index}>
                    <a
                      href={reference.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {reference.text}
                    </a>
                  </ListItem>
                ))}
              </List>
            </Box>
          )}

          {/* Related Articles */}
          {article.relatedArticles && (
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Related Articles
              </Typography>
              <List>
                {article.relatedArticles.map((related, index) => (
                  <ListItem key={index}>
                    <a href={`/articles/${related.slug}`}>{related.title}</a>
                  </ListItem>
                ))}
              </List>
            </Box>
          )}
        </Box>
      </Container>
      <FooterCard />
    </>
  );
};

export default ArticleDetail;
