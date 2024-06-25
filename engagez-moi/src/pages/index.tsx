import React from 'react';
import Layout from '@/components/layout';
import ExampleComponent from '@/components/component';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
//import { Open_Sans, Average_Sans } from 'next/font/google';

const Home: React.FC = () => {
  return (
    <Layout>
      <Container maxWidth="xl">
        <Grid container spacing={2} alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }}>
          <Grid item xs={12} md={6}>
            <Image
              src="/images/developer-pic-1.png" 
              alt="Description de l'image" 
              width={500}
              height={300}
              layout="responsive"
            />
          </Grid>
          <Grid item xs={12} md={6} justifyContent="center" >
            <Image
              src="/images/LogoGbleu.svg" 
              alt="Description de l'image" 
              width={200}
              height={200}
              //layout="responsive"
            />
            <Typography variant='h1' gutterBottom>Engagez-moi</Typography>
            <Typography variant='body1' gutterBottom>
              Je m'appelle Gaëtan Renaud et je suis passionné par le design et le développement web. 
              Ce CV interactif est conçu pour vous offrir un aperçu de mon parcours professionnel, 
              de mes compétences et de mes expériences dans le domaine du design graphique 
              et du développement informatique. Découvrez mes projets, mes compétences et les diverses 
              étapes de ma carrière. Explorez mon univers et n'hésitez pas à me contacter pour toute collaboration 
              ou opportunité.
            </Typography>
            <Link href="/about">
              <Button variant="contained" color="primary">
                Cliquez moi
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Home;
