import React from "react";
import ProductCard from "../../components/productCart/Productcard";

const ItemList = ({ items }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "20px",
        padding: "20px",
      }}
    >
      {items.map((item) => (
        <ProductCard key={item.id} id={item.id} {...item} />
      ))}
    </div>
  );
};

export default ItemList;
