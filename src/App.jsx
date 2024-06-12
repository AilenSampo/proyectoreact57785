import { NavBar } from "./components/Navbar/NavBar";
import { ItemListContainer } from "./pages/itemListContainer/ItemListContainer";


function App() {

  return (
    <div>
      <NavBar/> 
      <ItemListContainer greeting="Bienvenid@ al poyecto de Ailen Sampo 😎"/>
    </div>
  );
};

export default App;
