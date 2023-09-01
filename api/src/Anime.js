import React , {useState} from 'react'
import axios from   'axios'
const Anime = () => {
    const [name ,setName] = useState("")
    const callAPi = async(e) =>{
        e.preventDefault();
        const response = await axios.get(`https://wizard-world-api.herokuapp.com/Elixirs?Name=${name}`)
        const data = await response.data
        console.log(data)
    }
  return (
    <section>
        <form onSubmit={callAPi}>
                <input type='text' onChange={(e)=>setName(e.target.value)}/>
                <button type="submit">Search</button>
        </form>
    </section>
  )
}

export default Anime
