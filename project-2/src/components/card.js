import raect,{useEffect,useState} from 'react'
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton'
import './card.css'
import {Link} from 'react-router-dom'
function Card({movie}){
        const [isloading,setloading] = useState(true)
        useEffect(()=>{
            setTimeout(()=>{
                setloading(false)
            },[])
        })
        return(
        <>
        {
        isloading?<div className="cards">
            <SkeletonTheme color="#202020"highlightColor='#fff' > 
                <Skeleton height={300} duration={4}/>
            </SkeletonTheme>
        </div>:
        <Link to={`/movie/${movie.id}`} style={{TextDecoration:"none",color:"white"}}>
            <div className='cards'>
                <img className='cards_image' src={`https://image.tmdb.org/t/p/original/${movie?movie.poster_path:""}`} />
                <div className='cards_overlay'>
                    <div className='cards_title'>{movie?movie.original_title:""}</div>
                    <div className='cards_runtime'>{movie?movie.release_date:""}</div>
                    <span className="cards_rating">
                                    {movie? movie.vote_average:""}
                                    <i className="fas fa-star" />{" "}
                                    </span>
                </div>
                <div className="cards_dis">{movie? movie.overview:""}.slice(0,110)</div>
            </div>
        </Link>
        }
        </>
    )
}


export default Card