import react, { useEffect } from "react"
import { useParams } from "react-router-dom"
import './Anime.css'
import {AsyncPaginate} from 'react-select-async-paginate'
function Anime(){
    const {id} = useParams()
    console.log(id)
    const [anime, setAnime] = react.useState({})
    const [characters, setCharcters] =react.useState([])
    const [show, setShowMore] = react.useState(false)

    const {title, synopsis,trailer,duration,aired,season,images,rank,score,scored_by,popularity,status,rating,source} = anime

    const getAnime = async(anime)=>{
        const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`)
        const data = await response.json()
        setAnime(data.data)
        console.log(data.data)
    }
    const getCharacters = async (anime)=>{
        const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}/characters`)
        const data = await response.json()
        console.log(data.data)
    }
    useEffect(()=>{
        getAnime(id)
        getCharacters(id)
    },[])

    return(
            <div className="box_1">
                <h1>{title}</h1>
                <div className="details">
                    <div className="detail">
                        <div className="image">
                            <img src={images?.jpg.large_image_url} alt=''/>
                        </div>
                        <div className="anime-details">
                                <p><span>Aired:</span><span>{aired?.string}</span></p>
                                <p><span>Rating:</span><span>{rating}</span></p>
                                <p><span>Rank:</span><span>{rank}</span></p>
                                <p><span>Score::</span><span>{score}</span></p>
                                <p><span>Score By:</span><span>{scored_by}</span></p>
                                <p><span>Popularity:</span><span>{popularity}</span></p>
                                <p><span>Status:</span><span>{status}</span></p>
                                <p><span>Score:</span><span>{score}</span></p>
                                <p><span>season:</span><span>{season}</span></p>
                                <p><span>Duration:</span><span>{duration}</span></p>
                        </div>
                        <p className="description">
                            {show ? synopsis: synopsis?.substring(0,300)+"..."}
                            <button onClick={()=> {
                                setShowMore(!show)
                            }}>{show? 'Show Less': "Read More"}
                            </button>
                        </p>
                    </div>
                </div> 
                <h3 className="title">Trailer</h3>
                <div className="trailer-con">
                    <iframe
                        src={trailer?.embed_url}
                        title={title}
                        width="800"
                        height="450"
                        frameBorder="0"
                        allowFullScreen>
                    </iframe>
                </div>
                <h3 className="title">Characters</h3>
                <div className="characters">
                        {characters?.map((character,index)=>{
                            
                            const{role} = character
                            const {images ,name ,mal_id}= character.character
                            return(
                                
                                <link to = {`/character/${mal_id}`} key={index}>
                                    <div className="character">
                                        {/* console.log("is it working") */}
                                        <img src={images?.jpg.image_url} alt=""/>
                                        <h4>{name}</h4>
                                        <p>{role}</p>
                                    </div>
                                </link>
                            )
                        })}
                </div>
            </div>

    )
}

export default Anime