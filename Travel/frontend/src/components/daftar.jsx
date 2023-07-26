import React, { useState } from "react";
import { useNavigate } from "react-router";
import Cookies from 'js-cookie';
import User from './image/user.png';
import backgroundUser from './image/background-user.jpg';
import { Form, Input, Button, Checkbox, Card, Typography } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import axios from "axios";
const { Title } = Typography;

export default function Daftar() {

  const navigation = useNavigate();
  const [validation, setValidation] = useState([]);
  const [ nama, setNama ] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    if (values.remember) {
      localStorage.setItem("nama", values.nama);
      localStorage.setItem("email", values.email);
      localStorage.setItem("password", values.password);
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    console.log("Handle password recovery logic here");
  };

  const handleSubmit = (event) => {
    let register = {nama, email, password};
  

  axios.post('http://localhost:5000/register', register)
  .then(res => {
       
       console.log(res.data)
       Cookies.set('token', res.data.token)
       if(!res.data.error){
        localStorage.setItem('user', JSON.stringify(res.data))
        navigation('/')
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
      <Card style={{ width: 500,  backgroundColor: "#c9d6ff" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={User} alt="" style={{ width: 70, marginBottom: 20 }} />
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
           <Form.Item
            name="nama"
            id="nama"
            rules={[{ required: true, message: "Tulis Nama Anda!" }]}
          >
            <Input
              onChange={(e) => setNama(e.target.value)}
              prefix={<UserOutlined className="site-form-item-icon" />}
              type="text"
              placeholder="Nama"
            />
          </Form.Item>
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
              Sign up
            </Button>
            Punya akun{" "}? {" "}
            <a href="" onClick={() => navigation('/')}>
              log in
            </a>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

