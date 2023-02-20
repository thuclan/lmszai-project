/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Button, Card } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';
import { items, itemsone } from '../../shared/data/data';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

function Course(props) {
	const { products, content, status } = props;
	const { Meta } = Card;
	return (
		<div className="course">
			<div className="course__text">
				<div className="course__text--box">
					<img src={content.icon} alt="" style={{ width: 55, height: 55 }} />
					<div className="course__text--box--title">
						<h1>{content.title}</h1>
						<p>{content.description}</p>
					</div>
				</div>
				{status ? (
					<Button className="btn btn-view">
						View All
						<ArrowRightOutlined />
					</Button>
				) : (
					<div className="course__text--nav">
						<ul>
							{itemsone.map((item, index) => (
								<li key={index}>{item.label}</li>
							))}
						</ul>
					</div>
				)}
			</div>
			<div className="course__content">
				<Swiper
					modules={[Autoplay, Navigation]}
					spaceBetween={50}
					slidesPerView={4}
					navigation
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
					onSlideChange={() => console.log('slide change')}>
					{products?.map((product, index) => (
						<SwiperSlide key={index}>
							<Link to={`/product-detail/${product.title}`} state={{ product }}>
								<Card
									hoverable
									style={{ width: 290, height: 350 }}
									cover={(
										<img
											alt={product.brand}
											src={product?.thumbnail}
											style={{ height: 200 }}
										/>
									)}>
									<Meta
										title={product.brand}
										description={product.description}
										price={product.price}
									/>
								</Card>
							</Link>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default Course;
