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
                <h2>{item.name}</h2>
                <p>{item.latinName}</p>
                <p>{item.description}</p>
                <p>Product of {item.countryOfOrigin}</p>
                {(item.quantity > 0) ? (
                    <p>{item.price} Buy Now!</p>
                ):(
                    <p>Out of stock!</p>
                )}
                <p>Sold by: {seller.storeName}</p>
            </FruitInfo>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`

const FruitInfo = styled.div`
    display: flex;
    flex-direction: column;
`

const FruitImage = styled.img`
    width: 350px;
    height:350px;
`

export default ItemDetail;