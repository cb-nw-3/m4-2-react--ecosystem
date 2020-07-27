import React from 'react';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
    } from "react-router-dom";
    import { items, sellers } from '../data';

function ItemDetail() {
    const itemId = useParams().itemId;
    const item = items[itemId];
    const seller = sellers[item.sellerId];
    console.log(itemId);
    console.log(item);
    console.log(seller);

    return ( 
        <Wrapper>
            <FruitImage src={item.imageSrc} />
            <FruitInfo>
                <FruitName>{item.name}</FruitName>
                <FruitLatin>{item.latinName}</FruitLatin>
                <p>{item.description}</p>
                <p>Product of {item.countryOfOrigin}</p>
                {(item.quantity > 0) ? (
                    <FruitButton><p>{item.price} Buy Now!</p></FruitButton>
                ):(
                    <FruitButton><p>Out of stock!</p></FruitButton>
                )}
                <p>Sold by: {seller.storeName}</p>
            </FruitInfo>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 40px 0 0 40px;
    align-items: center;
    display: flex;
    flex-direction: row;
`

const FruitInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
`

const FruitName = styled.p`
    font-size: 25px;
    font-weight: bolder;
    text-shadow: 1px 1px darkgrey;
`

const FruitLatin = styled.p`
    font-size: 15px;
    color: darkgrey;
`

const FruitButton = styled.button`
    border-radius: 25px;
    color: white;
    background-color: blue;
    font-size: 20px;
    font-weight: bolder;
    width:300px;
`

const FruitImage = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 25px;
    margin-right: 80px;
`

export default ItemDetail;