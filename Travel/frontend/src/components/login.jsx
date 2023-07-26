import React, { useState } from "react";
import { useNavigate } from "react-router";
import Cookies from 'js-cookie';
import User from './image/user.png';
import backgroundUser from './image/background-user.jpg';
import { Form, Input, Button, Checkbox, Card, Typography, message } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios";
const { Title } = Typography;

export default function Login() {

  const [form] = Form.useForm(); 
  const navigation = useNavigate();
  const [validation, setValidation] = useState([]);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const onFinishFailed = () => {
    message.error('Login gagal');
  };

  const handleRegister = (e) => {
    e.preventDefault();
    navigation('/daftar')
  };

  const handleSubmit = (event) => {
    let login = {email, password};
  

  axios.post('http://localhost:5000/login', login)
  .then(res => {
       Cookies.set('token', res.data.token)
       if(!res.data.error){
        localStorage.setItem('user', JSON.stringify(res.data))
        message.success('Login berhasil')
        setTimeout(() => {
          navigation('/home');
        }, 1000); 
       }
       else {
        Cookies.remove('token')
       }
  })
  .catch(error => {
    console.log(error.message);
  })
}

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: `url(${backgroundUser})`, // Apply the background image here
        backgroundSize: "cover",
      }}
    >
      <Card style={{ width: 500, backgroundColor: "#c9d6ff" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={User} alt="" style={{ width: 70, marginBottom: 20 }} />
        </div>
        <Form
          form={form}
          onFinishFailed={onFinishFailed}
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="email"
            id="email"
            rules={[{ required: true, message: "Tulis Email Anda!" }]}
          >
            <Input
              onChange={(e) => setEmail(e.target.value)}
              prefix={<MailOutlined className="site-form-item-icon" />}
              type="email"
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            id="password"
            rules={[{ required: true, message: "Tulis Password Anda!" }]}
          >
            <Input
              onChange={(e) => setPassword(e.target.value)}
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
            {/* <a
              style={{ float: "right" }}
              className="login-form-forgot"
              href=""
              onClick={handleForgotPassword}
            >
              Forgot password
            </a> */}
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button
              onClick={handleSubmit}
              type="primary"
              htmlType="submit"
              className="login-form-button"
              block
            >
              Log in
            </Button>
            Belum punya akun{" "}? {" "}
            <a href="" onClick={handleRegister}>
              sign up
            </a>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

