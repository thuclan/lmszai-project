import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import styled from 'styled-components';
import { PostApi } from '../../../api/post';
import OverLay from '../../overlay/OverLay';
import { Post } from '../forum';

function Blog() {
	const [posts, setPosts] = useState([]);
	const getPosts = async () => {
		const res = await PostApi.find();
		setPosts(res.posts);
	};

	useEffect(() => {
		getPosts();
	}, []);
	return (
		<div>
			<OverLay name="Blog" />
			<Box>
				<Post posts={posts} />
			</Box>
		</div>
	);
}

export default Blog;

const Box = styled.div`
    padding: 100px 300px;
`;
