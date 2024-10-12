import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
          <TimelineDot
            sx={{
              backgroundImage: 'url(/ld.jpeg)', // Use the correct image path
              backgroundSize: 'cover', // Ensure the image covers the dot area
              backgroundPosition: 'center', // Center the image
              width: '50px', // Adjust the size
              height: '50px',
              borderRadius: '50%', // Keep it circular
            }}
          />
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
          <TimelineDot
            sx={{
              backgroundImage: 'url(/OSD.png)', // Use the correct image path
              backgroundSize: 'cover', // Ensure the image covers the dot area
              backgroundPosition: 'center', // Center the image
              width: '50px', // Adjust the size
              height: '50px',
              borderRadius: '50%', // Keep it circular/home/sandesh/Downloads/OSD.png /home/sandesh/Downloads/LD.png
              
            }}
          />
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
          <TimelineDot
            sx={{
              backgroundImage: 'url(/Meta.jpeg)', // Use the correct image path
              backgroundSize: 'cover', // Ensure the image covers the dot area
              backgroundPosition: 'center', // Center the image
              width: '50px', // Adjust the size
              height: '50px',
              borderRadius: '50%', // Keep it circular
            }}
          />
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
          <TimelineDot
            sx={{
              backgroundImage: 'url(/spandan.png)', // Use the correct image path
              backgroundSize: 'cover', // Ensure the image covers the dot area
              backgroundPosition: 'center', // Center the image
              width: '50px', // Adjust the size
              height: '50px',
              borderRadius: '50%', // Keep it circular
            }}
          />
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
