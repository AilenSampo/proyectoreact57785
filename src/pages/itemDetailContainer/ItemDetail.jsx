import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';
import CounterContainer from "../../components/Counter/CounterContainer";

export const ItemDetail = ({ item, onAdd }) => {
  return (
    <Card sx={{ display: 'flex', margin: 2, padding: 2, borderRadius: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 200, borderRadius: 1 }}
        imagen={item.imagen}
        alt={item.title}
      />
      <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h5" component="div">
          <strong>Nombre:</strong> {item.title}
        </Typography>
        <Typography variant="h6" component="div" color="text.secondary">
          <strong>Precio:</strong> ${item.Price}
        </Typography>
        <CounterContainer onAdd={onAdd} />
      </CardContent>
    </Card>
  );
};

export default ItemDetail;
