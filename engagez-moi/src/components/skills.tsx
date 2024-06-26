import * as React from 'react';
import { useState } from 'react';
import { Box, Card, CardContent, Typography, LinearProgress, Select, MenuItem, InputLabel, FormControl, Avatar, SelectChangeEvent } from '@mui/material';
import skills from '../../public/skills.json'; // Assurez-vous que le chemin d'accès est correct

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    setSelectedCategory(event.target.value as string);
  };

  const filteredSkills = selectedCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <Box sx={{ padding: 2 }}>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="category-select-label">Catégorie</InputLabel>
        <Select
          labelId="category-select-label"
          id="category-select"
          value={selectedCategory}
          label="Catégorie"
          onChange={handleCategoryChange}
        >
          <MenuItem value="all">Toutes</MenuItem>
          <MenuItem value="Development">Développement</MenuItem>
          <MenuItem value="Design">Design</MenuItem>
        </Select>
      </FormControl>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        {filteredSkills.map((skill: any, index: number) => (
          <Box
            key={index}
            sx={{
              flex: '1 1 100%', // Full width on smaller screens
              '@media (min-width: 600px)': {
                flex: '1 1 calc(50% - 16px)', // Two columns on small screens
              },
              '@media (min-width: 900px)': {
                flex: '1 1 calc(33.33% - 16px)', // Three columns on medium screens and up
              },
              boxSizing: 'border-box',
            }}
          >
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar src={skill.logo} alt={skill.name} sx={{ mr: 2 }} />
                  <Typography variant="h6" component="div">
                    {skill.name}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ width: '100%', mr: 1 }}>
                    <LinearProgress variant="determinate" value={skill.percentage} />
                  </Box>
                  <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2" color="text.secondary">{`${skill.percentage}%`}</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
