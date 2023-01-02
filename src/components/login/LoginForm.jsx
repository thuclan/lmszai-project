/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Space } from 'antd';
import { useNavigate } from 'react-router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, signInWithGoogle } from '../../utils/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

function LoginForm() {
	const [value, setValue] = useState({
		email: '',
		password: ''
	});
	const [user, loading, error] = useAuthState(auth);
	const navigate = useNavigate();

	useEffect(() => {
		if (loading) {
			// maybe trigger a loading screen
			return;
		}
		if (user) navigate('/');
	}, [user, loading]);

	const onFinish = (values) => {
		console.log('Received values of form: ', values);
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	return (
		<Form
			name="basic"
			labelCol={{
				span: 8
			}}
			wrapperCol={{
				span: 16
			}}
			initialValues={{
				remember: true
			}}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off">
			<h5>Sign In</h5>
			<p>
				New User ?
				<Button type="ghost">
					<li>Create An Account</li>
				</Button>
			</p>

			<Form.Item
				label="Username"
				name="username"
				rules={[
					{
						required: true,
						message: 'Please input your username!'
					}
				]}>
				<Input value={value.email} onChange={(e) => setValue(e.target.value)} />
			</Form.Item>

			<Form.Item
				label="Password"
				name="password"
				rules={[
					{
						required: true,
						message: 'Please input your password!'
					}
				]}>
				<Input.Password value={value.password} onChange={(e) => setValue(e.target.value)} />
			</Form.Item>

			<Form.Item
				name="remember"
				valuePropName="checked"
				wrapperCol={{
					// offset: 8,
					span: 16
				}}>
				<Button type="ghost">
					<li>Forgot Password?</li>
				</Button>
			</Form.Item>

			<Form.Item
				wrapperCol={{
					span: 16
				}}>
				<Space className="btn-group" direction="vertical">
					{/* <Space.Compact block> */}
					<Button
						className="btn"
						htmlType="submit"
						onClick={() => signInWithEmailAndPassword(value.email, value.password)}>
						Sign In
					</Button>
					<Button className="btn btn-google" htmlType="submit" onClick={signInWithGoogle}>
						Sign In With Google
					</Button>
					<Button className="btn btn-facebook" htmlType="submit">
						Sign In With FaceBook
					</Button>
					<Button className="btn btn-twitter" htmlType="submit">
						Sign In With Twitter
					</Button>
					{/* </Space.Compact> */}
				</Space>
			</Form.Item>
		</Form>
	);
}

export default LoginForm;
