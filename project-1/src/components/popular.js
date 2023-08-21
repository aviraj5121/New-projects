import React from 'react'
import './popular.css'
import { useGlobalContext } from './Global'
import { Link } from 'react-router-dom'
function Popular(){
    const  {popularanime,isSearch} = useGlobalContext()
    const conditionalRender = () => {
        if(!isSearch){
            return popularanime.map((anime)=>{
                console.log(anime)
                return(
                    <div className='popularanime_1'>
                        <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                            <img src={anime.images.jpg.large_image_url} alt=''/>
                        </Link>
                    </div>
                )
            })
        }
    }
    return(
        <div>
            <h1>Popular</h1>
            <div className='popular-anime'>
                {conditionalRender()}
            </div>
        </div>
    )
}
export default Popular