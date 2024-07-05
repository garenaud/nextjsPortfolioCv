import React, { useEffect, useState } from 'react';
import { Grid, Chip, Avatar, Container } from '@mui/material';
import skillsData from '../../public/skills.json'; // Assurez-vous que le chemin est correct

interface Skill {
  name: string;
  percentage: number;
  logo: string;
  category: string;
}

interface SkillsGridProps {
  initialCategory: string;
}

const SkillsGrid: React.FC<SkillsGridProps> = ({ initialCategory }) => {
  const [selectedCategory] = useState<string>(initialCategory);
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    setSkills(skillsData);
  }, []);

  const filteredSkills = selectedCategory === 'All' ? skills : skills.filter(skill => skill.category === selectedCategory);

  return (
    <Container>
      <Grid container spacing={2}>
        {filteredSkills.map((skill, index) => (
          <Grid item key={index}>
            <Chip
              avatar={<Avatar src={`${skill.logo}`} sx={{ width: 24, height: 24 }} />}
              label={`${skill.name}`}
              variant="outlined"
              sx={{ backgroundColor: 'white' }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SkillsGrid;
