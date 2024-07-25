import { Badge } from "@mui/material";
import {Link} from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


export const CartWidget = () => {

  const {cart} = useContext(CartContext);



  return (
    <div>
        
        <Link to = "/cart">
           <Badge badgeContent={cart.lenght} color="white">
              <ShoppingCartIcon color="action" />
            </Badge>
        </Link>

    </div>
  )
}

export default CartWidget; 


//burbuja de material UI clase routing minuto 30
