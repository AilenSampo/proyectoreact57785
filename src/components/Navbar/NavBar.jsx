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

                        <li className="categoriaLi">Styling</li>
                        <li className="categoriaLi">Haircare</li>
                        <li className="categoriaLi">Coloración</li>
                        <li className="categoriaLi">Tratamientos</li>
                        
                    </ul>
                    

                    <CartWidget/>         
                </div>
            </>
            <Outlet />
        </div>   
            
    
);
}



