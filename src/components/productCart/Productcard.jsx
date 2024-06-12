//desestructuramos un objeto para recibir un unico parametro a traves de props.

export const Productcard = ({ title, description, price }) => {
  return (
    <div style={{ border: " 2px solid steelblue" }}>
      <h2>{title}</h2>
      <h3>{description}</h3>
      <h3>{price}</h3>
    </div>
  );
};
