import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import Typography from '@mui/material/Typography';
import experienceDataJson from '../../public/experience_fr.json';

interface YearRange {
  startYear: number;
  endYear: number;
}

interface MonthYearRange extends YearRange {
  startMonth: number;
  endMonth: number;
}

interface SingleYear {
  year: number;
}

type ParsedYear = YearRange | MonthYearRange | SingleYear;

interface Experience {
  company: string;
  location: string;
  role: string;
  years: string;
  city: string;
  tasks: string[];
  category: string;
}

interface ExperienceData {
  experiences: Experience[];
  education: { /* Ajoutez les types pour education ici */ }[];
  languages: { /* Ajoutez les types pour languages ici */ }[];
}

const experienceData: ExperienceData = experienceDataJson as ExperienceData;

function parseYear(yearString: string): ParsedYear {
  // Si l'année est un intervalle (ex: "2010 - 2012")
  console.log(yearString);
  if (!yearString) {
    throw new Error('Invalid input: yearString is undefined');
  }
  if (yearString.includes('-')) {
    const [startYearStr, endYearStr] = yearString.split('-').map(str => str.trim());
    const [startYear, endYear] = [Number(startYearStr), Number(endYearStr)];

    if (!isNaN(startYear) && !isNaN(endYear)) {
      return { startYear, endYear };
    }
  }
  
  // Si l'année est un mois et une année (ex: "01/2018 - 05/2018")
  if (yearString.includes('/')) {
    const [startMonthYear, endMonthYear] = yearString.split('-').map(str => str.trim());
    const [startMonthStr, startYearStr] = startMonthYear.split('/').map(str => str.trim());
    const [endMonthStr, endYearStr] = endMonthYear.split('/').map(str => str.trim());
    const [startMonth, startYear] = [Number(startMonthStr), Number(startYearStr)];
    const [endMonth, endYear] = [Number(endMonthStr), Number(endYearStr)];

    if (!isNaN(startMonth) && !isNaN(startYear) && !isNaN(endMonth) && !isNaN(endYear)) {
      return { startYear, startMonth, endYear, endMonth };
    }
  }
  
  // Si l'année est juste une année (ex: "2022")
  const year = Number(yearString);
  if (!isNaN(year)) {
    return { year };
  }
  
  throw new Error(`Invalid year string format: ${yearString}`);
}

export default function CustomizedTimeline() {
  const sortedExperienceData = experienceData.experiences.sort((a: Experience, b: Experience) => {
    if (a && b) {
      console.log(a.years, b.years);
      const parsedYearA = parseYear(a.years);
      const parsedYearB = parseYear(b.years);

      const startYearA = 'startYear' in parsedYearA ? parsedYearA.startYear : parsedYearA.year;
      const startYearB = 'startYear' in parsedYearB ? parsedYearB.startYear : parsedYearB.year;

      return startYearA - startYearB;
    }
    return 0;
  });

  return (
    <Timeline position="alternate">
      {sortedExperienceData.map((experience: Experience, index: number) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            {experience.years} {/* Assurez-vous que la date est formatée correctement */}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <FastfoodIcon /> {/* Remplacez ceci par l'icône appropriée */}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              {experience.role}
            </Typography>
            <Typography>{experience.company}</Typography>
            <Typography>{experience.location}</Typography>
            <Typography>{experience.category}</Typography>
            <Typography>{experience.tasks.join(', ')}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
