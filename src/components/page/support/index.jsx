/* eslint-disable consistent-return */
import { UpCircleOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import styled from 'styled-components';
import { supports } from '../../../shared/data/data';
import OverLay, { Title } from '../../overlay/OverLay';

function Support() {
	const handleClick = (item, index) => {
		if (item.key === index) {
			return (<div>{item.answer}</div>);
		}
	};
	return (
		<div>
			<OverLay name="Support Ticket" />
			<Wrapper>
				<Container>
					<Title style={{ color: '#0404453' }}>Frequently Ask Questions. 2</Title>
					<P>CHOOSE FROM 5,000 ONLINE VIDEO COURSES WITH NEW ADDITIONS 3</P>
				</Container>
				{supports.map((item, index) => (
					<Box key={index}>
						<button
							type="button"
							onClick={() => handleClick(item, index)}>
							{item.question}
							<UpCircleOutlined />
						</button>
					</Box>
				))}
			</Wrapper>
		</div>
	);
}

export default Support;

const Wrapper = styled.div`	
    gap: 1rem;    
    padding-top: 110px;
`;
const Container = styled.div`
    text-align: center;
`;

const P = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 154%;
	color: #52526C;
    margin-bottom: 44px;
`;

const Box = styled.div`
    background: #fff;
    width:60%;
	margin:0 auto;
	padding: 10px;
	border: 1px solid transparent;
`;
