/* eslint-disable consistent-return */
import React, { useEffect, useRef, useState } from 'react';
import { BarsOutlined, CaretDownOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Dropdown, Form, Input, Space } from 'antd';
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

function Header() {
	const quantity = useSelector((state) => state.counter.value);
	const [open, setOpen] = useState(false);
	const [state, setState] = useState({
		query: '',
		list: []
	});
	const [openNav, setOpenNav] = useState(false);
	const navigate = useNavigate();
	const [user, loading, error] = useAuthState(auth);
	const headerRef = useRef(null);
	const [products, setProducts] = useState([]);
	const getProducts = async () => {
		const res = await ProductApi.find();
		setProducts(res.products);
	};

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

		getProducts();

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleChange = (e) => {
		const results = products.filter((product) => {
			if (e.target.value === '') { return products; }
			return product.title;
		});
		setState({
			// query: e.target.value,
			list: []
		});
	};

	/* useEffect(() => {
		handleChange();
	}, [state.query]);
 */
	const handleLogin = () => {
		navigate('/login');
	};

	const handleOpen = () => {
		setOpen(!open);
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
						<Form>
							<Form.Item>
								<Input
									size="large"
									value={state.query}
									onChange={handleChange}
									placeholder="Search Course..."
									prefix={<SearchOutlined />}
									style={{
										marginLeft: '30px',
										borderRadius: '24px',
										backgroundColor: 'transparent'
									}}
								/>
							</Form.Item>
							{/* <ul>
								{state.query === ''
									? ''
									: state.list.map((product) => {
										return <li key={product.title}>{product.title}</li>;
									})}
							</ul> */}
						</Form>
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
							onClick={user ? handleOpen : handleLogin}
							className={user ? '' : 'btn'}>
							{user ? <Img src={user.photoURL} alt="avt" /> : 'Sign Up'}
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
	 margin-right: 4px;
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
