import React, { useEffect, useRef, useState } from 'react';
import { CaretDownOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Dropdown, Input, Space } from 'antd';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { items, itemsone } from '../../../shared/data/data';
import { logo } from '../../../shared/images';

function Header() {
	const navigate = useNavigate();
	 const headerRef = useRef(null);

	  useEffect(() => {
		let lastScrollY = 0;

		function handleScroll() {
			const { scrollY } = window;
			console.log('scrollY :>> ', scrollY);
			const header = headerRef.current;

			// Show the header if the scroll position has changed
			if (scrollY > lastScrollY) {
				header.classList.add('show');
			} else {
				header.classList.remove('show');
			}

			// Update the last scroll position
			lastScrollY = scrollY;
		}

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleLogin = () => {
		navigate('/login');
	};

	return (
		<header className="header" ref={headerRef}>
			<div className="header__container">
				<div className="header__container--logo">
					<a href="/">
						<img src={logo} alt="logo" />
					</a>
				</div>
				<div className="header__container--nav">
					<div className="header__container--nav--left">
						<Dropdown menu={{ items: itemsone }} trigger={['hover']}>
							<a onClick={(e) => e.preventDefault()}>
								<Space>
									Courses
									<CaretDownOutlined />
								</Space>
							</a>
						</Dropdown>

						<Input
							size="large"
							placeholder="Search Course..."
							prefix={<SearchOutlined />}
							style={{
								marginLeft: '30px',
								borderRadius: '24px',
								backgroundColor: 'transparent'
							}}
						/>
					</div>

					<div className="header__container--nav--right">
						<Dropdown menu={{ items }} trigger={['hover']}>
							<a onClick={(e) => e.preventDefault()}>
								<Space>
									Pages
									<CaretDownOutlined />
								</Space>
							</a>
						</Dropdown>

						<Link to="/forum">Forum</Link>
						<Link to="/blog">Blog</Link>
						<Link to="/contact">Contact</Link>

						<Button type="ghost" onClick={handleLogin} className="btn">
							Sign Up
						</Button>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
