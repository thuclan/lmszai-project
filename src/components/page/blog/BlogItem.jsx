import React from 'react';
import { useLocation } from 'react-router';
import { postImg } from '../../../shared/images';
import OverLay from '../../overlay/OverLay';

function BlogItem() {
	const { state } = useLocation();

	const { post } = state;
	return (
		<div>
			<OverLay name="Blog" />
			<img src={postImg} alt="" />
			<h3>{post.title}</h3>
			<p>{post.body}</p>
		</div>
	);
}

export default BlogItem;
