import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { database } from '../../firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const { categoryName } = useParams(); // Usa categoryName que es el parámetro de la URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        let productsCollection = collection(database, "products");

        let consulta = productsCollection;
        if (categoryName) {
          consulta = query(productsCollection, where("category", "==", categoryName));
        }

        const res = await getDocs(consulta);
        const arrayValido = res.docs.map((product) => ({
          ...product.data(),
          id: product.id
        }));
        setItems(arrayValido);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
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
