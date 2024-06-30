import * as React from 'react';
import { useState } from 'react';
import { Box, Card, CardContent, Typography, LinearProgress, Grid, Select, MenuItem, InputLabel, FormControl, Avatar, SelectChangeEvent } from '@mui/material';
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
    <Box sx={{ flexGrow: 1, padding: 2 }}>
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
      <Grid container spacing={2}>
        {filteredSkills.map((skill: any, index: number) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
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
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
