import { useContext } from "react";
import { CartContext } from "../context/CartContext";


export const Cart = () => {

const {cart, clearCart} = useContext( CartContext)

  return (
    <div>
        <h1>Aca va a ir el carrito</h1>
        <button onClick={clearCart}>Limpiar carrito</button>
    </div>
  )
}
