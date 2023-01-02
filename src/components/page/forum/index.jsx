import { SearchOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import React from 'react';
import { forums } from '../../../shared/data/cards';
import { forum } from '../../../shared/images';
import Card from '../../card/Card';
import Discussion from '../../discussion/Discussion';
import { Title } from '../../overlay/OverLay';
import OverLayOne from '../../overlay/OverLayOne';

function Forum() {
	return (
		<div className="forum">
			<div className="forum__overlay">
				<div className="forum__overlay--left">
					<h5>Forum</h5>
					<Form>
						<Form.Item>
							<Input
								size="large"
								placeholder="Type To Search For Solutions..."
								prefix={<SearchOutlined />}
								style={{
									backgroundColor: 'transparent'
								}}
							/>
							<span style={{ color: '#fff', fontSize: 26, padding: '0 10px' }}>
								Or
							</span>
							<Button className="btn">Ask A Question</Button>
						</Form.Item>
					</Form>
				</div>
				<div className="forum__overlay--right">
					<img src={forum} alt="forum" />
				</div>
			</div>
			<div className="forum__content">
				<Title>Forum Categories</Title>
				<div className="forum__content--card">
					{forums.map((card) => (
						<Card
							title={card.title}
							key={card.key}
							content={card.content}
							icon={card.icon}
						/>
					))}
				</div>
				<OverLayOne />
				<Discussion />
			</div>
		</div>
	);
}

export default Forum;
