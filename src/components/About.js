import React from 'react';
import styled from 'styled-components';

import Paragraph from './Paragraph';

const About = () => {
    return (
        <>
            <h3>About</h3>
            <Paragraph>
                Fruit emporium is founded on a very simple principle: Fruit is good.
            </Paragraph>
            <Paragraph>
                We carry the finest selection of produce from around the world, from tart citrus to sweet cherries. Our sellers are world-class, and your fruit is guaranteed to be worthy of auction in Asian markets.
            </Paragraph>
        </>
    );
};

export default About;