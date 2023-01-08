/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/alt-text */
import { BarChartOutlined, BookOutlined, ClockCircleOutlined, DownloadOutlined, GlobalOutlined, HeartOutlined, ReadOutlined, SafetyCertificateOutlined, ShareAltOutlined, StarOutlined, TeamOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Button, Space, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { increment } from '../../features/counter/counterSlice';

function ProductItem({ user }) {
	const { state } = useLocation(); // <-- access route state
	const dispatch = useDispatch();

	const { product } = state || {}; // <-- unpack the item from state

	console.log(product);

	const onChange = (key) => {
		console.log(key);
	};

	const discussion = (
		<>
			<img src="https://lmszai.zainikthemes.com/frontend/assets/img/empty-data-img.png" />
			<H3>No Discussion Found</H3>
		</>
	);

	const review = (
		<Flexbox>
			<Container>
				<BoxOne>
					<h3>0.0</h3>
					<ul>
						<StarOutlined />
						<StarOutlined />
						<StarOutlined />
						<StarOutlined />
						<StarOutlined />
					</ul>
					<p>0 Reviews</p>
				</BoxOne>
			</Container>

			<Container>
				<BoxTwo>
					<ul>
						<StarOutlined />
						<StarOutlined />
						<StarOutlined />
						<StarOutlined />
						<StarOutlined />
					</ul>
				</BoxTwo>
			</Container>
		</Flexbox>
	);

	const items = [
		{
			label: 'Overview',
			key: '1',
			children: `${product.description}`
		},
		{
			label: 'Discussion',
			key: '2',
			children: discussion
		},
		{
			label: 'Review',
			key: '3',
			children: review
		}
	];

	const handleSubmit = () => {
	  user ? dispatch(increment({})) : toast('You need to login first!');
	};

	return product ? (
		<div className="product">
			<div className="product__container">
				<div className="product__container--overlay">
					<h3>{product.title}</h3>
					<p>
						{product.category}
                        &nbsp;
						<span>
							| &nbsp;
							{product.brand}
						</span>
					</p>
				</div>
			</div>
			<div className="product__intro">
				<Tabs defaultActiveKey="1" onChange={onChange} items={items} />

				<Box>
					<Img src={product.thumbnail} alt={product.title} />
					<h4>
						$ &nbsp;
						{product.price}
					</h4>
					<Ul>
						<Li>
							<BoxTwo>
								<ClockCircleOutlined />
								<span>Course Duration</span>
							</BoxTwo>
							<div>54 min 0 sec</div>
						</Li>
						<Li>
							<BoxTwo>
								<BarChartOutlined />
								<span>Course Level</span>
							</BoxTwo>
							<div>Higher</div>
						</Li>
						<Li>
							<BoxTwo>
								<TeamOutlined />
								<span>Student Enrolled</span>
							</BoxTwo>
							<div>0</div>
						</Li>
						<Li>
							<BoxTwo>
								<GlobalOutlined />
								<span>Language</span>
							</BoxTwo>
							<div>English</div>
						</Li>
					</Ul>
					<Space wrap direction="vertical">
						<Button className="btn" onClick={handleSubmit}>
							Enroll the Course
						</Button>
						<Space.Compact direction="horizontal">
							<Button>
								<HeartOutlined />
								Add to Wishlist
							</Button>
							<Button>
								<ShareAltOutlined />
								Share Course
							</Button>
						</Space.Compact>
					</Space>
					<BoxOne>
						<H6>This Course Includes</H6>
						<BoxTwo>
							<VideoCameraOutlined />
							<span>4 min 10 sec Video Lectures</span>
						</BoxTwo>
						<BoxTwo>
							<BookOutlined />
							<span>0 Quizzes</span>
						</BoxTwo>
						<BoxTwo>
							<ReadOutlined />
							<span>0 Assignments</span>
						</BoxTwo>
						<BoxTwo>
							<DownloadOutlined />
							<span>0 Downloadable Resources</span>
						</BoxTwo>
						<BoxTwo>
							<ClockCircleOutlined />
							<span>Full Lifetime Access</span>
						</BoxTwo>
						<BoxTwo>
							<SafetyCertificateOutlined />
							<span>Certificate of Completion</span>
						</BoxTwo>
					</BoxOne>
				</Box>
			</div>
		</div>
	) : (
		'No item matched/found.'
	);
}

export default ProductItem;

const Flexbox = styled.div`
    display: flex;
	padding: 40px;
	gap:2rem;
`;

const Container = styled.div`
    display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Box = styled.div`
    display: flex;
	background: #fff;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 12;
    margin-top: -300px;
    border-radius: 3px 3px 0 0;
    overflow: hidden;
    margin-left: 26px;
	border-radius: 4px;
	height: 100%;
`;

const BoxOne = styled.div`
   padding: 32px;
`;

const BoxTwo = styled.div`
    display: flex;
	gap: 1rem;
	padding: 10px;
`;

const H3 = styled.h3`
    font-size: 24px;
    line-height: 28px;
    font-weight: 600;
    color: #040453;
	margin-top: 1rem!important;
`;

const H6 = styled.h6`
    font-size: 24px;
    line-height: 28px;
    font-weight: 600;
    color: #040453;
    margin-bottom: 1rem !important;
`;

const Img = styled.img`
   height: 288px;
   width: 368px;
`;

const Ul = styled.ul`
   display: flex;
   flex-direction: column;
   gap:1rem;
`;

const Li = styled.li`
    display: flex;
    justify-content: space-between;
	gap: 2rem;
`;
