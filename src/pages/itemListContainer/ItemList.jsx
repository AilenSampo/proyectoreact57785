import React from 'react';
import ProductCard from "../../components/productCart/ProductCard";

const ItemList = ({ items }) => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {items.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
