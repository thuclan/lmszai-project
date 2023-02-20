import { ArrowRightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { events } from '../../../shared/data/data';
import OverLay, { Title } from '../../overlay/OverLay';

function About() {
	return (
		<div>
			<OverLay name="About" />
			<Wrapper>
				<Container>
					<Title style={{ color: '#0404453' }}>
						Mere Tranquil Existence, That I Neglect My Talents Should
					</Title>
					<P>
						Possession Of My Entire Soul, Like These Sweet Mornings Of Spring Which I
						Enjoy With My Whole Heart. I am Alone, And a Charm Of Existence In This
						Spot, Which Was Created For The Bliss Of Souls Like Mine. I am So Happy, My
						Dear Friend, So Absorbed In The Exquisite Sense Of Mere Tranquil Existence
					</P>
				</Container>
				<Grid>
					<img src="https://lmszai.zainikthemes.com/uploads_demo/gallery/1.jpg" alt="" />
					<img src="https://lmszai.zainikthemes.com/uploads_demo/gallery/3.jpg" alt="" />
				</Grid>
			</Wrapper>
			<Wrapper>
				<Container>
					<Title style={{ color: '#0404453' }}>Our History</Title>
					<P>
						Possession Of My Entire Soul, Like These Sweet Mornings Of Spring Which I
						Enjoy With My Whole Heart. I Am Alone, And Charm Of Existence In This Spot
						Which
					</P>
				</Container>
				<Grid>
					{events.map((item, index) => (
						<Event item={item} key={index} />
					))}
				</Grid>
				<Wrapper>

					<Grid>
						<img
							src="https://lmszai.zainikthemes.com/uploads_demo/about_us_general/upgrade.jpg"
							alt=""
						/>
						<div>
							<Title style={{ color: '#0404453' }}>
								Upgrade Your Skills Today For Upgrading Your Life.
							</Title>
							<P>
								Noticed by me when I hear the buzz of the little world among the stalks,
								and grow familiar with the countless indescribable forms of the insects
								and flies, then I feel the presence stalks, and grow familiar with the
								countless
							</P>
							<Button className="btn">
								Find Your Course
								<ArrowRightOutlined />
							</Button>
						</div>
					</Grid>
				</Wrapper>
			</Wrapper>
		</div>
	);
}

export default About;

function Event({ item }) {
	return (
		<Box>
			<H6>{item.title}</H6>
			<p>{item.content}</p>
		</Box>
	);
}

const Wrapper = styled.div`
    padding-top: 110px;
	padding-bottom: 10px;
`;
const Container = styled.div`
    margin: 0 auto;
    width: 60%;
    text-align: center;
`;

const P = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 154%;
    color: #52526c;
	text-align: center;
    margin-bottom: 44px;
`;

const Grid = styled.div`
    display: grid;
    width: 60%;
    margin: 0 auto;
	gap: 1rem;
    grid-template-columns: repeat(2,1fr);
`;

const Box = styled.div`
    padding: 30px;
    margin: 20px 12px;
	background-color: #fff;
`;

const H6 = styled.h6`
    font-size: 18px;
    line-height: 19px;
    font-weight: 700 !important;
    color: #040453;
`;
