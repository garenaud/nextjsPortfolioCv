import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
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

type GraphicWork = {
  title: string;
  image: string;
  description: string;
  type: string;
};

const GraphicPortfolio = () => {
  const [graphicWorks, setGraphicWorks] = useState<GraphicWork[]>([]);
  const [filter, setFilter] = useState<string>('Tous');
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

  return (
    <Paper elevation={3} sx={{ padding: 2, height: '100%', overflowY: 'auto' }}>
      <Container>
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
        <Grid container spacing={2} sx={{ maxHeight: '100%', overflowY: 'auto' }}>
          {filteredWorks.map((work, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card onClick={() => handleOpenModal(work)} sx={{ cursor: 'pointer' }}>
                {work.image.endsWith('.pdf') ? (
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {work.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {work.description}
                    </Typography>
                    <a href={work.image} target="_blank" rel="noopener noreferrer">
                      Voir le PDF
                    </a>
                  </CardContent>
                ) : (
                  <>
                    <CardMedia
                      component="img"
                      height="200"
                      image={work.image}
                      alt={work.title}
                    />
                    <CardContent>
                      <Typography variant="h6" component="div">
                        {work.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {work.description}
                      </Typography>
                    </CardContent>
                  </>
                )}
              </Card>
            </Grid>
          ))}
        </Grid>
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
      </Container>
    </Paper>
  );
};

export default GraphicPortfolio;
