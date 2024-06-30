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

export default function About() {
  return (
    <Layout>
      <Container>
        <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
            <Storytelling />
          </Grid>
          <Grid item xs={12} md={6}>
          <Image
              src="/images/meMain.webp" 
              alt="Description de l'image" 
              width={500}
              height={300}
              layout="intrinsic"
            />
            <Hobbies />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant='h2' color="primary" gutterBottom>Mon expérience</Typography>
            <ExperienceTimeline />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant='h2' color="primary" gutterBottom>Mes formations</Typography>
            <Formations />
            <Hobbies />
          </Grid>
          <Grid item xs={12}>
            <Skills />
          </Grid>
          <Grid item xs={12}>
            <Projects />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
