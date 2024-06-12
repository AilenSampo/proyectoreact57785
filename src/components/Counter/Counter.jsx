//hook es una funcion que se usa en react
//Los componentes no tienen mas variables, ahora se llaman estados. Recuerda su valor anterior, esa es la diferencia. Para eso es el hook, retiene el valor anterior en el segundo renderizado. Sino el contador no puede salir del 0. Ya que cada vez que suma un valor vuelve a empezar el ciclo.
//El hook se importa por fuera y se utiliza dentro. El useState es una variable que me permite recordar el ultimo valor. Devuelve dos cosas UNA VARIABLE Y UNA FUNCION
// la funcion debe tener el mismo nombre de la variable, con el prefijo SET

import { useState } from "react";

export const Counter = () => {
  const [contador, setContador] = useState(1);

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      alert("Minimo");
    }
  };

  const sumar = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <button onClick={restar}>Restar</button>
      <h2>{contador}</h2>
      <button onClick={sumar}>Sumar</button>
    </div>
  );
};
