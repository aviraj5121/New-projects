import React,{useState}from 'react'
import axios from  "axios"
const Resgistor = () => {
    const [fname , setFname] = useState("")
    const [lname , setLname] = useState("")
    const [email , setEmail] = useState("")
    const [password  , setPassword] = useState("")
    async function registerUser(event){
        event.preventDefault()
        const response  = await axios.post("http://localhost:5121/create",{fname,lname,email,password})
        const  data =response.data
        console.log(data)
    };
  return (
    <div>
            <h1>Registation</h1>
      <form onSubmit={registerUser}>
        <input type='text' placeholder='First Name'
          value={fname}
          onChange={(e)=>setFname(e.target.value)}/>
        <input type='text' placeholder='Last Name'
          value={lname}
          onChange={(e)=>setLname(e.target.value)}/>
        <input type='email' placeholder='Email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}/>
        <input type='password' placeholder='Password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}/>
        <input  type='submit' value="SignUp"/>
      </form>
    </div>
  )
}

export default Resgistor
