import react,{ useEffect } from "react";
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {Link} from 'react-router-dom'
import Movielist from "../components/movielist";
function Home(){
    const [popular ,setpopular] = react.useState([])
    const popularmovie = async()=>{
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US');
        const data = await response.json()
        console.log(data.results)
        setpopular(data.results)
    }
    
    useEffect(()=>{
        popularmovie()
    },[])
    return(
        
        <>
            <div className="poster">
            <Carousel
                    showThumb={false}
                    autoplay ={true}
                    tansitonTime={1.5}
                    infiniteLoop={true}
                    showStatus={false}
            >
                    {
                        popular.map(MOVIE=>(
                            <Link style={{textDecoration:'none',color:'white'}}to={`/movies/${MOVIE.id}`}>
                                {console.log(MOVIE.original_title)}
                                <div className="posterimage">
                                    <img src={`https://image.tmdb.org/t/p/original/${MOVIE &&MOVIE.backdrop_path}`}/>
                                </div>
                                <div className="posterimageoverlay">
                                    <div className="posterimagetitle">{MOVIE?MOVIE.original_title:"NO title"}</div>
                                    <div className="posterimageruntime">
                                    {MOVIE? MOVIE.release_date:""}
                                    <span className="posterimagerating">
                                    {MOVIE? MOVIE.vote_average:""}
                                    <i className="fas fa-star" />{" "}
                                    </span>
                                    </div>
                                </div>
                                <div className="posterimagedis">{MOVIE? MOVIE.overview:""}</div>
                                
                            </Link>
                        )) 
                    }
                </Carousel>
                <Movielist />
            </div>
        </>
    )
}

export default Home