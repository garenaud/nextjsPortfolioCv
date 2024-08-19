import React from 'react';
import Head from 'next/head';
import Layout from '@/components/layout';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SkillsGrid from '@/components/skillsGrid';
import Projects from '@/components/projects';
import GraphicPortfolio from '@/components/graphicPortfolio';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import SocialLinks from '@/components/social';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const bgColor1: string = '#f1eadc';
const bgColor2: string = '#f9f4ea';

const Home: React.FC = () => {
  const theme = useTheme();
  const { t } = useTranslation('common');
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Layout>
      <Head>
        <title>{t('title')}</title>
      </Head>
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
                    unoptimized
                    src={`/images/grenaud-Rond.png`}
                    alt="Description de l'image"
                    fill
                    />
                </Box>
                <SocialLinks />
              </Grid>
            )}
            <Grid item xs={12} md={6} container direction="column" justifyContent="center">
              <Typography variant='subtitle1' color="primary" gutterBottom mb={-2}>{t('name')}</Typography>
              <Typography variant='h1' color="secondary" gutterBottom mb={-3}>{t('jobTitle1')}</Typography>
              <Typography variant='h1' color="primary" gutterBottom ml={10}>{t('jobTitle2')}</Typography>
              <Typography variant='body1' gutterBottom mb={5}>
                {t('intro')}
              </Typography>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Link href="/about">
                    <Button variant="contained" color="primary">
                      {t('seeCvOnline')}
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
                    {t('downloadCv')}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            {!isXs && (
              <Grid item xs={12} md={6}>
                <Box sx={{ position: 'relative', width: '100%', height: 0, paddingBottom: '100%' }}>
                  <Image
                    unoptimized
                    src={`/images/grenaud-Rond.png`}
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
                      unoptimized
                      src={`/images/RecWebDev.webp`}
                      alt="Description de l'image"
                      fill
                    />
                  </Box>
                </Grid>
              )}
              <Typography variant='subtitle1' color="primary" gutterBottom mb={-2}>{t('aboutMe')}</Typography>
              <Typography variant='h1' color="secondary" gutterBottom mb={-3}>{t('careerChange1')}</Typography>
              <Typography variant='h1' color="primary" gutterBottom ml={5}>{t('careerChange2')}</Typography>
              <Typography variant='body1'>
                {t('reconvTxt')}
              </Typography>
              <Typography variant='body1'>
                {t('reconvTxt2')}
              </Typography>
              <Typography variant='subtitle1' color="primary" gutterBottom>Technologie</Typography>
              <SkillsGrid initialCategory='Development' />
            </Grid>
            {!isXs && (
              <Grid item xs={12} md={6}>
                <Box sx={{ position: 'relative', width: '100%', height: 0, paddingBottom: '100%' }}>
                  <Image
                    unoptimized
                    src={`/images/RecWebDev.webp`}
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
                    unoptimized
                    src={`/images/designCover.webp`}
                    alt="Description de l'image"
                    fill
                  />
                </Box>
              </Grid>
            )}
            <Grid item xs={12} md={6} container direction="column" justifyContent="center">
              <Typography variant='subtitle1' color="primary" gutterBottom mb={-2}>{t('UiDesign')}</Typography>
              <Typography variant='h1' color="secondary" gutterBottom mb={-3}>{t('experienceGra')}</Typography>
              <Typography variant='h1' color="primary" gutterBottom ml={10}>{t('experienceGra2')}</Typography>
              <Typography variant='body1' gutterBottom mb={5}>
                {t('graphicDesign')}
              </Typography>
              <Grid container spacing={2} justifyContent="center">
              </Grid>
              <Typography variant='subtitle1' color="primary" gutterBottom>{t('technology')}</Typography>
              <SkillsGrid initialCategory='Design' />
            </Grid>
            {!isXs && (
              <Grid item xs={12} md={6}>
                <Box sx={{ position: 'relative', width: '100%', height: 0, paddingBottom: '100%' }}>
                  <Image
                    unoptimized
                    src={`/images/designCover.webp`}
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
