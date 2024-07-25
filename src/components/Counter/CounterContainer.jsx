import { useState } from "react";
import { Counter } from "./Counter";

const CounterContainer = ({ onAdd }) => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      alert("Mínimo");
    }
  };

  return (
    <>
      <Counter contador={contador} sumar={sumar} restar={restar} />
      <button onClick={() => onAdd(contador)}>Agregar al carrito</button>
    </>
  );
};

export default CounterContainer;
