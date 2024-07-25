import React from 'react';
import { Box, Button, Typography } from '@mui/material';

export const Counter = ({ contador, sumar, restar }) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
      <Button variant="outlined" onClick={restar}>-</Button>
      <Typography variant="h6" mx={2}>{contador}</Typography>
      <Button variant="outlined" onClick={sumar}>+</Button>
    </Box>
  );
};
