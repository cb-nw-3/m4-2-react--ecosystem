import React from 'react';
import styled from 'styled-components';
import { items, sellers } from '../data';
import { useParams } from 'react-router-dom';


const products = Object.values(items);
const productSellers = Object.values(sellers);

const ItemDetails = () => {
    const { itemId } = useParams();

    const item = products.find((element) => element.id === itemId);
    const seller = productSellers.find((element) => element.id === item.sellerId);

    return (
        <>
            <img src={item.imageSrc} alt={item.name}></img>
            <h1>{item.name}</h1>
            <h3>{item.latinName}</h3>
            <p>{item.description}</p>
            <p>
                <i>Product of</i> {item.countryOfOrigin}
            </p>
            <img src={seller.avatarSrc} alt=""></img>
            <p>
                Sold by: {seller.storeName}, by {seller.id}
            </p>
        </>
    );
};

export default ItemDetails;