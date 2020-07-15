import React from "react";

const ListingGrid = ({ itemList }) => {
  const items = Object.values(itemList);

  return (
    <div>
      {items.map((item, index) => (
        <div key={item.name + index}>
          <img src={item.imageSrc} alt={item.name}></img>
          <h3>{item.name}</h3>
          <p>{item.latinName}</p>
        </div>
      ))}
    </div>
  );
};

export default ListingGrid;
