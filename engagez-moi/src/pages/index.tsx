import React from 'react';
import Layout from '@/components/layout';
import ExampleComponent from '@/components/component';
import Button from '@mui/material/Button';

const Home: React.FC = () => {
  return (
    <Layout>
      <h1>Engagez-moi vite s'il-vous-plait</h1>
      <ExampleComponent message="Hello from ExampleComponent!" />
      <Button variant="contained" color="primary">
        Cliquez moi
      </Button>
    </Layout>
  );
};

export default Home;