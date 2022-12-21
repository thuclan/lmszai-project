import { CommentOutlined, EyeOutlined, StarOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { formatDate } from '../../helpers/formatDate';
import { Li, Ol } from '../overlay/OverLay';
import { Box, BoxColumn, Img } from '../overlay/OverLayOne';

function CardDiscuss() {
	return (
		<div className="dicuss">
			<Img src="https://lmszai.zainikthemes.com/uploads_demo/user/2.jpg" />
			<div className="dicuss__content">
				<div>
					<p>Get started</p>
					<a href="/">How can i buy couses form LMSZai?</a>
					<p>To buy course from LMSZai please contact with us</p>
				</div>
				<div>
					<Ol>
						<Li>by Jame</Li>
						<Li>Instructor</Li>
						<Li>{formatDate(new Date())}</Li>
					</Ol>
					<Ol>
						<Li>
							<StarOutlined />
						</Li>
						<Li>
							<EyeOutlined />
						</Li>
						<Li>
							<CommentOutlined />
						</Li>
					</Ol>
				</div>
			</div>
		</div>
	);
}

export default CardDiscuss;
