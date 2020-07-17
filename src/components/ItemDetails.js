import React from 'react';
import { useParams } from 'react-router-dom';
//import styled from 'styled-components';



const ItemDetails = () => {
  const { itemId } = useParams();
  return (
    <>
      <p>{itemId}</p>
    </>
  );
}

export default ItemDetails;