import { ArrowRightOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PostApi } from '../../../api/post';
import { forums } from '../../../shared/data/cards';
import { forum, postImg } from '../../../shared/images';
import Card from '../../card/Card';
import Discussion from '../../discussion/Discussion';
import { Title } from '../../overlay/OverLay';
import OverLayOne from '../../overlay/OverLayOne';

function Forum() {
	const [posts, setPosts] = useState([]);
	// console.log('posts :>> ', posts);
	const getPosts = async () => {
		const res = await PostApi.find();
		setPosts(res.posts);
	};

	useEffect(() => {
		getPosts();
	}, []);

	const results = posts.slice(0, 2);
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
				<Post posts={results} />
				<Link to="/blog">
					<Button className="btn">
						All Blogs
						<ArrowRightOutlined />
					</Button>
				</Link>
				<div />
			</div>
		</div>
	);
}

export default Forum;

export function Post({ posts }) {
	return (
		<>
			<H3>Community Blog Articles</H3>
			<Wrapper>
				{posts.map((post, index) => (
					<Box>
						<Link to={`/blog-detail/${post.title}`} state={{ post }}>
							<Img src={postImg} alt="" />
							<H3>{post.title}</H3>
						</Link>
						<P>{post.body}</P>
						<Button className="btn">
							Read more
							<ArrowRightOutlined />
						</Button>
					</Box>
				))}
			</Wrapper>

		</>
	);
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 1rem;
`;

const Box = styled.div`
max-width: 546px;
`;

const Img = styled.img`
    max-width: 546px;
	height: auto;
`;

const H3 = styled.h3`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-height: 41px; /* fallback */
    max-height: 41 * 2;
	font-size: 40px;
	color: #040453;
	margin-bottom : 12px;
`;

const P = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3; /* number of lines to show */
    line-height: 24px; /* fallback */
    max-height: 24 * 3;
    margin-bottom: 18px;
`;
