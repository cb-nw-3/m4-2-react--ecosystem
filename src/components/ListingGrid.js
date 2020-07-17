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
                            <h3> {item.name}</h3>
                            <Paragraph> {item.latinName}</Paragraph>
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

    Link{
        text-decoration: none;
    }

    img{
        position: relative;
        top: -5px;
        width: 120px;
        border-radius: 20px
    }
`
export default ListingGrid;