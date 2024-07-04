import React from 'react';
import Image from 'next/image';
import Layout from '@/components/layout';
import ExperienceTimeline from '@/components/timeline';
import Skills from '@/components/skills';
import Formations from '@/components/formations';
import Hobbies from '@/components/hobbies';
import Projects from '@/components/projects';
import Storytelling from '@/components/storytelling';
import SocialLinks from '@/components/social';
import { Grid, Container, Typography, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';

const bgColor1: string = '#f1eadc';
const bgColor2: string = '#f9f4ea';

export default function About() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const basePath = process.env.basePath || '';

  return (
    <Layout>
      <Box
        sx={{
          width: '100%',
          backgroundColor: bgColor1,
          py: 4, // padding vertical
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            {isXs && (
              <Grid item xs={12}>
                <Box sx={{ position: 'relative', width: '100%', height: 0, paddingBottom: '100%', marginTop: -15 }}>
                  <Image
                    src={`${basePath}/images/grenaud-Rond.png`}
                    alt="Description de l'image"
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </Box>
                <SocialLinks />
                <Hobbies />
              </Grid>
            )}
            <Grid item xs={12} md={6}>
              <Storytelling />
            </Grid>
            {!isXs && (
              <Grid item xs={12} md={6}>
                <Box sx={{ position: 'relative', width: '100%', height: 0, paddingBottom: '100%', marginTop: -20 }}>
                  <Image
                    src={`${basePath}/images/grenaud-Rond.png`}
                    alt="Description de l'image"
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </Box>
                <SocialLinks />
                <Hobbies />
              </Grid>
            )}
            <Grid item xs={12} md={6}>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          width: '100%',
          backgroundColor: bgColor2,
          py: 4, // padding vertical
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography variant='h2' color="primary" gutterBottom>Mon expérience</Typography>
              <ExperienceTimeline />
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant='h2' color="primary" gutterBottom>Mes formations</Typography>
              <Formations />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          width: '100%',
          backgroundColor: bgColor1,
          py: 4, // padding vertical
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Typography variant='h2' color="primary" gutterBottom>Mes compétences</Typography>
              <Skills />
            </Grid>
            <Grid item xs={12} md={12}>
              <Projects />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
}
