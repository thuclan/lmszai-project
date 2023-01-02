import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function OverLay(props) {
	const { name, category } = props;
	return (
		<Wrapper>
			<Title>{name}</Title>
			<nav>
				<Ol>
					<li>
						<Link to="/">Home</Link>
					</li>
					<Li>
						<Link>{name}</Link>
					</Li>
					{category ? (
						<Li>
							<Link>{category}</Link>
						</Li>
					) : ''}
				</Ol>
			</nav>
		</Wrapper>
	);
}

export default OverLay;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #264653;
    width: 100%;
    height: 400px;
    font-size: 16px;
    padding: 200px 0 100px;
    color: #fff;
`;

const Title = styled.h5`
    font-size: 40px;
    padding-bottom: 15px;
`;

const Ol = styled.ol`
    display:flex;
`;

const Li = styled.li`
    text-decoration: underline;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
`;

export { Wrapper, Title, Ol, Li };
