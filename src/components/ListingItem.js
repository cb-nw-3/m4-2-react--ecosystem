import React from 'react';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';


function ListingItem({item}) {
    return (
        <Wrapper to={`/items/${item.id}`} >
            <FruitPicture src={item.imageSrc} />
            <FruitName>{item.name}</FruitName>
            <FruitLatin>{item.latinName}</FruitLatin>
        </Wrapper>
    );
};

const Wrapper = styled(NavLink)`
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 25px;
`

const FruitPicture = styled.img`
    width: 100%;
    border-radius: 25px;
`

const FruitName = styled.p`
    font-size: 25px;
    font-weight: bolder;
    text-shadow: 1px 1px darkgrey;
    margin: 10px auto 0 auto;
`

const FruitLatin = styled.p`
    font-size: 15px;
    color: darkgrey;
`

export default ListingItem;
