import React from 'react';

import ListingItem from './ListingItem';

function ListingGrid(props) {
  console.log('ListingGrid', props)
  return <div>
    {props.items.map(item => {
      return <ListingItem item={item} key={item.id}></ListingItem>
    })}
  </div>
}

export default ListingGrid