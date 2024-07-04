import { BsCart2 } from "react-icons/bs";
import {Link} from "react-router-dom"

export const CartWidget = () => {
  return (
    <div>
        
        <Link to = "/cart">
          <BsCart2 size= "30px"/>
        </Link>

    </div>
  )
}

export default CartWidget; 


//burbuja de material UI clase routing minuto 30
