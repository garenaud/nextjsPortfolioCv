import React from 'react';
import Layout from '@/components/layout';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import theme from '@/styles/theme';

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
              layout="intrinsic"
            />
          </Grid>
          <Grid item xs={12} md={6} container direction="column" alignItems="center" justifyContent="center">
            <Image
              src="/images/LogoGbleu.svg" 
              alt="Description de l'image" 
              width={200}
              height={200}
            />
            <Typography variant='h1' color="primary" gutterBottom>allez</Typography>
            <Typography variant='body1' align='center' gutterBottom mb={5}>
              Je m&apos;appelle Gaëtan Renaud et je suis passionné par le design et le développement web.
              Ce CV interactif est conçu pour vous offrir un aperçu de mon parcours professionnel,
              de mes compétences et de mes expériences dans le domaine du design graphique
              et du développement informatique. Découvrez mes projets, mes compétences et les diverses
              étapes de ma carrière. Explorez mon univers et n&apos;hésitez pas à me contacter pour toute collaboration
              ou opportunité. <span style={{ color: theme.palette.primary.main }}>Texte avec la couleur primaire du thème</span>
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
console.log('theme depuis home', theme);
export default Home;
