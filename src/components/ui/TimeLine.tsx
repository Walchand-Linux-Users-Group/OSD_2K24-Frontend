import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';

export default function TimeLine() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
           sx={{
            m: 'auto 0',
            fontSize: {
              xs: '14px', // Small font for months on mobile
              sm: '12px', // Slightly larger on tablets
              md: '14px', // Larger on desktops
            },
            color: 'text.secondary',
          }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          August
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '22px', px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            sx={{
              fontSize: {
                xs: '16px', // For small devices
                sm: '16px', // For tablets
                md: '16px', // For larger devices
              },
            }}
          >
            LinuxDiary
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
           sx={{
            m: 'auto 0',
            fontSize: {
              xs: '14px', // Small font for months on mobile
              sm: '12px', // Slightly larger on tablets
              md: '14px', // Larger on desktops
            },
            color: 'text.secondary',
          }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          October
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '22px', px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            sx={{
              fontSize: {
                xs: '15px',
                sm: '16px',
                md: '16px',
              },
            }}
          >
            Open Source Day
          </Typography>
        </TimelineContent>
      </TimelineItem>


      <TimelineItem>
        <TimelineOppositeContent
           sx={{
            m: 'auto 0',
            fontSize: {
              xs: '14px', // Small font for months on mobile
              sm: '12px', // Slightly larger on tablets
              md: '14px', // Larger on desktops
            },
            color: 'text.secondary',
          }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          March
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '22px', px: 2 }}>
        <Typography
            variant="h6"
            component="span"
            sx={{
              fontSize: {
                xs: '16px',
                sm: '16px',
                md: '16px',
              },
            }}
          >
            Metamorphosis
          </Typography>
          {/* <Typography>Because you need strength</Typography> */}
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
           sx={{
            m: 'auto 0',
            fontSize: {
              xs: '14px', // Small font for months on mobile
              sm: '12px', // Slightly larger on tablets
              md: '14px', // Larger on desktops
            },
            color: 'text.secondary',
          }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          April
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '22px', px: 2 }}>
        <Typography
            variant="h6"
            component="span"
            sx={{
              fontSize: {
                xs: '16px',
                sm: '16px',
                md: '16px',
              },
            }}
          >
            Spandan
          </Typography>
          {/* <Typography>Because you need strength</Typography> */}
        </TimelineContent>
      </TimelineItem>

      
    </Timeline>
  );
}
