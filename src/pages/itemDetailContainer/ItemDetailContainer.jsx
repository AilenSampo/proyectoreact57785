import React, { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { database } from '../../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  
  useEffect(() => {
    
    const fetchProduct = async () => {
      try {
        const productRef = doc(database, "products", id); 
        const productSnap = await getDoc(productRef); 

        if (productSnap.exists()) {
          setItem({ ...productSnap.data(), id: productSnap.id }); 
        } else {

        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false); 
      }
    };

    fetchProduct();
  }, [id]);

  const onAdd = (quantity) => {
    let objetoFinal = { ...item, quantity };
    addToCart(objetoFinal);
  };

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>Error: {error.message}</div>; 
  }

  return <ItemDetail item={item} onAdd={onAdd} />;
};

export default ItemDetailContainer;
