import React, { useEffect, useState } from 'react';
import { Grid, Chip, Avatar, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import skillsData from '../../public/skills.json'; // Assurez-vous que le chemin est correct
import { SelectChangeEvent } from '@mui/material';

interface Skill {
  name: string;
  percentage: number;
  logo: string;
  category: string;
}

interface SkillsGridProps {
  initialCategory: string;
}

const categories = ['All', 'Design', 'Development'];

const SkillsGrid: React.FC<SkillsGridProps> = ({ initialCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    setSkills(skillsData);
  }, []);
  
  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    setSelectedCategory(event.target.value);
  };

  const filteredSkills = selectedCategory === 'All' ? skills : skills.filter(skill => skill.category === selectedCategory);

  return (
    <Container>
      <Grid container spacing={2}>
        {filteredSkills.map((skill, index) => (
          <Grid item key={index}>
            <Chip
              avatar={<Avatar src={skill.logo} sx={{ width: 24, height: 24 }} />}
              label={`${skill.name}`}
              variant="outlined"
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SkillsGrid;
