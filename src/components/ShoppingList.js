import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [filteredItems,setfilteredItems]=useState(items)
  
  const filterItems=(e) => {
    let category2 =e.target.value;
    (category2==="All") ? setfilteredItems(items):
    setfilteredItems((items.filter((item)=>item.category===category2)))}
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={(e)=>filterItems(e)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
