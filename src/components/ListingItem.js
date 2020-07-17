import React from 'react'

function ListingItem(props) {
  console.log('ListingItem', props)
  return <div>
    <img src={props.item.imageSrc}></img>
    <p>{props.item.name}</p>
    <p>{props.item.latinName}</p>
  </div>
}

export default ListingItem;