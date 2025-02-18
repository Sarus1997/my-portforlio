"use client";

import React from "react";
import {
  Grid,
  Stack,
  Typography,
  Container,
  Box,
  Paper,
  Button,
  Chip,
  IconButton,
  useTheme,
} from "@mui/material";
import {
  Code as CodeIcon,
  Brush as DesignIcon,
  Storage as BackendIcon,
  Language as WebIcon,
  Description as ResumeIcon,  // Importing the Description icon
} from "@mui/icons-material";

const skills = [
  { name: "Frontend Development", icon: <WebIcon /> },
  { name: "UI/UX Design", icon: <DesignIcon /> },
  { name: "Backend Development", icon: <BackendIcon /> },
  { name: "Clean Code", icon: <CodeIcon /> },
];

const technologies = [
  "React",
  "TypeScript",
  "Node.js",
  "Next.js",
  "Material-UI",
  "MongoDB",
];

const Home = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center" justifyContent="center">
          {/* Left Section - Profile */}
          <Grid item xs={12} md={6}>
            <Stack spacing={4}>
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    mb: 2,
                    background: `linear-gradient(45deg, ${theme.palette.common.white} 30%, ${theme.palette.primary.light} 90%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textAlign: "center",
                  }}
                >
                  Hello, I&apos;m Sarus
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ color: "rgba(255, 255, 255, 0.8)", textAlign: "center" }}
                  gutterBottom
                >
                  Full Stack Developer & UI/UX Designer
                </Typography>
              </Box>

              <Paper
                elevation={6}
                sx={{
                  p: 4,
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  borderRadius: 4,
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ color: "rgba(255, 255, 255, 0.8)" }}
                  paragraph
                >
                  I craft responsive websites where technologies meet creativity.
                  With a strong focus on user experience and modern design
                  patterns, I bring ideas to life in the digital world.
                </Typography>
              </Paper>

              <Stack direction="row" spacing={2} justifyContent="center">
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.light} 90%)`,
                    color: "white",
                    px: 4,
                  }}
                >
                  <ResumeIcon sx={{ mr: 1 }} /> {/* Add icon here */}
                  Resume
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: "rgba(255, 255, 255, 0.3)",
                    color: "white",
                    px: 4,
                    "&:hover": {
                      borderColor: "white",
                      background: "rgba(255, 255, 255, 0.05)",
                    },
                  }}
                >
                  Contact Me
                </Button>
              </Stack>
            </Stack>
          </Grid>

          {/* Right Section - Skills */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={6}
              sx={{
                p: 4,
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                borderRadius: 4,
              }}
            >
              <Stack spacing={4}>
                <Typography variant="h4" color="white" gutterBottom>
                  Skills & Expertise
                </Typography>

                <Grid container spacing={2}>
                  {skills.map((skill) => (
                    <Grid item xs={6} key={skill.name}>
                      <Paper
                        sx={{
                          p: 2,
                          background: "rgba(255, 255, 255, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                        }}
                      >
                        <IconButton
                          sx={{ color: theme.palette.primary.light }}
                          size="small"
                        >
                          {skill.icon}
                        </IconButton>
                        <Typography color="white" variant="body2">
                          {skill.name}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {technologies.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      sx={{
                        background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.light} 90%)`,
                        color: "white",
                      }}
                    />
                  ))}
                </Box>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
