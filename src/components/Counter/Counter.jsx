import React from 'react';

export const Counter = ({ contador, sumar, restar }) => {
  return (
    <div className="counter">
      <button onClick={restar}>-</button>
      <span>{contador}</span>
      <button onClick={sumar}>+</button>
    </div>
  );
};