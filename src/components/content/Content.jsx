import { ArrowRightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { cards } from '../../shared/data/cards';
import { hero } from '../../shared/images';
import Card from '../card/Card';
import Courses from '../course/Courses';

function Content() {
	return (
		<>
			<div id="content" className="content">
				<div className="content__container">
					<div className="content__container--item">
						<div className="text-animation">
							<h6>Come for learn</h6>
							<h1>A Better</h1>
							<h1>Learning</h1>
							<div id="flip">
								<div>
									<h1>platform</h1>
								</div>
								<div>
									<h1>era</h1>
								</div>
								<div>
									<h1>future</h1>
								</div>
							</div>
							<h1>Start Here</h1>
							<p>
								While The Lovely Valley Teems With Vapour Around Me, And The
								Meridian Sun Strikes The Upper
							</p>
							<Button icon={<ArrowRightOutlined />} className="btn">
								Browse Course
							</Button>
						</div>
					</div>
					<div className="content__container--item">
						<img src={hero} alt="hero-img" />
					</div>
				</div>
				<div className="content__card">
					{cards.map((card) => (
						<Card
							title={card.title}
							key={card.key}
							content={card.content}
							icon={card.icon}
						/>
					))}
				</div>
			</div>
			<div className="box">
				<Courses />
			</div>
		</>
	);
}

export default Content;
