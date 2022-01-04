import axios from "axios";

export default function getDetails (dataType, id )  {
    /*
https://api.themoviedb.org/3/tv/{tv_id}?api_key=<<api_key>>&language=en-US*/ 
    let params = "";           
    
    const end_url =  "https://api.themoviedb.org/3/" ;
    const api_key = '1ef9fd0ce00ab1df135c8453b7222865' 

    params += dataType +"/"+id+"?api_key="+api_key+"&language=en-US"    

   /*"https://api.themoviedb.org/3/"+dataT+"/"+id+"?api_key="+api_key+"&language=en-US"*/ 
    return axios.get(end_url + params )
    .then(res => {
        
        
        
        return  res.data
    
    
    } )

}
