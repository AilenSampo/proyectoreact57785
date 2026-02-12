import React from 'react';
import RequestForm from "./pages/request/RequestForm";
import MyRequests from "./pages/myRequests/MyRequests";


import { NavBar } from "./components/Navbar/NavBar";
import ItemListContainer from "./pages/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./pages/itemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "./pages/cart/Cart";
import { CartContextProvider } from "./context/CartContext";



function App() {
  return (
    <BrowserRouter> 
      <CartContextProvider>
        <NavBar/>   
        <div className="page">    
           <h1></h1>     
        <Routes> 
          <Route path="/solicitar/:id" element={<RequestForm />} />

          <Route path="/" element={<ItemListContainer />} />          
          <Route path="/cart" element={<Cart />} />          
          <Route path="/login" element={<h1>Estás en el login</h1>} />          
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />  
          <Route path="/Categoria/:categoriaName" element={<ItemListContainer />} /> 
          <Route path="/servicios" element={<ItemListContainer />} />
          <Route path="/mis-solicitudes" element={<MyRequests />} />

          <Route path="/solicitar" element={<h1>Solicitud de servicio (pendiente)</h1>} />
          <Route path="/solicitar" element={<RequestForm />} />
          <Route path="/solicitar/:id" element={<RequestForm />} />

          <Route path="/mis-solicitudes" element={<h1>Mis Solicitudes (pendiente)</h1>} />




        </Routes>
      </div>     
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
