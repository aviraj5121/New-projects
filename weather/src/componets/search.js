import react from 'react'
import {AsyncPaginate} from 'react-select-async-paginate'
import { Link, useHistory } from "react-router-dom";

function Search({onSearchChange}){
    
    const [search, setSearch] = react.useState(null);
    const handleOnChange = (searchData) => {
        setSearch(searchData);
        console.log(searchData)
        onSearchChange(searchData)   
    }
    const loadOptions = async(inputvalue) =>{
        const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions?namePrefix='+inputvalue;
        const options = {
	        method: 'GET',
	        headers: {
                'X-RapidAPI-Key': '693dc4b1a0mshe9e08ea98cbd6f6p12e389jsn887f1d89737c',
                'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	        }
        };
        const response = await fetch(url,options)
        const data  = await response.json()
        console.log(data)
        return {
            options: data.data.map((cities)=>{
                return{
                    value:`${cities.latitude} ${cities.longitude}`,
                    label: `${cities.name},${cities.country}`,
                }
            })
        }
    }
    
    return( 
    <>
        <AsyncPaginate 
            placeholder="Search For City"
            dobounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    </>)
}

export default Search