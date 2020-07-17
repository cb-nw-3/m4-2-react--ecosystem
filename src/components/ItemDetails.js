import React from 'react';
import styled from 'styled-components';
import { items, sellers } from '../data';
import { useParams } from 'react-router-dom';
import { ItemName } from './ListingGrid'


const products = Object.values(items);
const productSellers = Object.values(sellers);

const ItemDetails = () => {
    const { itemId } = useParams();

    const item = products.find((element) => element.id === itemId);
    const seller = productSellers.find((element) => element.id === item.sellerId);

    return (
        <>
            <DetailsPage>
                <ProductImage>
                    <img src={item.imageSrc} alt={item.name}></img>
                </ProductImage>
                <ProductDetails>
                    <h2>{item.name}</h2>
                    <h3>{item.latinName}</h3>
                    <p>{item.description}</p>
                    <p>
                        <i>Product of <strong>{item.countryOfOrigin}</strong></i>
                    </p>
                    <Button>
                        {item.quantity > 0 ? `$${item.price} -` : ''} {item.quantity > 0 ? "Buy now" : "Out of stock"}
                    </Button>
                    <p>
                        <img src={seller.avatarSrc} alt=""></img>
                        Sold by: <strong> {seller.storeName}, by {seller.id}</strong>
                    </p>
                </ProductDetails>
            </DetailsPage>
        </>
    );
};

const DetailsPage = styled.div`
    display: block;
    text-align: center;

    @media (min-width: 680px){
        display: flex;
        justify-content: center;
        text-align: left;
    }

    img{
        height: 300px;
        border-radius: 20px;
    }
`

const ProductImage = styled.div`
    @media (min-width: 680px){
        width: 50%;
        text-align: end;
    }
`
const ProductDetails = styled.div`
    @media (min-width: 680px){
        margin-left: 20px;
        width: 50%;
    }
    h2{
    font-weight: 600;
    font-size: 28px;
  }

    h3{
        color: gray;
        font-style: italic;
    }
    
    p{
        display: flex;
        align-items: center;
        justify-content: center;
        @media (min-width: 680px){
            justify-content: end; 
        }

    }

    img{
        border-radius: 50%;
        height: 50px;
        margin-right: 5px;
    }
`

const Button = styled.button`
    background: blue;
    color: white;
    text-decoration: none;
    cursor: pointer;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 18px;
    font-weight: 500;
    outline: none;
    text-align: center;

    @media (min-width: 680px){
        display: block;
        margin: 20px 0;
    }

    button &hover{
        background: black
    }
`

export default ItemDetails;