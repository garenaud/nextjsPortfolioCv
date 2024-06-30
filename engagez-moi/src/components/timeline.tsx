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
  padding: theme.spacing(3), // Added padding
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
    boxShadow: theme.shadows[2],
  },
}));

const CustomTimelineSeparator = styled(TimelineSeparator)(({ theme }) => ({
  '& .MuiTimelineConnector-root': {
    backgroundColor: theme.palette.primary.main,
  },
}));

export default function ExperienceTimeline() {
  const [expanded, setExpanded] = useState<Array<boolean>>(
    Array(experienceDataJson.length).fill(false)
  );

  const handleExpandClick = (index: number) => {
    setExpanded(prevExpanded => {
      const newExpanded = [...prevExpanded];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  const iconMap: { [key: string]: React.ReactNode } = {
    school: <SchoolIcon />,
    work: <WorkIcon />,
  };

  return (
    <Timeline position="alternate">
      {experienceDataJson.map((item, index) => (
        <HoverableTimelineItem key={index}>
          <TimelineOppositeContent
            sx={{ mt: 1 }}
            align="right"
            variant="h5"
            color="text.secondary"
          >
            {item.date}
            <Typography variant="overline" display="block" sx={{ mt: -1 }}>
              {item.title}
            </Typography>
          </TimelineOppositeContent>
          <CustomTimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">{iconMap[item.type]}</TimelineDot>
            <ExpandMore
              expand={expanded[index]}
              onClick={() => handleExpandClick(index)}
              aria-expanded={expanded[index]}
              aria-label="show more"
              sx={{ mt: 1 }}
            >
              <ExpandMoreIcon />
            </ExpandMore>
            <TimelineConnector />
          </CustomTimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              {item.company}
            </Typography>
            <Typography variant="overline" display="block" sx={{ mt: -1 }}>
              {item.location}
            </Typography>
            <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
              <List sx={{ mt: 0 }}>
                {item.tasks.map((task, taskIndex) => (
                  <ListItem key={taskIndex} disableGutters>
                    <ListItemText primary={task} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </TimelineContent>
        </HoverableTimelineItem>
      ))}
    </Timeline>
  );
}
