import React from 'react';
import Layout from '@/components/layout';
import ExampleComponent from '@/components/component';

const Home: React.FC = () => {
  return (
    <Layout>
      <h1>Engagez-moi Portfolio</h1>
      <ExampleComponent message="Hello from ExampleComponent!" />
    </Layout>
  );
};

export default Home;
