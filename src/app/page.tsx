"use client";

import { Grid, Stack, Typography, Container, Box, Paper } from '@mui/material';
import React from "react";
import styles from "../css/page.module.css";

const Home = () => {
  return (
    <Box
      className={styles.page}
      sx={{
        minHeight: '100vh',
        py: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
        >
          {/* Left Section - Profile */}
          <Grid item xs={12} md={6}>
            <Stack spacing={4} alignItems="center">
              <Box sx={{ textAlign: 'center' }}>
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 'bold',
                    mb: 2,
                    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Hello, I&apos;m Sarus
                </Typography>
                <Typography variant="h5" color="text.secondary" gutterBottom>
                  Full Stack Developer & UI/UX Designer
                </Typography>
              </Box>

              <Paper elevation={3} sx={{ p: 3, borderRadius: 2, width: '100%', textAlign: 'center' }}>
                <Typography variant="body1" paragraph>
                  I craft responsive websites where technologies meet creativity.
                  With a strong focus on user experience and modern design patterns.
                </Typography>
              </Paper>
            </Stack>
          </Grid>

          {/* Right Section - Skills/Projects Preview */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={6}
              sx={{
                p: 4,
                borderRadius: 4,
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                textAlign: 'center'
              }}
            >
              <Stack spacing={3} alignItems="center">
                <Typography variant="h4" gutterBottom>
                  Skills & Expertise
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                  {['React', 'TypeScript', 'Node.js', 'UI/UX'].map((skill) => (
                    <Grid item key={skill}>
                      <Paper
                        sx={{
                          px: 2,
                          py: 1,
                          background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                          color: 'white'
                        }}
                      >
                        <Typography>{skill}</Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
