import react,{useState,useEffect} from "react"
import { useParams ,useNavigate } from "react-router-dom"
import axios from "axios"
import './update.css'
function Update(){

    const navigate = useNavigate()
    const [name ,setName] = useState()
    const [email ,setEmail] = useState()
    const [age ,setAge] = useState()
    const {_id} = useParams()
    const updatedata = async()=>{
        const response = await axios.get('http://localhost:5121/getuser/'+_id)
        const data =  response.data
        console.log(data , data[0].name )
        setName(data[0].name)
        setAge(data[0].age)
        setEmail(data[0].email)
}
    useEffect(()=>{
        updatedata()
    },[])
    const update = async(e) =>{
        e.preventDefault()
        try{
            const requestData = { name, email, age }; // Create a data object
            console.log("Data being sent:", requestData);
            const response  = await axios.put("http://localhost:5121/update/"+_id, {name,email,age})
            const data =  response.data
            console.log(data)
            navigate('/')
        }
        catch(error){
                console.log(error)
        }
    }
    return(
        <>
        <div id="login">
            <form onSubmit={update}>
                <h1>Update Data </h1>

                    <label htmlFor="mb2">Movie Name</label>
                    <input type="text" placeholder="Your Name" className="createuser" value={name} onChange={(e) => setName(e.target.value)}/>

                    <label htmlFor="mb2">type</label>
                    <input type="text" placeholder="Your Name" className="createuser" value={email} onChange={(e) => setName(e.target.value)}/>

                    <label htmlFor="mb2">Genre</label>
                    <input type="text" placeholder="Your Age" className="createuser"value={age} onChange={(e) => setAge(e.target.value)} />
                <button>Update</button>
            </form>
        </div>
        </>
    )
}

export default Update