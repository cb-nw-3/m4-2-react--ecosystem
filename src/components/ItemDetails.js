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
    width: 500px;

    & .country {
        font-style: italic;
    }
`

const ButtonStyle = styled.button`
    border: 0;
    background: royalblue;
    color: white;
    font-size: 20px;
    padding: 15px 35px 15px 35px;
    border-radius: 15px;
`

const Button = (props) => {
    if (props.fruit.quantity > 0) {
        return (
            <ButtonStyle>
                ${props.fruit.price} - Buy Now
            </ButtonStyle>
        )
    } else {
        return (
            <ButtonStyle>
                Out of stock
            </ButtonStyle>
        )
    }
}

const SellerAvatar = styled.div`
    margin-top: 15px;
    display: flex;
    align-items: center;

    & p {
        margin-left: 20px;
    }

    & img {
        width: 40px;
        border-radius: 50%;
    }
    
    & span {
        font-weight: bold;
    }
`

const Seller = (props) => {
    const sellerInfo = sellers[props.sellerId];
    console.log(sellerInfo);
    return (
        <SellerAvatar>
            <img src={sellerInfo.avatarSrc} alt={sellers.alice.id} />
            <p>Sold by: <span>{sellerInfo.storeName}</span></p>
        </SellerAvatar>
    );
}

const FruitView = (props) => {
    let currFruit = items[props.fruit];
    return (
        <FruitCard>
            <img src={currFruit.imageSrc} />
            <FruitDesc>
                <h2>{currFruit.name}</h2>
                <h3>{currFruit.latinName}</h3>

                <p>{currFruit.description}</p>
                <p className="country">Product of {currFruit.countryOfOrigin}</p>
                <Button fruit={currFruit} />
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