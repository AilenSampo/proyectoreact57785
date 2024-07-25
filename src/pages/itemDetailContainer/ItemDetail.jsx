import React from 'react';
import CounterContainer from './CounterContainer';

export const ItemDetail = ({ item, onAdd }) => {
  return (
    <div>
      <div className={"containerItemDetail"}>
        <div className={"containerImage"}>
          <img src={item.img} alt={item.title} />
        </div>
        <div className={"containerDetail"}>
          <h2 style={{ fontFamily: "monospace" }}>
            <span style={{ fontSize: "23px" }}>Nombre:</span> {item.title}
          </h2>
          <h2 style={{ fontFamily: "monospace" }}>
            <span style={{ fontSize: "23px" }}>Descripción:</span> {item.description}
          </h2>
          <h2 style={{ fontFamily: "monospace" }}>
            <span style={{ fontSize: "23px" }}>Precio:</span> ${item.price}.-
          </h2>
        </div>
      </div>
      <CounterContainer onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;
