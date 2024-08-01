import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <Link to="/cart">
        <Badge badgeContent={totalItems} color="white" showZero={true}>
          <ShoppingCartIcon color="action" />
        </Badge>
      </Link>
    </div>
  );
};

export default CartWidget;
