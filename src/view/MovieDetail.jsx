import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import getDetails from "../service/GetDetails";
import getCredits from "../service/GetCredits";

const MovieDetail = () => {
    const img_path = "https://image.tmdb.org/t/p/w300_and_h450_bestv2";
    const img_cast = "https://image.tmdb.org/t/p/w138_and_h175_face"

    let data = useLocation();
    const id = data.state.id
    const dataT = data.state.dataType

    const [movie, setMovie] = useState({})
    const [genres, setGenres] = useState([])
    const [production, setProduction] = useState([])
    const [cast, setCast] = useState([])
    const [trailer, setTrailer] = useState({})
    const [trailerUrl, setTrailerUrl] = useState("")



    useEffect(() => {
        getDetails(dataT, id)
            .then(res => {
                if (res !== null) {
                    setMovie(res)
                    setGenres(res.genres)
                    setProduction(res.production_companies)
                    getCredits(dataT, id ).then(res => {
                        setCast(res)
                }) 
                if(id!==undefined){
                    axios.get("https://api.themoviedb.org/3/"+dataT+"/" +id 
                    + "/videos?api_key=1ef9fd0ce00ab1df135c8453b7222865&append_to_response=videos")
                        .then(res => {
                            if(res.status!==404){
                                setTrailer(res.data.results)
                                if(trailer.length>0){
                            var url = trailer.filter(x => x.key !=="")[0].key
                            setTrailerUrl(url)}}
                        })
                    
                }
                }
            })

    }, [dataT,id,trailer]);




    return (
        <div >            <div className="flex justify-center">

            <h4>{movie.original_title} {movie.original_name} <small >{movie.first_air_date}</small> </h4>

        </div>
            <div className="m-3 flex justify-center">
                {movie.poster_path ? <img className="" src={img_path + movie.poster_path} alt={movie.original_title} /> : <div >no image  </div>}

            </div>

            <div className="m-3 flex justify-around">

                {genres.map(genres => (
                    <div> <small key={genres.name} className="font-normal leading-normal mt-0 mb-4 text-purple-800">{genres.name}</small></div>
                ))}

                <div >
                    {movie.vote_average}

                </div>
            </div>
         
            <div className="grid grid-flow grid-cols-5 ">
                
                {cast.slice(0, 10).map(cast => (
                        <div className="m-3">                {cast.profile_path ?
                          <> <img src={img_cast + cast.profile_path} alt={cast.name} /><small key={cast.name} className="font-normal leading-normal mt-0 mb-4 text-purple-800">{cast.name}</small> </> :
                          <small key={cast.name} className="font-normal leading-normal mt-0 mb-4 text-purple-800">{cast.name}</small> //    <small key={cast.name} className="font-normal leading-normal mt-0 mb-4 text-purple-800">{cast.name}</small>
                    }
                        </div>
                ))}            </div>
            <div className="m-3  flex justify-around">
                
                {production.map(production => (
                    <div>                {production.logo_path ? <img  src={"https://image.tmdb.org/t/p/h30" + production.logo_path} alt={production.name} /> :
                    <small key={production.name} className="font-normal leading-normal mt-0 mb-4 text-purple-800">{production.name}</small>
                }
                    </div>
                ))}
            </div>
        
           
          
                
            { trailer.length>0 ?<div class="aspect-w-16 aspect-h-9 mb-8">
             <iframe src={"https://www.youtube-nocookie.com/embed/"+trailerUrl} frameBorder="0" title={trailerUrl} ></iframe>                </div>
            :null}            
<div className="m-24"> </div>

        </div>

    );
};

export default MovieDetail;