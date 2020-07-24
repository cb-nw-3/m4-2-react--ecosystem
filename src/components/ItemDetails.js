import React from 'react';
import styled from 'styled-components';

import { useParams } from 'react-router-dom';
import { items } from '../data';
import { sellers } from '../data';

const ItemDetails = () => {
    
    const { itemId } = useParams();
    const currentItem = items[itemId];
    const currentSellers = sellers;

    // console.log(currentSellers);
    // console.log(currentItem);

    let isCurrentSellers;
    if (currentItem.sellerId === 'bob') {
        isCurrentSellers = currentSellers.bob
    } else {
        isCurrentSellers = currentSellers.alice
    };

    // console.log(currentItem.quantity);

    let isProductInStock;
    if (currentItem.quantity > '0') {
        isProductInStock = (<Button>{`$ ${currentItem.price} - Buy now`}</Button>)
    } else {
        isProductInStock = (<Button style={{backgroundColor: "#dadada", cursor: "not-allowed", textTransform: "uppercase"}}>{`Out of stock`}</Button>)
    }

    return (
        <>
            <Wrapper>
                <Row>
                    <Column>
                        <Image src={currentItem.imageSrc} alt={currentItem.name} />
                    </Column>
                    <Column>
                        <h2>
                            {currentItem.name}
                        </h2>
                        <p>
                            <em>{currentItem.latinName}</em>
                        </p>
                        <p>
                            {currentItem.description}
                        </p>
                        <p>
                            <em>Product of <strong>{currentItem.countryOfOrigin}</strong></em>
                        </p>
                        {isProductInStock}
                        <p>
                            <Thumbnail src={isCurrentSellers.avatarSrc}/> Sold by: <strong>{isCurrentSellers.storeName}</strong>
                        </p>            
                    </Column>
                </Row>
            </Wrapper>
        </>
    );
};

const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;

    & Image {
        text-align: right;
    }
`;

const Image = styled.img`
    max-height: 400px;
    max-width: 400px;
    border-radius: 20px;
`;

const Thumbnail = styled.img`
    max-height: 35px;
    max-width: 35px;
    border-radius: 25px;
`;

const Wrapper = styled.div`
    padding: 1.2em 0 1.2em;
`;

const Button = styled.button `
    font-size: 1em;
    text-align: center;
    width: 13em;
    height: 50px;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
`;

export default ItemDetails;
