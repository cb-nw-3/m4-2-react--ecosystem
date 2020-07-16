import React from 'react';
import styled from 'styled-components';
import ItemDetails from './ItemDetails';
import { Link } from 'react-router-dom';

const ListingGrid = ({ itemList}) => {
    let itemValues = Object.values(itemList);
    return (
        <div>
          <FruitList>
            {itemValues.map( (item) => {
              return (
              <FruitItem>
                <Link to={`/items/${item.id}`}>
                <FruitImage src={item.imageSrc}/>
                </Link>
                <FruitName>{item.name}</FruitName>
                <FruitLatinName>{item.latinName}</FruitLatinName>
              </FruitItem>
              );
           })}    
          </FruitList>
            
        </div>   
    )
}

const FruitList = styled.ul`
  text-align:center;
`
const FruitItem = styled.li`
  display: inline-block;
  width: 300px;
  text-align: center;
  margin: 0px 30px 30px 30px;
`
const FruitImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;
`;

const FruitName = styled.h2`
  font-size: 24px;
  text-align: center;
  font-weight: bold;
`;

const FruitLatinName = styled.p`
  color: grey;
`;

export default ListingGrid;
