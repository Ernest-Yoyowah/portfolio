import React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Container,
  Button,
  List,
  ListItem,
  Grid,
} from "@mui/material";
import { portfolioItems } from "./portfolioItems";
import { Navbar } from "../../components";
import FooterCard from "../Footer/FooterCard";

const PortfolioDetail = () => {
  const { slug } = useParams();
  const item = portfolioItems.find((item) => item.slug === slug);

  if (!item) {
    return (
      <Container sx={{ paddingTop: "5rem", textAlign: "center" }}>
        <Typography variant="h5">Portfolio item not found</Typography>
      </Container>
    );
  }

  return (
    <>
      <Navbar name="Home" link="/" />
      <Box
        sx={{
          width: "100%",
          paddingTop: { md: "3rem", xs: "1rem" },
          paddingBottom: "2rem",
          color: "#081e57",
        }}
      >
        <Box sx={{ maxWidth: "1000px", margin: { md: "0 8rem", xs: "1rem" } }}>
          {/* Title */}
          <Typography sx={{ fontWeight: "bold", mb: 2, fontSize: "2.7rem" }}>
            {item.title}
          </Typography>

          {/* Project Overview */}
          <Typography sx={{ fontWeight: "bold", mb: 2, fontSize: "1.2rem" }}>
            Project Overview
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            {item.description}
          </Typography>

          {/* Year */}
          <Box sx={{ mb: 4 }}>
            <Typography sx={{ fontWeight: "bold", mb: 2, fontSize: "1.2rem" }}>
              Year
            </Typography>
            <Typography variant="body1">{item.date}</Typography>
          </Box>

          {/* Roles */}
          <Box sx={{ mb: 4 }}>
            <Typography sx={{ fontWeight: "bold", mb: 2, fontSize: "1.2rem" }}>
              Role
            </Typography>
            <Typography variant="body1">{item.role}</Typography>
          </Box>

          {/* Challenges */}
          {item.challenges && (
            <Box sx={{ mt: 4, mb: 4 }}>
              <Typography
                sx={{ fontWeight: "bold", mb: 2, fontSize: "1.2rem" }}
              >
                Challenges
              </Typography>
              <List>
                {item.challenges.map((challenge, index) => (
                  <ListItem key={index}>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                      • {challenge}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Box>
          )}

          {/* Main Image */}
          <Box
            sx={{
              position: "relative",
              width: { md: "80%", xs: "100%" },
              overflow: "hidden",
              borderRadius: "15px",
              mb: 3,
            }}
          >
            <img
              src={item.imgUrl}
              alt={item.title}
              style={{
                width: "50%",
                height: "auto",
                objectFit: "cover",
                borderRadius: "15px",
              }}
            />
          </Box>

          {/* Key Achievements */}
          {item.keyAchievements && (
            <Box sx={{ mb: 4 }}>
              <Typography
                sx={{ fontWeight: "bold", mb: 2, fontSize: "1.2rem" }}
              >
                Key Achievements
              </Typography>
              <List sx={{ paddingLeft: 2 }}>
                {item.keyAchievements.map((achievement, index) => (
                  <ListItem key={index} sx={{ padding: 0, marginBottom: 1 }}>
                    • {achievement}
                  </ListItem>
                ))}
              </List>
            </Box>
          )}

          {/* Additional Images */}
          {item.images && item.images.length > 0 && (
            <Grid container spacing={2}>
              {item.images.map((image, index) => (
                <Grid
                  item
                  xs={6} // 2 per row on mobile
                  sm={6} // 2 per row on tablets
                  md={4} // 3 per row on large screens
                  key={index}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      overflow: "hidden",
                      borderRadius: "15px",
                    }}
                  >
                    <img
                      src={image}
                      alt={`${item.title} - Additional ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                        borderRadius: "15px",
                      }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          )}

          {/* Technologies Used */}
          <Typography sx={{ fontWeight: "bold", mb: 2, fontSize: "1.2rem" }}>
            Technologies Used:
          </Typography>
          <List sx={{ paddingLeft: 2 }}>
            {item.technologies.map((tech, index) => (
              <ListItem key={index} sx={{ padding: 0, marginBottom: 1 }}>
                • {tech}
              </ListItem>
            ))}
          </List>

          {/* Experience the Design */}
          <Box sx={{ mt: 4 }}>
            <Typography sx={{ fontWeight: "bold", mb: 2, fontSize: "1.2rem" }}>
              Experience the web app
              <Button
                variant="text"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </Button>
            </Typography>
          </Box>
        </Box>
      </Box>
      <FooterCard />
    </>
  );
};

export default PortfolioDetail;
