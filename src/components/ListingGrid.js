import React from "react";

import styled from 'styled-components';

const ListingGrid = ({ itemList }) => {
    const items = Object.values(itemList)

    return (
        <Wrapper>
            {items.map((item) => (
                <DIV key={item.id}>
                    <Image src={item.imageSrc} alt={item.name} />
                    <H3>{item.name}</H3>
                    <Paragragh>
                        <em>{item.latinName}</em>
                    </Paragragh>
                </DIV>
            ))}
        </Wrapper>
    );
};

const DIV = styled.div`
    text-align: center;
    box-shadow: inset 0 0 2px #000;
    border-radius: 20px;
`;

const Image = styled.img`
    max-height: 150px;
    max-width: 150px;
    border-radius: 10px;
`;

const H3 = styled.h3`
    margin: 0;
    padding: 0;
`;

const Paragragh = styled.p`
    font-size: 18px;
    line-height: 1em;
    color: #333;
    padding-bottom: 20px;

    & strong {
        color: black;
    }

    & em {
        margin-top: 0px;
        font-size: 14px;
        font-style: italic;
        color: lightgray;
    }
`;

const Wrapper = styled.div`
    display: grid;
    grid-gap: 2em;
    grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
`;

export default ListingGrid;
