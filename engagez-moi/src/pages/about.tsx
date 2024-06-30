import React from 'react';
import Image from 'next/image';
import Layout from '@/components/layout';
import ExperienceTimeline from '@/components/timeline';
import Skills from '@/components/skills';
import Formations from '@/components/formations';
import Hobbies from '@/components/hobbies';
import Projects from '@/components/projects';
import Storytelling from '@/components/storytelling';
import { Grid, Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';

const bgColor1: string = '#f1eadc';
const bgColor2: string = '#f9f4ea';

export default function About() {
  return (
    <Layout>
      <Box
        sx={{
          width: '100%',
          backgroundColor: bgColor1,
          py: 4, // padding vertical
        }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Storytelling />
            </Grid>
            <Grid item xs={12} md={6}>
              <Image
                src="/images/grenaud-Rond.png" 
                alt="Description de l'image" 
                width={500}
                height={300}
                layout="intrinsic"
              />
              <Hobbies />
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
        <Container>
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
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
              <Skills />
            </Grid>
            <Grid item xs={12} md={9}>
              <Projects />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
}
