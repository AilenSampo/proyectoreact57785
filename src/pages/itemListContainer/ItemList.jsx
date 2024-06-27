const itemList = ( {items}) => {
  return (
    <div style = {{ display : "flex", gap: "20px"}}>

        <h1>{items[0].title}</h1>
        
    </div>

  );
};
export default ItemList;