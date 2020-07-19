import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(250px, 1fr));
    grid-gap: 40px;
`

const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0px 10px 59px 16px rgba(230,230,230,1);
    border-radius: 15px;

    & h2 {
        color: black;
    }

    & img {
        width: 125px;
        border-radius: 15px;
        margin-top: -15px;
    }

    & h3 {
        color: darkgrey;
        font-style: italic;
        font-size: 16px;
    }
`

const ListingGrid = ({ itemList }) => {
    return (
        <Wrapper>
            {
                itemList.map((fruit) => {
                    return (
                        <Link to={`/items/${fruit.id}`} >
                            <Item>
                                <img src={fruit.imageSrc} alt={fruit.name} />
                                <h2>{fruit.name}</h2>
                                <h3>{fruit.latinName}</h3>
                            </Item>
                        </Link>
                    )
                })}
        </Wrapper >
    );
};

export default ListingGrid;