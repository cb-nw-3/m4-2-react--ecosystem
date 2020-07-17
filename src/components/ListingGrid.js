import React from 'react';
import styled from 'styled-components';
import Paragraph from './Paragraph';

import { Link } from 'react-router-dom';

const ListingGrid = ({ itemList }) => {
    return (
        <>
            <Container>
                {itemList.map((item) => (
                    <div>
                        <Link to={`/items/${item.id}`}>
                            <img
                                src={item.imageSrc}
                                alt={item.name}
                            />
                            <ItemName> {item.name}</ItemName>
                            <hr />
                            <p> {item.latinName}</p>
                        </Link>
                    </div>
                ))}
            </Container>
        </>
    );
};

const Container = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 40px;

    div{
        display: inline-block;
        text-align: center;
        width: 200px;
        background: #ffffff;
        position: relative;
        margin: 10px;
        border-radius: 20px;
        box-shadow: 3px 5px 15px #888888;
    }

    img{
        position: relative;
        top: -5px;
        width: 120px;
        border-radius: 20px
    }

    a{
        text-decoration: none;
    }

    p{
        color: gray;
        font-style: italic;
    }

    hr{
        width: 30%;
        min-width: 20px;
    }
`

export const ItemName = styled.h3`
    color: black;
    font-size: 18px;
    font-weight: 600;
`

export default ListingGrid;