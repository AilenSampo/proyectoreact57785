import "./navbar.css"
import { BsCart2 } from "react-icons/bs";

export const NavBar = () => {
    return (
        <div className= "navbarContainer">
            <img className = "logo" src="https://res.cloudinary.com/dcykb0ea5/image/upload/v1718222230/_a7ff62ea-f0a2-4d9e-bc6d-c52ea44b9d78_ecsxxd.jpg" alt="Logo" />

            <ul className="categoria"></ul>
                <li className="categoriaLi">Capilares</li>
                <li className="categoriaLi">Estética</li>
                <li className="categoriaLi">Barbería</li>
                

           <BsCart2 size= "30px"/>
           
        </div>
    
);
};

