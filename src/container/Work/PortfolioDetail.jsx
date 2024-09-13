import React, { useState, useEffect } from "react";
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
import { client, urlFor } from "../../client"; // Adjust the import based on your data setup
import { Navbar } from "../../components";
import FooterCard from "../Footer/FooterCard";

const PortfolioDetail = () => {
  const { slug } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const query = `*[_type == "portfolio" && slug.current == "${slug}"][0]`; // Adjust the query based on your schema
        const data = await client.fetch(query);
        setItem(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchItem();
  }, [slug]);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return (
      <Container sx={{ paddingTop: "5rem", textAlign: "center" }}>
        <Typography variant="h5">An error occurred: {error.message}</Typography>
      </Container>
    );
  }

  if (!item) {
    return (
      <Container sx={{ paddingTop: "5rem", textAlign: "center" }}>
        <Typography variant="h5">Portfolio item not found</Typography>
      </Container>
    );
  }

  // Function to resolve image references to URLs
  const getImageUrl = (imageRef) => {
    return urlFor(imageRef).url(); // Adjust as per your image URL generation logic
  };

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
          <Typography sx={{ fontWeight: "bold", mb: 2, fontSize: "2.2rem" }}>
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

          {/* Role */}
          <Box sx={{ mb: 4 }}>
            <Typography sx={{ fontWeight: "bold", mb: 2, fontSize: "1.2rem" }}>
              Role
            </Typography>
            <Typography variant="body1">{item.role}</Typography>
          </Box>

          {/* Challenges */}
          {item.challenges && (
            <Box sx={{ my: 6 }}>
              <Typography
                sx={{ fontWeight: "bold", mb: 2, fontSize: "1.2rem" }}
              >
                Challenges
              </Typography>
              <List>
                {item.challenges.map((challenge, index) => (
                  <ListItem key={index}>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                      <ul
                        style={{
                          paddingLeft: "20px",
                          margin: 0,
                        }}
                      >
                        {challenge.situation && (
                          <li> Situation: {challenge.situation}</li>
                        )}
                        {challenge.task && <li>Task: {challenge.task}</li>}
                        {challenge.action && (
                          <li>Action: {challenge.action}</li>
                        )}
                        {challenge.result && (
                          <li>Result: {challenge.result}</li>
                        )}
                      </ul>
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
              src={getImageUrl(item.imgUrl.asset._ref)} // Adjust URL resolution as needed
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
                sx={{ fontWeight: "bold", mb: 2, fontSize: "1.2rem", mt: 5 }}
              >
                Key Achievements
              </Typography>
              <List sx={{ paddingLeft: 2 }}>
                {item.keyAchievements.map((achievement, index) => (
                  <ListItem key={index} sx={{ padding: 0, marginBottom: 1 }}>
                    <ul style={{ paddingLeft: "20px", margin: 0 }}>
                      <li>{achievement}</li>
                    </ul>
                  </ListItem>
                ))}
              </List>
            </Box>
          )}

          {/* Additional Images */}
          {item.images && item.images.length > 0 && (
            <Grid container spacing={2}>
              {item.images.map((image, index) => (
                <Grid item xs={6} sm={6} md={4} key={index}>
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      overflow: "hidden",
                      borderRadius: "15px",
                    }}
                  >
                    <img
                      src={getImageUrl(image.asset._ref)} // Adjust URL resolution as needed
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
          <Typography
            sx={{ fontWeight: "bold", mb: 2, fontSize: "1.2rem", mt: 5 }}
          >
            Technologies Used:
          </Typography>
          <List sx={{ paddingLeft: 2 }}>
            {item.technologies.map((tech, index) => (
              <ListItem key={index} sx={{ padding: 0, marginBottom: 1 }}>
                <ul style={{ paddingLeft: "20px", margin: 0 }}>
                  <li>{tech}</li>
                </ul>
              </ListItem>
            ))}
          </List>

          {/* Experience the Design */}
          <Box sx={{ mt: 4 }}>
            <Typography sx={{ fontWeight: "bold", mb: 2, fontSize: "1.2rem" }}>
              Experience the project
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
