import React from "react";
import "./productcard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ id, name, title, description, fromPrice, Price, icon }) => {
  const displayName = name || title;
  const displayPrice = fromPrice ?? Price;

  return (
    <div className="productCard">
      <div className="icon">{icon || "🛠️"}</div>

      <h2>{displayName}</h2>

      {description && <p className="desc">{description}</p>}

      {displayPrice != null && (
        <p className="priceLine">
          <span>Desde </span>
          <strong>${displayPrice}</strong>
        </p>
      )}

      <Link to={`/solicitar/${id}`} className="cta">
        Solicitar servicio
      </Link>
    </div>
  );
};

export default ProductCard;
