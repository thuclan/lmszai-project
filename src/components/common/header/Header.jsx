import React, { useRef, useState } from 'react';
import { CaretDownOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Dropdown, Input, Space } from 'antd';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { items, itemsone } from '../../../shared/data/data';
import { logo } from '../../../shared/images';

function Header() {
  const navigate = useNavigate();
  const headerRef = useRef(null);

  // const topPosition = headerRef.current;
  // console.log("topPosition", topPosition);

  // const onScroll = () => {
  //   const scrollPosition = window.scrollY + window.innerHeight;

  //   if (topPosition > scrollPosition) {
  //     console.log("run scroll");
  //   }
  // };

  // useLayoutEffect(() => {
  //   onScroll();
  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  const handleLogin = () => {
    navigate('/login');
  };

  /* const headerLogIn = (
    <Dropdown menu={{ items }} trigger={["hover"]}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Lan
          <LoginOutlined />
          <CaretDownOutlined />
        </Space>
      </a>
    </Dropdown>
  ); */

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
            {/* { items: itemsone }: cái này là object
            { items }: đây là anh đang khai báo tắt của { items: items }
            khi truyền vào { itemsone } nó hiểu là { itemsone: itemsone }
            thì không đúng với cái intefrace mà menu khai báo
            okie anh, em cúp nha oke
            */}
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
