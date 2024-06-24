import React from 'react';
import Layout from '@/components/layout';
import ExampleComponent from '@/components/component';
import Button from '@mui/material/Button';
import { firaCode } from '@/components/fonts';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <Layout>
      <h1 style={{fontFamily: firaCode.style.fontFamily}}>Engagez-moi</h1>
      <Image
        src="/images/developer-pic-1.png" // Chemin vers votre image
        alt="Description de l'image" // Texte alternatif pour l'image
        width={500} // Largeur de l'image
        height={300} // Hauteur de l'image
        layout='responsive'
      />
      <ExampleComponent message="Hello from ExampleComponent!" />
      <Button variant="contained" color="primary">
        Cliquez moi
      </Button>
    </Layout>
  );
};

export default Home;