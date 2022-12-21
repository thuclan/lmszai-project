import React from 'react';
import styled from 'styled-components';
import { boxs } from '../../shared/data/cards';
import { Wrapper } from './OverLay';

function OverLayOne() {
	return (
		<Wrapper>
			<Container>
				{boxs.map((box, index) => (
					<Box key={index}>
						<Img src={box.icon} alt={box.title} />
						<BoxColumn>
							<H6>{box.title}</H6>
							<p>{box.number}</p>
						</BoxColumn>
					</Box>
				))}
			</Container>
		</Wrapper>
	);
}

export default OverLayOne;

const Container = styled.div`
    display:flex;
    gap:4rem;
    align-items:center;
    padding: 110px 0;
    color: #fff;
`;

const Box = styled.div`
    display: flex;
    gap:1rem;
`;

const BoxColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

const Img = styled.img`
   width: 35px;
   height: 35px;
   border-radius: 50%;
`;

const H6 = styled.h6`
   font-size: 20px;
`;

export { Container, Box, BoxColumn, Img, H6 };
