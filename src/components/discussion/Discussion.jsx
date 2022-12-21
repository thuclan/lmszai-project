import { Select } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { options } from '../../shared/data/data';
import CardDiscuss from '../card/CardDiscuss';
import { Title } from '../overlay/OverLay';

function Discussion() {
	return (
		<Wrapper>
			<div>
				<Title>Recent Discussions</Title>
				<Select
					showSearch
					style={{
						width: 200
					}}
					defaultValue="All Categories"
					optionFilterProp="children"
					filterOption={(input, option) => (option?.label ?? '').includes(input)}
					filterSort={(optionA, optionB) => (optionA?.label ?? '')
						.toLowerCase()
						.localeCompare((optionB?.label ?? '').toLowerCase())}
					options={options}
				/>
				<Box>
					<CardDiscuss />
					<CardDiscuss />
					<CardDiscuss />
					<CardDiscuss />
					<CardDiscuss />
					<CardDiscuss />
					<CardDiscuss />
					<CardDiscuss />
					<CardDiscuss />
					<CardDiscuss />
					<CardDiscuss />
					<CardDiscuss />
				</Box>
			</div>

			<div>Top Contributors</div>
		</Wrapper>
	);
}

export default Discussion;

const Box = styled.div`
   display: flex;
   padding: 50px 0;
   flex-direction:column;
   gap:2rem;
`;

const Wrapper = styled.div`
   display:flex;
   justify-content: space-between;
   gap:2rem;
`;
