import React from 'react';
import Layout from '@/components/layout';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import SkillsGrid from '@/components/skillsGrid';
import Paper from '@mui/material/Paper';
import theme from '@/styles/theme';
import { Palette } from '@mui/icons-material';

const bgColor1: string = '#f1eadc';
const bgColor2: string = '#f9f4ea';
const Home: React.FC = () => {
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
        <Grid container spacing={20} alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }}>
          <Grid item xs={12} md={6} container direction="column" justifyContent="center">
            <Typography variant='subtitle1' color="primary" gutterBottom mb={-2}>Gaëtan Renaud</Typography>
            <Typography variant='h1' color="secondary" gutterBottom mb={-3}>Junior</Typography>
            <Typography variant='h1' color="primary" gutterBottom ml={10}>Developper</Typography>
            <Typography variant='body1' gutterBottom mb={5}>
              Je m&apos;appelle Gaëtan Renaud et je suis passionné par le design et le développement web.
              Ce CV interactif est conçu pour vous offrir un aperçu de mon parcours professionnel,
              de mes compétences et de mes expériences dans le domaine du design graphique
              et du développement informatique. Découvrez mes projets, mes compétences et les diverses
              étapes de ma carrière. Explorez mon univers et n&apos;hésitez pas à me contacter pour toute collaboration
              ou opportunité.
            </Typography>
            <Link href="/about">
              <Button variant="contained" color="primary">
                Cliquez moi
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image
              src="/images/grenaud-Rond.png" 
              alt="Description de l'image" 
              width={1000}
              height={1000}
              layout="intrinsic"
            />
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
          <Grid xs={12} md={6}>
            <Typography variant='h5' color="primary" gutterBottom>A propos de moi</Typography>
            <Typography variant='h3' gutterBottom>Une reconversion dans le développement web</Typography>
            <Typography variant='body1'>
              Plus d'informations sur moi ici...
            </Typography>
            <Grid container spacing={2}>
              <Grid item>
                <Card sx={{ minWidth: 275, borderRadius: 4 }}>
                  <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      MA FORMATION
                    </Typography>
                    <Image src="/images/42_logo.svg" alt="42" width={150} height={150} />
                    <Typography variant="h5" component="div">
                      benevolent
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      adjective
                    </Typography>
                    <Typography variant="body2">
                      well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item>
                <SkillsGrid initialCategory='Development' />
                <Button variant="outlined" color="primary">
                  Télécharger mon CV
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={12} md={6}>

          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};
export default Home;
