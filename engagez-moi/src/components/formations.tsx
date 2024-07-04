import React, { useState } from 'react';
import { Card, CardContent, CardHeader, Typography, Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';

const Formations = () => {
  const [category, setCategory] = useState('All');
  const formations = [
    {
      title: "École de Développement 42",
      subtitle: "42 Lausanne",
      date: "Novembre 2021",
      category: "Développement",
      description: ""
    },
    {
      title: "Multimedia Studies (Web Design)",
      subtitle: "College of Marin (USA)",
      date: "2018 - 2020",
      category: "Design",
      description: ""
    },
    {
      title: "Apprentissage de Polygraphe",
      subtitle: "Imprimerie Gasser, Le Locle",
      date: "2002 - 2006",
      category: "Design",
      description: ""
    },
    {
      title: "Anglais",
      subtitle: "College of Marin",
      date: "01/2018 - 05/2018",
      category: "Langues",
      description: ""
    },
    {
      title: "Anglais",
      subtitle: "EF Chicago",
      date: "09/2017 - 12/2017",
      category: "Langues",
      description: ""
    },
    {
      title: "Anglais",
      subtitle: "Eurocentres London",
      date: "04/2017 - 07/2017",
      category: "Langues",
      description: ""
    },
  ];

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  const filteredFormations = category === 'All' ? formations : formations.filter(formation => formation.category === category);

  return (
    <div>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel id="category-select-label">Catégorie</InputLabel>
        <Select
          labelId="category-select-label"
          value={category}
          onChange={handleCategoryChange}
        >
          <MenuItem value="All">Toutes</MenuItem>
          <MenuItem value="Développement">Développement</MenuItem>
          <MenuItem value="Design">Design</MenuItem>
          <MenuItem value="Langues">Langues</MenuItem>
        </Select>
      </FormControl>
      {filteredFormations.map((formation, index) => (
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
};

export default Formations;
