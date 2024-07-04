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
import Projects from '@/components/projects';
import GraphicPortfolio from '@/components/graphicPortfolio';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import SocialLinks from '@/components/social';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Margin } from '@mui/icons-material';

const bgColor1: string = '#f1eadc';
const bgColor2: string = '#f9f4ea';

const Home: React.FC = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Layout>
      <Box
        sx={{
          width: '100%',
          backgroundColor: bgColor1,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            {isXs && (
              <Grid item xs={12}>
                <Box sx={{ position: 'relative', width: '100%', height: 0, paddingBottom: '100%' }}>
                  <Image
                    src="/images/grenaud-Rond.png"
                    alt="Description de l'image"
                    fill
                  />
                </Box>
                <SocialLinks />
              </Grid>
            )}
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
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Link href="/about">
                    <Button variant="contained" color="primary">
                      Voir mon cv en ligne
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<PictureAsPdfIcon />}
                    href="/CV-Grenaud-JuniorDev.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    télécharger le CV
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            {!isXs && (
              <Grid item xs={12} md={6}>
                <Box sx={{ position: 'relative', width: '100%', height: 0, paddingBottom: '100%' }}>
                  <Image
                    src="/images/grenaud-Rond.png"
                    alt="Description de l'image"
                    fill
                  />
                </Box>
                <SocialLinks />
              </Grid>
            )}
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
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              {isXs && (
                <Grid item xs={12}>
                  <Box sx={{ position: 'relative', width: '100%', height: 0, paddingBottom: '100%' }}>
                    <Image
                      src="/images/RecWebDev.webp"
                      alt="Description de l'image"
                      fill
                    />
                  </Box>
                </Grid>
              )}
              <Typography variant='subtitle1' color="primary" gutterBottom mb={-2}>A propos de moi</Typography>
              <Typography variant='h1' color="secondary" gutterBottom mb={-3}>Reconversion</Typography>
              <Typography variant='h1' color="primary" gutterBottom ml={5}>en développeur</Typography>
              <Typography variant='body1'>
                Fort de plus de 15 ans d'expérience dans le domaine du graphisme, j'ai décidé de me réorienter vers le développement web après avoir été sélectionné à l'école 42. Bien que je maîtrisais déjà le HTML et le CSS, mes débuts avec le JavaScript étaient plus laborieux. Cependant, grâce à un parcours intensif d'un an en C et C++, j'ai retrouvé du plaisir à travailler sur des projets web, notamment en JavaScript vanilla.
              </Typography>
              <Typography variant='body1'>
                Mon dernier projet m'a permis de créer un mini-framework frontend, me donnant ainsi une base solide pour explorer les frameworks modernes. Désormais, je m'épanouis pleinement dans le développement web, tant sur le frontend que sur le backend. Je suis curieux et j'aspire à rejoindre une équipe où je pourrais continuer à apprendre et à prouver mes compétences.
              </Typography>
              <Typography variant='subtitle1' color="primary" gutterBottom>Technologie</Typography>
              <SkillsGrid initialCategory='Development' />
            </Grid>
            {!isXs && (
              <Grid item xs={12} md={6}>
                <Box sx={{ position: 'relative', width: '100%', height: 0, paddingBottom: '100%' }}>
                  <Image
                    src="/images/RecWebDev.webp"
                    alt="Description de l'image"
                    fill
                  />
                </Box>
              </Grid>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <Projects />
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
          <Grid container spacing={2} justifyContent="center">
            {isXs && (
              <Grid item xs={12}>
                <Box sx={{ position: 'relative', width: '100%', height: 0, paddingBottom: '100%' }}>
                  <Image
                    src="/images/designCover.webp"
                    alt="Description de l'image"
                    fill
                  />
                </Box>
              </Grid>
            )}
            <Grid item xs={12} md={6} container direction="column" justifyContent="center">
              <Typography variant='subtitle1' color="primary" gutterBottom mb={-2}>UI Designer</Typography>
              <Typography variant='h1' color="secondary" gutterBottom mb={-3}>Expérience</Typography>
              <Typography variant='h1' color="primary" gutterBottom ml={10}>de graphiste</Typography>
              <Typography variant='body1' gutterBottom mb={5}>
                Avec plus de 15 ans d'expérience dans le graphisme, j'ai travaillé dans divers secteurs en tant que polygraphe et UI designer. J'ai conçu des interfaces utilisateur pour des applications, créé des logos, icônes, et divers supports publicitaires. Mon parcours inclut des missions de mise en page, de traitement d'images, et de gestion de production. Mes compétences incluent l'utilisation d'outils comme InDesign, Illustrator, et Photoshop, ainsi que la communication efficace avec les développeurs pour améliorer l'expérience utilisateur. Mon approche créative et polyvalente m'a permis de m'adapter à différents projets et environnements professionnels.
              </Typography>
              <Grid container spacing={2} justifyContent="center">
              </Grid>
              <Typography variant='subtitle1' color="primary" gutterBottom>Technologie</Typography>
              <SkillsGrid initialCategory='Design' />
            </Grid>
            {!isXs && (
              <Grid item xs={12} md={6}>
                <Box sx={{ position: 'relative', width: '100%', height: 0, paddingBottom: '100%' }}>
                  <Image
                    src="/images/designCover.webp"
                    alt="Description de l'image"
                    fill
                  />
                </Box>
              </Grid>
            )}
          </Grid>
            <Grid item>
              <GraphicPortfolio />
            </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export default Home;
