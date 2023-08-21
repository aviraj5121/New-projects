import react, { useState } from"react"
import axios from 'axios'
import { useNavigate} from "react-router-dom"
function Createuser(){
    const navigate = useNavigate()
    const [name ,setName] = useState()
    const [email ,setEmail] = useState()
    const [age ,setAge] = useState()
    const Submit = async(e)=>{
        e.preventDefault()
        try{
            const requestData = { name, email, age }; // Create a data object
            console.log("Data being sent:", requestData);
            const response  = await axios.post("http://localhost:5121/create", {name,email,age})
            const data =  response.data
            console.log(data)
            navigate('/')
        }
        catch(error){
                console.log(error)
        }
    }   
    return(
        <div>
            <form>
                <h1>Add User</h1>
                <div>
                    <label htmlFor="mb2">Name</label>
                    <input type="text" placeholder="Your Name" className="createuser"
                     onChange={(e) => setName(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="mb2">Email</label>
                    <input type="text" placeholder="Your Email" className="createuser"
                        onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="mb2">Age</label>
                    <input type="text" placeholder="Your Age" className="createuser" 
                        onChange={(e) => setAge(e.target.value)} required/>
                </div>
                <button onClick={Submit}> Submit</button>
            </form>
        </div>
    )
}

export default Createuser