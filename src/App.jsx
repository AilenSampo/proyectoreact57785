import { NavBar } from "./components/Navbar/NavBar";
import { ItemListContainer } from "./pages/itemListContainer/ItemListContainer";

import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Cart } from "./pages/Cart";


function App() {
  return 
  <BrowserRouter>
    <Routes>
      
      <Routes element={<NavBar/>}>

        <Route path ="/" element={<ItemListContainer/>} />
        <Route path ="/cart" element={<Cart/>}/>
        <Route path ="/login" element={<h1>Estás en el login</h1>}/>
        <Route element={<ItemDetailContainer/>}/>

      </Routes>
      
    </Routes>
  </BrowserRouter>


  
}

export default App;
