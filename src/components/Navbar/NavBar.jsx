import "./navbar.css"
import { CartWidget } from "../cartWidget/CartWidget";
import {Link, Outlet} from "react-router-dom"
 

export const NavBar = () => {
    return (
        <div>
            <>
                <div className= "navbarContainer">
                    
                    <Link to="/">
                     <img className = "logo" src="https://res.cloudinary.com/dcykb0ea5/image/upload/v1718222230/_a7ff62ea-f0a2-4d9e-bc6d-c52ea44b9d78_ecsxxd.jpg" alt="Logo" />
                    </Link>
                   

                    <ul className="categoria">
                        <li className="categoriaLi">
                        <Link to="/Categoria/styling">Styling</Link>
                        </li>
                        <li className="categoriaLi">
                        <Link to="/Categoria/haircare">Haircare</Link>
                        </li>
                        <li className="categoriaLi">
                        <Link to="/Categoria/coloracion">Coloración</Link>
                        </li>
                        <li className="categoriaLi">
                        <Link to="/Categoria/tratamientos">Tratamientos</Link>
                        </li>
                    </ul>
                    

                    <CartWidget/>         
                </div>
            </>
            <Outlet />
        </div>   
            
    
);
}



