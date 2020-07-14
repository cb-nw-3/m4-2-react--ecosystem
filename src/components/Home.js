import React from 'react';

import ListingGrid from './ListingGrid';

function Home(props) {
//   console.log(props);  
  return (
    <div>
      <p>Fruit Emporium sells the finest fruits from this world and beyond.</p>
      <p>Browse items:</p>
      <ListingGrid/>
    </div>      
  )
}

export default Home;

