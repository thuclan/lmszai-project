/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Button, Form, Input, Space } from "antd";
/* import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../utils/firebase"; */

// import { app } from "../../utils/firebase";

function LoginForm() {
  //Sign in with google
  /* const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      console.log("login");
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
    } catch (error) {
      console.log(error);
    }
  }; */
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      ></Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Space direction="vertical">
          <Space.Compact block={true} className="btn-group">
            <Button className="btn" htmlType="submit">
              Sign In
            </Button>
            <Button className="btn btn-google" htmlType="submit">
              Sign In With Google
            </Button>
            <Button className="btn btn-facebook" htmlType="submit">
              Sign In With FaceBook
            </Button>
            <Button className="btn btn-twitter" htmlType="submit">
              Sign In With Twitter
            </Button>
          </Space.Compact>
        </Space>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;
