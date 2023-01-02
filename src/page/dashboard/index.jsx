/* eslint-disable no-alert */
/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { query, collection, getDocs, where } from 'firebase/firestore';
import { auth, db, logout } from '../../utils/firebase';
import styled from 'styled-components';
import Info from '../../components/info/index ';

function Dashboard() {
	const [user, loading, error] = useAuthState(auth);
	const [open, setOpen] = useState(false);
	const [name, setName] = useState('');
	const navigate = useNavigate();
	const fetchUserName = async () => {
		try {
			const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
			const doc = await getDocs(q);
			const data = doc.docs[0].data();
			setName(data.name);
		} catch (err) {
			console.error(err);
			alert('An error occured while fetching user data');
		}
	};
	useEffect(() => {
		if (loading) return;
		if (!user) return navigate('/');
		fetchUserName();
	}, [user, loading]);
	return (
		<div className="dashboard">
			<div className="dashboard__container">
				<Img src={user?.photoURL} alt="avt" onClick={() => setOpen(!open)} />
				{open ? <Info /> : ''}
			</div>
		</div>
	);
}
export default Dashboard;

const Img = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50%;
`;
