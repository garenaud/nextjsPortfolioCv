import React, { useEffect, useState } from 'react';
import { Box, Typography, Card, CardContent, Grid, Chip, Avatar, Button, Container, CardActions, CardMedia, Dialog, DialogContent } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import type { Settings } from 'react-slick';

export type Technology = 'JavaScript' | 'Docker' | 'C++' | 'C' | 'Django' | 'NGINX' | 'WordPress' | 'MariaDB' | 'Unix';

export interface Project {
  title: string;
  description: string;
  category: string;
  technologies: Technology[];
  repoLink?: string;
  pdfLink?: string;
  image: string;
}

const nonEmpty = (v?: string): v is string => typeof v === 'string' && v.trim().length > 0;

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [maxHeight, setMaxHeight] = useState<number | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/projects.json');
        const data = await response.json();
        setProjects(Array.isArray(data) ? data : []);
      } catch (e) {
        console.error('Impossible de charger projects.json', e);
        setProjects([]);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    if (projects.length) {
      const nodes = Array.from(document.getElementsByClassName('project-card')) as HTMLElement[];
      if (nodes.length) {
        const heights = nodes.map((card) => card.getBoundingClientRect().height);
        setMaxHeight(Math.max(...heights));
      }
    }
  }, [projects]);

  const handleClickOpen = (image: string) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  const slidesToShowBase = projects.length === 0 ? 1 : Math.min(4, projects.length);
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShowBase,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20px',
    initialSlide: projects.length ? Math.floor(projects.length / 2) : 0,
    nextArrow: <div>Next</div>,
    prevArrow: <div>Previous</div>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: projects.length ? Math.min(2, projects.length) : 1,
          slidesToScroll: 1,
          centerPadding: '20px',
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '20px',
        },
      },
    ],
  } ;

  const technologyIcons: Record<Technology, string> = {
    JavaScript: '/images/js.png',
    Docker: '/images/docker.png',
    'C++': '/images/c-logo.png',
    C: '/images/c.png',
    Django: '/images/django.png',
    NGINX: '/images/nginx.png',
    WordPress: '/images/Wordpress.png',
    MariaDB: '/images/mariadb.svg',
    Unix: '/images/unix.png',
  };

  return (
    <Container disableGutters maxWidth={false}>
      <Typography variant="subtitle1" color="primary" gutterBottom>
        Projets
      </Typography>

      <Slider {...settings}>
        {projects.map((project, index) => {
          return (
            <Box
              key={index}
              sx={{
                paddingX: 1,
                margin: '10px',
                width: '300px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Card
                className="project-card"
                sx={{
                  minWidth: 300,
                  maxWidth: 345,
                  height: maxHeight ? `${maxHeight}px` : 'auto',
                  borderRadius: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  margin: '10px',
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    onClick={() => handleClickOpen(project.image)}
                    sx={{ cursor: 'pointer' }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 10,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      textAlign: 'center',
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      padding: '4px 8px',
                      borderRadius: '4px',
                    }}
                  >
                    <Typography variant="h6">{project.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.category}
                    </Typography>
                  </Box>
                </Box>

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="body2" color="text.primary" paragraph>
                    {project.description}
                  </Typography>

                  {Array.isArray(project.technologies) && project.technologies.length > 0 && (
                    <>
                      <Typography variant="subtitle2" gutterBottom>
                        Technologies utilisées:
                      </Typography>
                      <Grid container spacing={1} sx={{ marginBottom: 2 }}>
                        {project.technologies.map((tech, idx) => (
                          <Grid item key={idx}>
                            <Chip
                              avatar={<Avatar src={technologyIcons[tech]} sx={{ width: 24, height: 24 }} />}
                              label={tech}
                              variant="outlined"
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </>
                  )}
                </CardContent>

                {(nonEmpty(project.repoLink) || nonEmpty(project.pdfLink)) && (
                  <Box sx={{ paddingX: 2, paddingBottom: 2 }}>
                    <CardActions sx={{ marginTop: 'auto' }}>
                      <Grid container spacing={1}>
                        {nonEmpty(project.repoLink) && (
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
                        )}

                        {nonEmpty(project.pdfLink) && (
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
                        )}
                      </Grid>
                    </CardActions>
                  </Box>
                )}
              </Card>
            </Box>
          );
        })}
      </Slider>

      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <DialogContent>
          {selectedImage && (
            <img src={selectedImage} alt="Selected Project" style={{ width: '100%', height: 'auto' }} />
          )}
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default Projects;
