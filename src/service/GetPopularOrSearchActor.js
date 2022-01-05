import axios from "axios";

export default function getPopularOrSearchActor ( searchTerm, keyword,currentPage)  {
    let params = "";           
        
    const end_url =  "https://api.themoviedb.org/3" ;
    const api_key = '1ef9fd0ce00ab1df135c8453b7222865' 

    if(searchTerm === "search" && keyword !== '' ){
        
        params += "/search/person" +"?api_key=" + api_key + "&query=" + keyword + "&include_adult=false"
    }else{
        params += "/person" +"/popular?api_key=" + api_key 
    }

    params += "&language=en-US&page="+currentPage

    return axios.get(end_url + params )
    .then(res => {
        
        
        return  res.data
    
    
    } )
}
