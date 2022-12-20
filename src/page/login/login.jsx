import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/login/LoginForm';
import { hero, logo } from '../../shared/images';

function LogInPage() {
	return (
		<div className="login">
			<div className="login__left">
				<Link to="/">
					<img src={logo} alt="logo" style={{ height: 45, width: 145 }} />
				</Link>
				<p>DIscover World Best Online Courses Here. 24k Online Course Is Waiting For You</p>
				<img src={hero} alt="hero" style={{ marginTop: 130 }} />
			</div>
			<div className="login__right">
				<LoginForm />
			</div>
		</div>
	);
}

export default LogInPage;
