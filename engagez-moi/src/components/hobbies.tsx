import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Typography, Box } from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import ComputerIcon from '@mui/icons-material/Computer';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SportsIcon from '@mui/icons-material/Sports';
import HikingIcon from '@mui/icons-material/Hiking';
import SchoolIcon from '@mui/icons-material/School';
import EventIcon from '@mui/icons-material/Event';

const hobbies = [
  { icon: <MusicNoteIcon />, text: 'Musique' },
  { icon: <ComputerIcon />, text: 'Nouvelles technologies' },
  { icon: <SportsEsportsIcon />, text: 'Game design' },
  { icon: <SportsIcon />, text: 'Arbitre pour Swissunihockey' },
  { icon: <HikingIcon />, text: 'Brevet JS Moniteur Sport de camp/Trekking' },
  { icon: <SportsIcon />, text: 'Brevet JS Moniteur Unihockey' },
  { icon: <SchoolIcon />, text: 'Tuteur école 42' },
  { icon: <EventIcon />, text: 'Organisateur course de caisse à savon' },
];

const Hobbies = () => {
  return (
    <Box sx={{ marginTop: 2 }}>
      <Typography variant="h5" gutterBottom>
        Centre d'Intérêts
      </Typography>
      <List>
        {hobbies.map((hobby, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              {hobby.icon}
            </ListItemIcon>
            <ListItemText primary={hobby.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Hobbies;
