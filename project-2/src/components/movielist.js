import react, {useEffect,useState} from 'react'
import Card from './card'
import "./movielist.css"
import { useParams } from 'react-router-dom'

function Movielist(){
    const [movieList ,setMovielist] = useState([])
    const {type} = useParams()
    console.log(type)
    useEffect(()=>{
        getData()
    },[])
    useEffect(()=>{
        getData()
    },[type])

    const getData =async() =>{
        const response = await fetch(`https://api.themoviedb.org/3/movie/${type?type :"popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        const data = await response.json()
        console.log(data.results)
        setMovielist(data.results)
    }   
    return(
        <>
            <div className='movie_list'>
                <h2 className='list_title'>{type?type :"popular"}</h2>
                <div className='list_cards'>
                    {   
                        movieList.map(movie =>(
                            <Card  movie={movie}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Movielist