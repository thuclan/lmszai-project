import React, { useEffect, useRef, useState } from 'react';
import { BarsOutlined, CaretDownOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Dropdown, Input, Space } from 'antd';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { items, itemsone } from '../../../shared/data/data';
import { logo } from '../../../shared/images';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, logout } from '../../../utils/firebase';
import styled from 'styled-components';
import Info from '../../info/index ';
import { useSelector } from 'react-redux';
import { ProductApi } from '../../../api/product';
import { query } from 'firebase/firestore';

function Header() {
	const quantity = useSelector((state) => state.counter.value);
	const [open, setOpen] = useState(false);
	const [openNav, setOpenNav] = useState(false);
	const navigate = useNavigate();
	const [user, loading, error] = useAuthState(auth);
	const headerRef = useRef(null);

	  useEffect(() => {
		let lastScrollY = 0;

		function handleScroll() {
			const { scrollY } = window;
			const header = headerRef.current;

			// Show the header if the scroll position has changed
			if (scrollY > lastScrollY) {
				header.classList.add('show');
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

	const Profile = (open
		&& (
			<Info />
		)
	);

	return (
		<header className="header" ref={headerRef}>
			<div className="header__container">
				<div className="header__container--logo">
					<a href="/">
						<img src={logo} alt="logo" />
					</a>
				</div>
				<div className={`header__container--nav ${openNav}? 'show' : ''  `}>
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

						<Cart>
							<ShoppingCartOutlined />
							<Span>{quantity}</Span>
						</Cart>
						<Button
							type="ghost"
							onClick={user ? setOpen(!open) : handleLogin}
							className={user ? '' : 'btn'}>
							{user ? <Img src={user?.photoURL} alt="avt" /> : 'Sign Up'}
							{Profile}
						</Button>
					</div>
				</div>

				<Button className="navbar-toggle" onClick={() => setOpenNav(!openNav)}>
					<BarsOutlined />
				</Button>
			</div>
		</header>
	);
}

export default Header;

const Img = styled.img`
     height: 32px;
	 width: 32px;
	 border-radius: 50%;
`;

const Cart = styled.div`
    position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
    height: 32px;
    width: 32px;
    border-radius: 50%;
	background: #fff;
`;

const Span = styled.span`
    position: absolute;
    top: -4px;
    right: 1px;
	color: #fff;
	border-radius: 50%;
    background: #264653;
`;
