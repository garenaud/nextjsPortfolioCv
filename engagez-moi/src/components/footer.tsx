import React, { useState } from 'react';
import { Box, Container, Typography, Link, TextField, Button, Grid } from '@mui/material';
import SocialLinks from './social';
import emailjs from '@emailjs/browser';

const bgColor2: string = '#f9f4ea';

const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_name: 'Gaëtan Renaud' // Remplacez par le nom que vous souhaitez utiliser
    };

    emailjs.send('service_sqayfyp', 'template_pxfnork', templateParams, 'hVfdbJc3UgDOQRSEP')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message envoyé avec succès!');
        setName('');
        setEmail('');
        setMessage('');
      }, (error) => {
        console.log('FAILED...', error);
        alert('Une erreur est survenue, veuillez réessayer.');
      });
  };

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: bgColor2,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Contactez-moi
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                label="Nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Message"
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Envoyer
              </Button>
            </Grid>
          </Grid>
        </form>
        <Box mt={4}>
          <SocialLinks />
        </Box>
        <Box mt={4} textAlign="center">
        <Typography variant="body1" color="text.secondary">
            Ce site a été créé avec React, Next.js et Material-UI. N'hésitez pas à aller voir le code source sur {' '}
            <Link href="https://github.com/garenaud/nextjsPortfolioCv" target="_blank" rel="noopener">
              mon repo GitHub
            </Link>.
          </Typography>
          <Typography variant="body1">
            Gaëtan Renaud, rue Neuve 9, 2314 La Sagne
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {'© '}
            <Link color="inherit" href="https://engagez-moi.com/">
              Gaëtan Renaud
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
