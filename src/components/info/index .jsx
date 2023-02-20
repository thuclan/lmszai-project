import { DashboardOutlined, LogoutOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { auth, logout } from '../../utils/firebase';

function Info() {
    	const [user, loading, error] = useAuthState(auth);

	return (
		<Wrapper>
			<FlexRow>
				<Img src={user?.photoURL} alt="avt" />
				<FlexColumn>
					<h6>{user?.displayName}</h6>
					<p>{user?.email}</p>
				</FlexColumn>
			</FlexRow>
			<Ul>
				<Li>
					<DashboardOutlined />
					<Link to="/admin/dashboard" className="text">Admin DashBoard</Link>
				</Li>
			</Ul>
			<Ul>
				<Li>
					<QuestionCircleOutlined />
					<Link to="/support-ticket-faq" className="text">Help Support</Link>
				</Li>
				<Li>
					<LogoutOutlined />
					<Link to="/" onClick={logout} className="text">
						Logout
					</Link>
				</Li>
			</Ul>
		</Wrapper>
	);
}

export default Info;

const Wrapper = styled.div`
    position: absolute;
    background: #fff;
    border-radius: 4px;
    padding: 10px;
    margin-top: 0;
    right: 20px;
}
`;

const FlexRow = styled.div`
    display: flex;
    gap: 1rem;
`;

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

const Img = styled.img`
    height: 22px;
    width: 22px;
    border-radius: 50%;
`;

const Ul = styled.ul`
    border-top: 1px solid #eee9e9;
    padding-top: 10px;
    margin: 10px 24px 0;
`;

const Li = styled.li`
display: flex;
color: #000;
`;
