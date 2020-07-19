import React from "react";
import styled from "styled-components";

function About() {
	return (
		<div>
			<Para>
				Fruit emporium is founded on a very simple principle:
				<Bold> Fruit is good.</Bold>
			</Para>
			<ParaTwo>
				We carry the finest selection of produce from around the world, from
				tart citrus to sweet cherries. Our sellers are world-class, and your
				fruit is guaranteed to be worthy of auction in Asian markets.
			</ParaTwo>
		</div>
	);
}

export default About;

const Bold = styled.span`
	font-weight: bolder;
`;

const Para = styled.p`
	margin-left: 15%;
	margin-right: 15%;
	font-size: 20px;
`;

const ParaTwo = styled.p`
	margin-left: 15%;
	margin-right: 15%;
	font-size: 20px;

`;
