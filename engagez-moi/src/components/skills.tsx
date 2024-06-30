import * as React from 'react';
import { useState } from 'react';
import { Box, Card, CardContent, Typography, LinearProgress, Grid, Select, MenuItem, InputLabel, FormControl, Avatar, SelectChangeEvent } from '@mui/material';

const skills = [
    { name: 'InDesign', percentage: 90, logo: 'images/indesign.png', category: 'Design' },
    { name: 'Illustrator', percentage: 85, logo: 'images/adobe-illustrator.png', category: 'Design' },
    { name: 'Photoshop', percentage: 88, logo: 'images/photoshop.png', category: 'Design' },
    { name: 'Adobe Acrobat', percentage: 80, logo: 'images/acrobate.png', category: 'Design' },
    { name: 'JavaScript', percentage: 75, logo: 'images/js.png', category: 'Development' },
    { name: 'TypeScript', percentage: 75, logo: 'images/typescript.png', category: 'Development' },
    { name: 'HTML', percentage: 95, logo: 'images/html.png', category: 'Development' },
    { name: 'CSS', percentage: 85, logo: 'images/css.png', category: 'Development' },
    { name: 'Docker', percentage: 70, logo: 'images/docker.png', category: 'Development' },
    { name: 'Figma', percentage: 80, logo: 'images/figma.png', category: 'Design' },
    { name: 'C++', percentage: 65, logo: 'images/c-logo.png', category: 'Development' },
    { name: 'C', percentage: 60, logo: 'images/c.png', category: 'Development' },
    { name: 'React', percentage: 70, logo: 'images/react.png', category: 'Development' },
    { name: 'PHP', percentage: 75, logo: 'images/php.png', category: 'Development' },
    { name: 'Tailwind', percentage: 80, logo: 'images/tailwind.png', category: 'Development' },
    { name: 'Next.js', percentage: 70, logo: 'images/next-js.svg', category: 'Development' }
  ];

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
        {filteredSkills.map((skill, index) => (
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
