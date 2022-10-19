import React from "react";
import { Link } from "react-router-dom";

import "./ProductCard.css";

function ProductCard({ id, name, price, image }) {
  return (
    <div className="card__content card__hover-effect">
      <Link to={`/products/${id}`}>
        <h3 className="card__title">{name}</h3>
      </Link>
      <span className="card__price">price: ${price}</span>
      <img className="card__image-product" src={image} alt={name} />
      <Link to={`/detail/${id}`}>
        <button className="card__title card__title-product">Detail</button>
      </Link>
    </div>
  );
}

export default ProductCard;
