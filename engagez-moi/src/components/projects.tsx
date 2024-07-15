import React, { useEffect, useState } from 'react';
import { Box, Typography, Card, CardContent, CardHeader, Grid, Chip, Avatar, Button, Container, CardActions } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

type Technology = 'JavaScript' | 'Docker' | 'C++' | 'C' | 'Django' | 'NGINX' | 'WordPress' | 'MariaDB' | 'Unix';

interface Project {
  title: string;
  description: string;
  category: string;
  technologies: Technology[];
  repoLink: string;
  pdfLink: string;
  image: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('/projects.json');
      const data = await response.json();
      setProjects(data);
    };

    fetchProjects();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(4, projects.length),
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20px',
    initialSlide: Math.floor(projects.length / 2),
    nextArrow: <div>Next</div>,
    prevArrow: <div>Previous</div>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(2, projects.length),
          slidesToScroll: 1,
          centerPadding: '20px',
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: Math.min(1, projects.length),
          slidesToScroll: 1,
          centerPadding: '20px',
        },
      },
    ],
  };

  const technologyIcons: Record<Technology, string> = {
    "JavaScript": "/images/js.png",
    "Docker": "/images/docker.png",
    "C++": "/images/c-logo.png",
    "C": "/images/c.png",
    "Django": "/images/django.png",
    "NGINX": "/images/nginx.png",
    "WordPress": "/images/Wordpress.png",
    "MariaDB": "/images/mariadb.svg",
    "Unix": "/images/unix.png"
  };

  return (
    <Container disableGutters maxWidth={false}>
      <Typography variant="subtitle1" color="primary" gutterBottom>
        Projets
      </Typography>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <Box
            key={index}
            sx={{
              paddingX: 1,
              margin: '10px', // Ajout d'une marge ici
              width: '300px',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Card
              sx={{
                minWidth: 300,
                maxWidth: 345,
                height: 450,
                borderRadius: 4,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                margin: '10px', // Ajout d'une marge ici
              }}
            >
              <CardHeader title={project.title} subheader={project.category} />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="body2" color="text.primary" paragraph>
                  {project.description}
                </Typography>
              </CardContent>
              <Box sx={{ paddingX: 2, paddingBottom: 2 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Technologies utilisées:
                </Typography>
                <Grid container spacing={1} sx={{ marginBottom: 2 }}>
                  {project.technologies.map((tech, idx) => (
                    <Grid item key={idx}>
                      <Chip
                        avatar={
                          <Avatar
                            src={technologyIcons[tech]}
                            sx={{ width: 24, height: 24 }}
                          />
                        }
                        label={tech}
                        variant="outlined"
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
              <CardActions>
                <Grid container spacing={1}>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<GitHubIcon />}
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Repo GitHub
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="outlined"
                      color="secondary"
                      startIcon={<PictureAsPdfIcon />}
                      href={project.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Voir le PDF
                    </Button>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Box>
        ))}
      </Slider>
    </Container>
  );
};

export default Projects;
