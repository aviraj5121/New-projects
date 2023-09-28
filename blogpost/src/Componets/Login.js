import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./login.css"
const Login = () => {
  const  navigate = useNavigate()
const onFinish = async(values) => {

  console.log('Success:', values);
  const response = await axios.post("http://localhost:5121/login", { values ,withCredential:true})
  const data = response.data
  if(response.status == 200){
    console.log("okay you loged in")
    localStorage.setItem('token', data);
    navigate('/')
  }
else{
  alert("Wong username or password")
}
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

  return(
  <div className='box'> 
        <Form className='form'
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
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
          message: 'Please input your username!',
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
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>


    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  </div>)
};
export default Login;