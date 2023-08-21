
import React,{createContext,useContext,useReducer} from  'react'
//Help for bulding Global variable
const  GlobalContext = createContext() //CONTAINER WHICH SHARE ALL THE DATA 
const baseurl = "https://api.jikan.moe/v4"

const reducer = (state,action)=>{
    switch(action.type){
        case loading:
            return{...state,loading:true}
        case "GET_POPULAR_ANIME":
            return {...state , popularanime:action.payload,loading:false}
        case Search:
            return {...state , searchResult:action.payload, loading:false}
        default:
            return state;
    }

}
const loading = "LOADING"
const Search = "SEARCH"
const getAnime = "GET_POPULAR_ANIME"

const GlobalContextProvider = ({children}) =>{// IT WILL PUT ALL THE DATA IN CONTAINER

    const intialState = {
        popularanime: [],
        upcominganime: [],
        airinganime:[],
        picture:[],
        isSearch: false,
        searchResult:[],
        lodaing:false
    }
    const [state, dispatch] = useReducer(reducer, intialState);
    const [search, setSearch] = React.useState(' ');
    
    const handleChnage = (e) =>{
    setSearch(e.target.value)
    if(e.target.value === ''){
        state.isSearch=false
    }
    }   
    const handleSubmit =(e) =>{
        e.preventDefault();
        if(search){
            searchAnime(search)
            state.isSearch=true
        }else{
            state.isSearch=false
            alert('please enter search term')
        }
    }


    const getPopularAnime = async ()=> {
        const response =await fetch(`${baseurl}/top/anime`)
        dispatch({type:loading})
        const data = await response.json()
        console.log(data.data)
        dispatch({type:getAnime,payload: data.data})
    }
    const searchAnime = async (anime)=>{
        dispatch({type:loading})
        const response = await fetch(`${baseurl}/search/anime/q=${anime}`)
        const data = await response.json()
        dispatch({type: Search,payload:data.data})
    }   

    React.useEffect(()=>{
        getPopularAnime()
    },[])
    return(
        <GlobalContext.Provider value={{ 
            ...state,
            handleChnage,
            handleSubmit,
            searchAnime,
            search}}>
            {children}
        </GlobalContext.Provider>

    )
}

export const useGlobalContext =() => {
    return useContext(GlobalContext);// HOOK WHICH ALLOW YOU TO MAKE DATA AVAILABLE GLOBAL

}
export {GlobalContextProvider}