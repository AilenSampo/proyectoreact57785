import React, { useState, useEffect } from 'react';
import ItemList from "./ItemList";
import { products } from "../products";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState({});

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      let x = true;
      if (x) {
        resolve(products);
      } else {
        reject({ message: "error", codigo: "404" });
      }
    });

    getProducts
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <>
      <div>{greeting}</div>
      <ItemList items={items} />
    </>
  );
}

export default ItemListContainer;
