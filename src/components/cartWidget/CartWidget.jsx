import { Badge } from "@mui/material";
import {Link} from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export const CartWidget = () => {
  return (
    <div>
        
        <Link to = "/cart">
           <Badge badgeContent={0} color="white">
              <ShoppingCartIcon color="action" />
            </Badge>
        </Link>

    </div>
  )
}

export default CartWidget; 


//burbuja de material UI clase routing minuto 30
