import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { database } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { categoriaName } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => { 
  
  let servicesCollection = collection(database, "services");
  let consulta = servicesCollection;

  if (categoriaName) {
    consulta = query(servicesCollection, where("category", "==", categoriaName));
  }

  getDocs(consulta)
    .then((res) => {
      let arrayValido = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setItems(arrayValido);
    })
    .catch((error) => {
      console.error("Error fetching services: ", error);
    });
}, [categoriaName]);


   return (
    <div>
      <ItemList items={items} />   
    </div>
  );
};

export default ItemListContainer;