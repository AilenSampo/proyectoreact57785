import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { products } from '../products';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const { categoryName } = useParams(); // Asegúrate de que categoryName coincida con el parámetro de la URL

  useEffect(() => {
    const getProducts = () => {
      let filteredProducts = products;

      if (categoryName) {
        filteredProducts = products.filter(product => product.category === categoryName);
      }

      setItems(filteredProducts);
    };

    try {
      getProducts();
    } catch (error) {
      setError(error);
    }
  }, [categoryName]);

  return (
    <>
      {error ? (
        <div>Error: {error.message}</div>
      ) : (
        <ItemList items={items} />
      )}
    </>
  );
};

export default ItemListContainer;
