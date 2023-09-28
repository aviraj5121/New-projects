import react, { useState } from"react"
import axios from 'axios'
import { useNavigate} from "react-router-dom"
import './create.css'
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
        <div id="login">
            <form>
                    <h1>Add Movie</h1>
                    <label htmlFor="mb2">Movie Name</label>
                    <input type="text" placeholder="" className="createuser"
                        onChange={(e) => setName(e.target.value)} required/>
                    <label htmlFor="mb2">Type</label>
                    <input type="text" placeholder="" className="createuser"
                        onChange={(e) => setEmail(e.target.value)} required/>

                    <label htmlFor="mb2">Genre</label>
                    <input type="text" placeholder="" className="createuser" 
                        onChange={(e) => setAge(e.target.value)} required/>
                    <button onClick={Submit}> Submit</button>
            </form>
        </div>
    )
}

export default Createuser