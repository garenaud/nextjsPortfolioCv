import React from 'react';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';

const Formations = () => {
  const formations = [
    {
      title: "École de Développement 42",
      subtitle: "42 Lausanne",
      date: "Novembre 2021",
      description: ""
    },
    {
      title: "Multimedia Studies (Web Design)",
      subtitle: "College of Marin (USA)",
      date: "2018 - 2020",
      description: ""
    },
    {
      title: "Apprentissage de Polygraphe",
      subtitle: "Imprimerie Gasser, Le Locle",
      date: "2002 - 2006",
      description: ""
    },
    {
      title: "Anglais",
      subtitle: "College of Marin",
      date: "01/2018 - 05/2018",
      description: ""
    },
    {
      title: "Anglais",
      subtitle: "EF Chicago",
      date: "09/2017 - 12/2017",
      description: ""
    },
    {
      title: "Anglais",
      subtitle: "Eurocentres London",
      date: "04/2017 - 07/2017",
      description: ""
    },
  ];

  return (
    <div>
      {formations.map((formation, index) => (
        <Card key={index} sx={{ marginBottom: 2 }}>
          <CardHeader
            title={formation.title}
            subheader={`${formation.subtitle} • ${formation.date}`}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {formation.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Formations;
