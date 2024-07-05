import React, { useState, useEffect } from 'react';
import {
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Paper,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Box
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

type GraphicWork = {
  title: string;
  image: string;
  description: string;
  type: string;
};

const GraphicPortfolio = () => {
  const [graphicWorks, setGraphicWorks] = useState<GraphicWork[]>([]);
  const [filter, setFilter] = useState<string>('Logo');
  const [selectedWork, setSelectedWork] = useState<GraphicWork | null>(null);

  useEffect(() => {
    const fetchGraphicWorks = async () => {
      const response = await fetch('/graphicPortfolio.json');
      const data = await response.json();
      setGraphicWorks(data);
    };
    
    fetchGraphicWorks();
  }, []);
  
  const handleFilterChange = (event: SelectChangeEvent<string>) => {
    setFilter(event.target.value);
  };

  const handleOpenModal = (work: GraphicWork) => {
    setSelectedWork(work);
  };

  const handleCloseModal = () => {
    setSelectedWork(null);
  };

  const filteredWorks = filter === 'Tous' ? graphicWorks : graphicWorks.filter(work => work.type === filter);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
      <Box>
        <Typography variant="subtitle1" color="primary" gutterBottom>
          Mon Portfolio de Graphisme
        </Typography>
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel id="filter-label">Filtrer par type</InputLabel>
          <Select
            labelId="filter-label"
            value={filter}
            onChange={handleFilterChange}
            label="Filtrer par type"
          >
            <MenuItem value="Tous">Tous</MenuItem>
            <MenuItem value="journal">Journal</MenuItem>
            <MenuItem value="feuillet">Feuillet</MenuItem>
            <MenuItem value="Calendrier">Calendrier</MenuItem>
            <MenuItem value="Logo">Logo</MenuItem>
            {/* Ajoutez d'autres types ici */}
          </Select>
        </FormControl>
        <Box sx={{ maxWidth: '100%' }}>
          <Slider {...settings}>
            {filteredWorks.map((work, index) => (
              <Box key={index} sx={{ paddingX: 1 }}>
                <Paper
                  elevation={3}
                  onClick={() => handleOpenModal(work)}
                  sx={{
                    cursor: 'pointer',
                    height: '300px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                    margin: '2 auto',
                  }}
                >
                  {work.image.endsWith('.pdf') ? (
                    <Box sx={{ padding: 2 }}>
                      <Typography variant="h6" component="div">
                        {work.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {work.description}
                      </Typography>
                      <a href={work.image} target="_blank" rel="noopener noreferrer">
                        Voir le PDF
                      </a>
                    </Box>
                  ) : (
                    <img
                      src={work.image}
                      alt={work.title}
                      style={{ maxHeight: '100%', maxWidth: '100%' }}
                    />
                  )}
                </Paper>
              </Box>
            ))}
          </Slider>
        </Box>
        <Dialog open={!!selectedWork} onClose={handleCloseModal} maxWidth="md" fullWidth>
          <DialogTitle>
            {selectedWork?.title}
            <IconButton
              aria-label="close"
              onClick={handleCloseModal}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            {selectedWork?.image.endsWith('.pdf') ? (
              <iframe
                src={selectedWork.image}
                title={selectedWork.title}
                width="100%"
                height="600px"
              />
            ) : (
              <img
                src={selectedWork?.image}
                alt={selectedWork?.title}
                style={{ width: '100%', height: 'auto' }}
              />
            )}
            <Typography variant="body2" color="text.secondary" sx={{ marginTop: 2 }}>
              {selectedWork?.description}
            </Typography>
          </DialogContent>
        </Dialog>
      </Box>
  );
};

export default GraphicPortfolio;
