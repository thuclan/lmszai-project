/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState } from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/common/footer/Footer';
import Header from '../components/common/header/Header';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

function Layout() {
	const [isloading, setIsLoading] = useState(undefined);

	setInterval(() => {
		setIsLoading(true);
	}, [3000]);

	return (
		<>
			{!isloading ? (
				<Wrapper>
					<ReactLoading type="spinningBubbles" color="ffffff" height="64" width="100%" />
				</Wrapper>
			) : (
				<>
					<Header />
					<main>
						<Outlet />
					</main>
					<Footer />
				</>
			)}
		</>
	);
}

export default Layout;

const Wrapper = styled.div`
    margin: auto;
	height: 64px;
	width: 64px;
`;
