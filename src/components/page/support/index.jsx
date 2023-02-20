/* eslint-disable consistent-return */
import { UpCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import { supports } from '../../../shared/data/data';
import OverLay, { Title } from '../../overlay/OverLay';

function Support() {
	const [selected, setSelected] = useState([]);
	console.log('selected', selected);
	// action : False -> Remove, True -> Add;
	const handleChange = (val, action) => {
		let newVal = [];
		if (action) {
			// If toggle on, add content in selected state
			newVal = [...selected, val];
		} else {
			// If toggle off, then remove content from selected state
			newVal = selected.filter((v) => v !== val);
		}
		console.log(newVal);
		setSelected(newVal);
	};
	return (
		<div>
			<OverLay name="Support Ticket" />
			<Wrapper>
				<Container>
					<Title style={{ color: '#0404453' }}>Frequently Ask Questions. 2</Title>
					<P>CHOOSE FROM 5,000 ONLINE VIDEO COURSES WITH NEW ADDITIONS 3</P>
				</Container>
				<Flex>
					<Box>
						{supports.map((item, index) => (
							<ToggleItem
								key={index}
								onChange={handleChange}
								id={index}
								discription={item}
							>
								<ToggleContainer item={selected} />
							</ToggleItem>
						))}
					</Box>
				</Flex>
			</Wrapper>
		</div>
	);
}

export default Support;

function ToggleContainer({ item }) {
	return (
		<div>
			{item.map((d, idx) => (
				<div key={idx}>{d.answer}</div>
			))}
		</div>
	);
}

function ToggleItem({ onChange, id, discription }) {
	const [toggleThisButton, setToggleThisButton] = useState(false);

	const handleClick = (index) => {
		onChange(discription, !toggleThisButton);
		setToggleThisButton((prev) => !prev);
	};

	return (
		<Button
			key={id}
			block
			onClick={() => handleClick(id)}>
			{discription.question}
		</Button>
	);
}

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
	margin: 0 auto;
	padding: 10px;
	border: 1px solid transparent;
`;

const Flex = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap:1rem;
`;
