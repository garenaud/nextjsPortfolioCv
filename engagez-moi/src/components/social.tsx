import React from 'react';
import { Box, IconButton, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const SocialLinks = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
        mt: 2,
      }}
    >
      <Link href="https://www.linkedin.com/in/gaetan-renaud/" target="_blank" rel="noopener">
        <IconButton>
          <LinkedInIcon fontSize="large" />
        </IconButton>
      </Link>
      <Link href="https://github.com/garenaud/" target="_blank" rel="noopener">
        <IconButton>
          <GitHubIcon fontSize="large" />
        </IconButton>
      </Link>
    </Box>
  );
};

export default SocialLinks;
