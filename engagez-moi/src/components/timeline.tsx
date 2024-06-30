import * as React from 'react';
import { useState } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import experienceDataJson from '../../public/experience_fr.json';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const HoverableTimelineItem = styled(TimelineItem)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
    boxShadow: theme.shadows[2],
  },
}));

export default function ExperienceTimeline() {
  const [expanded, setExpanded] = useState<Array<boolean>>([false, false, false, false, false, false, false, false]);

  const handleExpandClick = (index: number) => {
    setExpanded(prevExpanded => {
      const newExpanded = [...prevExpanded];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };


  return (
    <Timeline position="alternate">
      <HoverableTimelineItem>
          <TimelineOppositeContent
            sx={{ mt: 1 }}
            align="right"
            variant="h6"
            color="text.secondary"
          >
            2002 - 2006
            <Typography variant="overline" display="block" sx={{mt: -1}}>
              Apprentissage de Polygraphe
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Imprimerie Gasser
            </Typography>
            <Typography variant="overline" display="block" sx={{mt: -1}}>
              2400 Le Locle
            </Typography>
            <ExpandMore
              expand={expanded[0]}
              onClick={() => handleExpandClick(0)}
              aria-expanded={expanded[0]}
              aria-label="show more"
              sx={{ mt: -1 }}
            >
              <ExpandMoreIcon />
            </ExpandMore>
            <Collapse in={expanded[0]} timeout="auto" unmountOnExit>
              <List sx={{ mt: -3 }}>
                <ListItem disableGutters>
                  <ListItemText primary="Communications avec les clients" />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText primary="Mise en page d’un journal hebdomadaire" />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText primary="Travaux de ville, Utilisation du CTP" />
                </ListItem>
              </List>
            </Collapse>
          </TimelineContent>
      </HoverableTimelineItem>

      <HoverableTimelineItem>
        <TimelineOppositeContent
          sx={{ mt: 1 }}
          variant="h6"
          color="text.secondary"
        >
          2006 - 2007
          <Typography variant="overline" display="block" sx={{mt: -1}}>
            Polygraphe
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <WorkIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Redatech
          </Typography>
          <Typography variant="overline" display="block" sx={{mt: -1}}>
            2300 La Chaux-de-Fonds
          </Typography>

          <ExpandMore
            expand={expanded[1]}
            onClick={() => handleExpandClick(1)}
            aria-expanded={expanded[1]}
            aria-label="show more"
            sx={{ mt: -1 }}
          >
            <ExpandMoreIcon />
          </ExpandMore>
          <Collapse in={expanded[1]} timeout="auto" unmountOnExit>
            <List sx={{ mt: 0, textAlign: 'right' }}>
              <ListItem disableGutters sx={{ justifyContent: 'flex-end' }}>
                <ListItemText primary="Mise en page de manuels technique" sx={{ textAlign: 'right' }} />
              </ListItem>
            </List>
          </Collapse>
        </TimelineContent>
      </HoverableTimelineItem>
      
      <HoverableTimelineItem>
        <TimelineOppositeContent
          sx={{ mt: 1 }}
          align="right"
          variant="h6"
          color="text.secondary"
        >
          2007 - 2008
          <Typography variant="overline" display="block" sx={{mt: -1}}>
            Polygraphe
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <WorkIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Imprimerie Contact
          </Typography>
          <Typography variant="overline" display="block" sx={{mt: -1}}>
            1260 Nyon
          </Typography>
          <ExpandMore
            expand={expanded[2]}
            onClick={() => handleExpandClick(2)}
            aria-expanded={expanded[2]}
            aria-label="show more"
            sx={{ mt: -1 }}
          >
            <ExpandMoreIcon />
          </ExpandMore>
          <Collapse in={expanded[2]} timeout="auto" unmountOnExit>
            <List sx={{ mt: 0 }}>
              <ListItem disableGutters>
                <ListItemText primary="Travaux de ville" />
              </ListItem>
            </List>
          </Collapse>
        </TimelineContent>
      </HoverableTimelineItem>

      <HoverableTimelineItem>
        <TimelineOppositeContent
          sx={{ mt: 1 }}
          variant="h6"
          color="text.secondary"
        >
          2008 - 2009
          <Typography variant="overline" display="block" sx={{mt: -1}}>
            Polygraphe
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <WorkIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Imprimerie Gessler
          </Typography>
          <Typography variant="overline" display="block" sx={{mt: -1}}>
            2013 Colombier
          </Typography>

          <ExpandMore
            expand={expanded[3]}
            onClick={() => handleExpandClick(3)}
            aria-expanded={expanded[3]}
            aria-label="show more"
            sx={{ mt: -1 }}
          >
            <ExpandMoreIcon />
          </ExpandMore>
          <Collapse in={expanded[3]} timeout="auto" unmountOnExit>
            <List sx={{ mt: 0, textAlign: 'right' }}>
              <ListItem disableGutters sx={{ justifyContent: 'flex-end' }}>
                <ListItemText primary="Communications avec les clients" sx={{ textAlign: 'right' }} />
              </ListItem>
              <ListItem disableGutters sx={{ justifyContent: 'flex-end' }}>
                <ListItemText primary="Mise en page d’un journal hebdomadaire" sx={{ textAlign: 'right' }} />
              </ListItem>
              <ListItem disableGutters sx={{ justifyContent: 'flex-end' }}>
                <ListItemText primary="Travaux de ville, Utilisation du CTP" sx={{ textAlign: 'right' }} />
              </ListItem>
            </List>
          </Collapse>
        </TimelineContent>
      </HoverableTimelineItem>

      <HoverableTimelineItem>
        <TimelineOppositeContent
          sx={{ mt: 1 }}
          align="right"
          variant="h6"
          color="text.secondary"
        >
          2010 - 2012
          <Typography variant="overline" display="block" sx={{mt: -1}}>
            Polygraphe
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <WorkIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Urech
          </Typography>
          <Typography variant="overline" display="block" sx={{mt: -1}}>
            2000 Neuchâtel
          </Typography>
          <ExpandMore
            expand={expanded[4]}
            onClick={() => handleExpandClick(4)}
            aria-expanded={expanded[4]}
            aria-label="show more"
            sx={{ mt: -1 }}
          >
            <ExpandMoreIcon />
          </ExpandMore>
          <Collapse in={expanded[4]} timeout="auto" unmountOnExit>
            <List sx={{ mt: 0 }}>
              <ListItem disableGutters>
                <ListItemText primary="Mise en page du catalogue de vente et dépliants en français et en allemand" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="Prises de vue de certains produits" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="Création de contenu pour le site internet" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="Réalisation de support publicitaires" />
              </ListItem>
            </List>
          </Collapse>
        </TimelineContent>
      </HoverableTimelineItem>

      <HoverableTimelineItem>
        <TimelineOppositeContent
          sx={{ mt: 1 }}
          variant="h6"
          color="text.secondary"
        >
          2012 - 2017
          <Typography variant="overline" display="block" sx={{mt: -1}}>
            Polygraphe
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <WorkIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            VAC
          </Typography>
          <Typography variant="overline" display="block" sx={{mt: -1}}>
            2300 La Chaux-de-Fonds
          </Typography>

          <ExpandMore
            expand={expanded[5]}
            onClick={() => handleExpandClick(5)}
            aria-expanded={expanded[5]}
            aria-label="show more"
            sx={{ mt: -1 }}
          >
            <ExpandMoreIcon />
          </ExpandMore>
          <Collapse in={expanded[5]} timeout="auto" unmountOnExit>
            <List sx={{ mt: 0, textAlign: 'right' }}>
              <ListItem disableGutters sx={{ justifyContent: 'flex-end' }}>
                <ListItemText primary="- Mise en page du catalogue de vente et dépliants en français et en allemand" sx={{mt: -2, textAlign: 'right' }} />
              </ListItem>
              <ListItem disableGutters sx={{ justifyContent: 'flex-end' }}>
                <ListItemText primary="- Création de bandeaux et vignettes pour le site internet" sx={{mt: -2, textAlign: 'right' }} />
              </ListItem>
              <ListItem disableGutters sx={{ justifyContent: 'flex-end' }}>
                <ListItemText primary="Gestion du flux de production sur plotter" sx={{mt: -2, textAlign: 'right' }} />
              </ListItem>
              <ListItem disableGutters sx={{ justifyContent: 'flex-end' }}>
                <ListItemText primary="Traitement d’images numériques et détourages" sx={{mt: -2, textAlign: 'right' }} />
              </ListItem>
              <ListItem disableGutters sx={{ justifyContent: 'flex-end' }}>
                <ListItemText primary="Responsable du contrôle des fichiers avant l’envoi à l’imprimeur" sx={{mt: -2, textAlign: 'right' }} />
              </ListItem>
              <ListItem disableGutters sx={{ justifyContent: 'flex-end' }}>
                <ListItemText primary="Réalisation de support publicitaires pour l’entreprise" sx={{mt: -2, textAlign: 'right' }} />
              </ListItem>
            </List>
          </Collapse>
        </TimelineContent>
      </HoverableTimelineItem>

      <HoverableTimelineItem>
        <TimelineOppositeContent
          sx={{ mt: 1 }}
          align="right"
          variant="h6"
          color="text.secondary"
        >
          2020
          <Typography variant="overline" display="block" sx={{mt: -1}}>
            UI Designer
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <WorkIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Groundwork Open Source
          </Typography>
          <Typography variant="overline" display="block" sx={{mt: -1}}>
            Petaluma, CA
          </Typography>
          <ExpandMore
            expand={expanded[6]}
            onClick={() => handleExpandClick(6)}
            aria-expanded={expanded[6]}
            aria-label="show more"
            sx={{ mt: -1 }}
          >
            <ExpandMoreIcon />
          </ExpandMore>
          <Collapse in={expanded[6]} timeout="auto" unmountOnExit>
            <List sx={{ mt: 0 }}>
              <ListItem disableGutters>
                <ListItemText primary="Création de logos et d’icônes et autres tâches graphiques" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="Communication avec les développeurs" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="Design de l’interface de la web application sur Adobe XD" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="Réalisation de support publicitaires" />
              </ListItem>
            </List>
          </Collapse>
        </TimelineContent>
      </HoverableTimelineItem>

      <HoverableTimelineItem>
        <TimelineOppositeContent
          sx={{ mt: 1 }}
          variant="h6"
          color="text.secondary"
        >
          2020
          <Typography variant="overline" display="block" sx={{mt: -1}}>
            UI Designer
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <WorkIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            BlueSunrise
          </Typography>
          <Typography variant="overline" display="block" sx={{mt: -1}}>
            Petaluma, CA
          </Typography>

          <ExpandMore
            expand={expanded[7]}
            onClick={() => handleExpandClick(7)}
            aria-expanded={expanded[7]}
            aria-label="show more"
            sx={{ mt: -1 }}
          >
            <ExpandMoreIcon />
          </ExpandMore>
          <Collapse in={expanded[7]} timeout="auto" unmountOnExit>
            <List sx={{ mt: 0, textAlign: 'right' }}>
              <ListItem disableGutters sx={{ justifyContent: 'flex-end' }}>
                <ListItemText primary="Création de l'interface utilisateur pour la nouvelle application de monitoring de Diamanti (Diamanti Ultimate) sur Figma" sx={{ textAlign: 'right' }} />
              </ListItem>
              <ListItem disableGutters sx={{ justifyContent: 'flex-end' }}>
                <ListItemText primary="Communication avec les développeurs" sx={{ textAlign: 'right' }} />
              </ListItem>
              <ListItem disableGutters sx={{ justifyContent: 'flex-end' }}>
                <ListItemText primary="Recherche afin d'améliorer le UX de l'application" sx={{ textAlign: 'right' }} />
              </ListItem>
            </List>
          </Collapse>
        </TimelineContent>
      </HoverableTimelineItem>
      
    </Timeline>
  );
}
