import React from 'react';
import { Card, CardContent, CardHeader, Typography, Grid, Container, Chip, Avatar, Button, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

type Technology = 'JavaScript' | 'Docker' | 'C++' | 'C' | 'Django' | 'NGINX' | 'WordPress' | 'MariaDB' | 'Unix';

const projects = [
  {
    title: "TRANSCENDENCE - WEBSITE AVEC UN PONG MULTIJOUEUR",
    description: "Développement d’un site de jeu Pong multijoueur, avec un frontend en JavaScript natif, implémentant une structure inspirée de React sans utiliser de framework. Backend géré par Django, permettant interactions et jeu en temps réel entre utilisateurs.",
    category: "Web",
    technologies: ["JavaScript", "Django"] as Technology[],
    repoLink: "https://github.com/yourusername/transcendence",
    pdfLink: "https://github.com/yourusername/transcendence/blob/main/docs/Transcendence.pdf"
  },
  {
    title: "INCEPTION - INFRASTRUCTURE WEB SÉCURISÉE AVEC DOCKER",
    description: "Configuration de services Dockerisés sur VM personnelle pour un système de gestion web intégral incluant NGINX avec TLS, WordPress via php-fpm, et MariaDB, assurant interconnectivité et redémarrage automatique sur incident.",
    category: "Web",
    technologies: ["Docker", "NGINX", "WordPress", "MariaDB"] as Technology[],
    repoLink: "https://github.com/garenaud/Inception",
    pdfLink: "https://github.com/garenaud/Inception/blob/main/Inception.subject.pdf"
  },
  {
    title: "IRC - SERVEUR IRC EN C++98",
    description: "Développement d’un serveur conforme aux standards IRC, capable de gérer la connexion simultanée de multiples clients, authentification, et commandes de chat, sans blocage ni fork.",
    category: "C++",
    technologies: ["C++"] as Technology[],
    repoLink: "https://github.com/garenaud/FT_IRC",
    pdfLink: "https://github.com/garenaud/FT_IRC/blob/master/IRC.subject.pdf"
  },
  {
    title: "MINIRT - RAYTRACER EN C AVEC MINILIBX",
    description: "Responsable du parsing des scènes et co-développeur des fonctions mathématiques, en peer-programming, pour le rendu d'images 3D générées par ordinateur.",
    category: "C",
    technologies: ["C"] as Technology[],
    repoLink: "https://github.com/garenaud/MiniRT",
    pdfLink: "https://github.com/garenaud/MiniRT/blob/master/ReadmeFiles/MiniRT.subject.pdf"
  },
  {
    title: "MINISHELL - SHELL TYPE BASH EN C",
    description: "Développement et gestion de l'exécution via execve et implémentation des commandes internes (builtins) comme cd, pwd, echo. Gestion fine des processus et des signaux dans un environnement Unix.",
    category: "C",
    technologies: ["C", "Unix"] as Technology[],
    repoLink: "https://github.com/garenaud/Minishell",
    pdfLink: "https://github.com/garenaud/Minishell/blob/master/Minishell.subject.pdf"
  }
];

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

const Projects = () => {
  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Projets
      </Typography>
      <Grid container spacing={2}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card>
              <CardHeader title={project.title} subheader={project.category} />
              <CardContent>
                <Typography variant="body2" color="text.primary" paragraph>
                  {project.description}
                </Typography>
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
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
