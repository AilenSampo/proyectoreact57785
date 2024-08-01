import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./cart.css"; 

export const Cart = () => {
  const { cart, clearCart, removeItem } = useContext(CartContext);


  const totalPrice = cart.reduce((total, item) => total + item.Price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div>
        <h2>Tu carrito está vacío</h2>
        <Link to="/">Volver a comprar</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Tu Carrito</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <span>{item.quantity} - {item.title} - Precio: ${item.Price * item.quantity}</span>
            <button onClick={() => removeItem(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${totalPrice}</h3>
      <button onClick={clearCart}>Vaciar Carrito</button>
      <Link to="/">Seguir Comprando</Link>
    </div>
  );
};

export default Cart;
