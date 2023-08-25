import axios from 'axios'
import React,{useState}from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
  const [email , setEmail] = useState(" ")
  const [password  , setPassword] = useState("")
  async function loginUser (event){
    event.preventDefault()
    const response = await axios.post("http://localhost:5121/login",{email,password})
    const data = response.data
    console.log(data)
    try {
      const response = await axios.post("http://localhost:5121/login", { email, password });
      const data = response.data;

      if (data) {
        // Display a success message on the page instead of an alert
        alert("Login successful");
        window.location.href = "/dashboard"
      } else {
        // Display an error message on the page instead of an alert
        console.log("Please check the email and password");
      }
    } catch (error) {
      // Handle error cases here
      console.error("An error occurred:", error);
    }
  }
  return (
    <div className='login'>
            <h1>Login</h1>
      <form onSubmit={loginUser}>
        <input type='email' placeholder='Email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}/>
        <input type='password' placeholder='Password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}/>
        <input  type='submit' value="Login"/>
        <Link to={'/registation'}><button>SignUp</button></Link>
      </form>
    </div>
  )
}

export default Login
