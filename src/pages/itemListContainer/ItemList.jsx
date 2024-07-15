import React from 'react';
import ProductCard from "../../components/productCart/Productcard";

const ItemList = ({ items }) => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {items.map((item) => (
        <ProductCard key={item.id} title={item.title} description={item.description} price={item.price} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
