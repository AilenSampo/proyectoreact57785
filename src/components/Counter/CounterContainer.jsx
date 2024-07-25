import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Counter } from "./Counter";

const CounterContainer = ({ onAdd }) => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      alert("Mínimo");
    }
  };

  return (
    <Box>
      <Counter contador={contador} sumar={sumar} restar={restar} />
      <Button variant="contained" color="primary" onClick={() => onAdd(contador)}>
        Agregar al carrito
      </Button>
    </Box>
  );
};

export default CounterContainer;
