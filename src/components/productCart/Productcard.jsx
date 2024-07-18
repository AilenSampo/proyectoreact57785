import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ title, Stock, price, id, image }) => {
  return (
    <div style={{ border: "2px solid #BF5E66", padding: "10px" }}>
      <h2>{title}</h2>
      <h3>Stock:{Stock}</h3>
      <h3>{price}</h3>
      {image && <img src={image} alt={title} style={{ width: "100%", height: "auto" }} />}
      <Link to={`/itemDetail/${id}`} style={{ color: '#BF5E66' }}>Ver más</Link>
    </div>
  );
}

export default ProductCard;
