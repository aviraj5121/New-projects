import react from "react";
import './header.css'
import {Link , useNavigate} from "react-router-dom"
import {AsyncPaginate} from 'react-select-async-paginate'
function Header(){

    const history = useNavigate();
    const [search, setSearch] = react.useState(null);
    const handleOnChange = (searchData) => {

        setSearch(searchData);
        console.log(searchData)
        const movieId = searchData.value;
        history(`/movie/${movieId}`)
        window.location.reload()
    }
    const loadOptions = async(inputvalue) =>{
        const url = `https://api.themoviedb.org/3/search/movie?query=${inputvalue}&include_adult=false&language=en-US&page=1`+inputvalue;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmZhMzJiMjY0MGY5YTY3NjA0OWRiZGUzNDRiMjdiZSIsInN1YiI6IjY0Y2ZlNGFmNGQ2NzkxMDBjNTJjOWNlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IzH9NUch9v2kvLMtTjzsEVJ87R6O99AZBuwDVLESuhA'
            }
        };
        try {
            const response = await fetch(url, options);
            const data = await response.json();
            
            const formattedOptions = data.results.slice(0, 10).map(movie => ({
                value: movie.id,
                label: movie.title,
                // You can include additional properties like "poster_path" here if needed
            }));
            
            return { options: formattedOptions };
        } catch (error) {
            console.error('Error fetching movie data:', error);
            return { options: [] }; // Return an empty array in case of an error
        }
    }

    return(
        
        <div className="header">
            <div className="headerleft">
                <Link to="/"><img className="headericon" src="https://i.pinimg.com/564x/58/0a/73/580a7324842216f1d2654c4acd3ae541.jpg"/></Link>
                <Link to="/movies/popular"style={{textDecoration:"none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated"style={{textDecoration:"none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming"style={{textDecoration:"none"}}><span>Upcoming</span></Link>
            </div>
            <div className="headerright">
            <AsyncPaginate 
            placeholder="Search For Movie"
            dobounceTimeout={1000}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
            </div>
        </div>
    )
}

export default Header