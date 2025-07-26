
// BasicCard: Material UI card example with custom content
// Demonstrates how to use MUI Card, Typography, and Button components
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Custom bullet separator for the word
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  // Renders a Material UI card with sample content
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        {/* Subtitle */}
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Word of the Day
        </Typography>
        {/* Main word with custom bullet separators */}
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        {/* Part of speech */}
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
        {/* Definition */}
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}