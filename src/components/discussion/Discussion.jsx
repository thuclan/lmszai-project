import { ArrowRightOutlined, HeartOutlined } from '@ant-design/icons';
import { Button, Select, Space } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { options } from '../../shared/data/data';
import CardDiscuss from '../card/CardDiscuss';
import { Title } from '../overlay/OverLay';

function Discussion() {
	return (
		<Wrapper>
			<FlexBox>
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
				</Box>
			</FlexBox>

			<FlexBox1>
				<Button className="btn" style={{ width: '100%' }}>
					Ask A Question
				</Button>
				<ol>
					<li>
						<HeartOutlined />
						Top Contributors
					</li>
					<li>User 1</li>
					<li>User 2</li>
				</ol>

				<Button className="btn btn-view">
					View All
					<ArrowRightOutlined />
				</Button>
			</FlexBox1>
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

const FlexBox = styled.div`
   display: flex;
   flex-direction: column;
   flex-grow: 2;
`;

const FlexBox1 = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
	gap:1rem;
`;

const Ol = styled.ol`
    border: 1px solid rgb(205, 202, 202);
`;
