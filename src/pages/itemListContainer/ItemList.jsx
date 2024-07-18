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
          image={item.image} // Asegúrate de que el nombre de la propiedad coincida
        />
      ))}
    </div>
  );
};

export default ItemList;
