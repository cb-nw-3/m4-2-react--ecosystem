import styled from 'styled-components';
import React from 'react';
import { useParams } from 'react-router-dom';
import { sellers, items } from '../data.js';

const FruitCard = styled.div`
    margin-left: 30px;
    display: flex;

    & img {
        width: 300px;
        border-radius: 15px;
    }
`

const FruitDesc = styled.div`
    margin: 20px;

    & .foo {
        font-style: italics;
    }
`

const ButtonStyle = styled.button`
    border: 0;
    background: royalblue;
    color: white;
    font-size: 20px;
    padding: 20px 35px 20px 35px;
    border-radius: 15px;
`

const Button = (props) => {
    return (
        <ButtonStyle>
            ${props.price} - Buy Now
        </ButtonStyle>
    )
}

const Seller = (sellerId) => {
    return <p>yes.</p>
}

const FruitView = (fruit) => {
    let currFruit = items[fruit.fruit];
    return (
        <FruitCard>
            <img src={currFruit.imageSrc} />
            <FruitDesc>
                <h2>{currFruit.name}</h2>
                <h3>{currFruit.latinName}</h3>

                {/* there's got to be a less dumb way of doing this
                 it's so ridiculous that I need to make another
    styled component just to make something italic */}

                <p>{currFruit.description}</p>
                <p>Product of {currFruit.countryOfOrigin}</p>
                <Button price={currFruit.price} />
                <Seller sellerId={currFruit.sellerId} />
            </FruitDesc>
        </FruitCard>
    )
}

const ItemDetails = () => {
    const { itemId } = useParams();
    return <FruitView fruit={itemId} />
};

export default ItemDetails;