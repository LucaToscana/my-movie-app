import axios from "axios";

export default function getCredits (dataType, id )  {
    let params = "";           
    
    const end_url =  "https://api.themoviedb.org/3/" ;
    const api_key = '1ef9fd0ce00ab1df135c8453b7222865' 

    params += dataType +"/" + id + "/credits?api_key=" + api_key + "&language=en-US"    

    return axios.get(end_url + params )
    .then(res => {
        
        
        return  res.data.cast
    
    
    } )  

}
