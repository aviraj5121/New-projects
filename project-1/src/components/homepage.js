import react from 'react'
import { useGlobalContext } from './Global'
import Popular from './popular'
import { AsyncPaginate } from 'react-select-async-paginate'
function Homepage(){
    const [rendered,setRendered] = react.useState(false)
    const {handleSubmit,search,searchAnime , handleChange} =useGlobalContext()
    const switchComponent = () =>{
        switch(rendered){
        case 'popular':
            return <Popular rendered={rendered} />
        default:
            return <Popular rendered={rendered} />
        }
    }       
    return(
        <div>
                <header>
                    <div className='logo'>
                        <h1>
                            {rendered === 'popular' ? 'Popular Anime' : 
                            rendered === 'airing'? 'Airing Anime': 'Upcoming Anime'}
                        </h1>
                    </div>
                    <div className='search-container'>
                        <div className='filter-btn opular-filter'>
                                <button onClick={()=>{
                                    setRendered('popular')
                                }}>Popular<i className="fas fa-fire"></i></button>
                        </div>
                        <form action="" className='search-form' onSubmit={handleSubmit}>
                                <div className='input-control'>
                                    <input type='text'placeholder='Search Anime'  value={search} onChange={handleChange}/>
                                </div>
                        </form>
                    </div>
                </header>
        </div>
    )
}
export default Homepage