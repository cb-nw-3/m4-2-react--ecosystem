import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const ListingGrid = ({ itemList }) => {
    const items = Object.values(itemList);

    return (
        <Wrapper>
            {items.map((item) => (
                <DIV key={item.id}>
                    <Link to={`/items/${item.id}`}>
                        <Image src={item.imageSrc} alt={item.name} />
                    </Link>
                    <h2>{item.name}</h2>
                    <Border />
                    <p>
                        <em>{item.latinName}</em>
                    </p>
                </DIV>
            ))}
        </Wrapper>
    );
};

const DIV = styled.div`
    text-align: center;
    box-shadow: 0px 2px 10px 10px #f8f8f8;
    border-radius: 20px;
    border: none;
`;

const Image = styled.img`
    max-height: 150px;
    max-width: 150px;
    border-radius: 10px;
`;

const Border = styled.div`
    margin: auto;
    width: 12%;
    border-bottom: 3px solid #dcdcdc;
    padding: 6px;
`;

const Wrapper = styled.div`
    display: grid;
    grid-gap: 2em;
    grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
    padding-top: 3em;
`;

export default ListingGrid;
