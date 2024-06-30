import React from 'react';
import Layout from '@/components/layout';
import ExperienceTimeline from '@/components/timeline';
import Skills from '@/components/skills';
import Formations from '@/components/formations';

export default function About() {
return (
  <Layout>
   <ExperienceTimeline />
   <Skills />
   <Formations />
  </Layout>
  );
};
