import React from 'react';
import ProductCard from "../../components/productCart/Productcard";

const ItemList = ({ items }) => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {items.map((item) => (
        <ProductCard 
          key={item.id} 
          title={item.title} 
          Stock={item.Stock} 
          price={item.price} 
          id={item.id}
          imagen={item.imagen} 
        />
      ))}
    </div>
  );
};

export default ItemList;
