import React from 'react';
import styled from 'styled-components';
import Paragraph from './Paragraph';

const ListingGrid = ({ itemList }) => {
    return (
        <>
            <Container>
                {itemList.map((item) => (
                    <div>
                        <img src={item.imageSrc} />
                        <h3> {item.name}</h3>
                        <Paragraph> {item.latinName}</Paragraph>
                    </div>
                ))}
            </Container>
        </>
    );
};


const Container = styled.div`
    width: 100%;
    text-align: center;

    div{
        display: inline-block;
        text-align: center;
        width: 200px;
        background: lightgray;
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
`
export default ListingGrid;