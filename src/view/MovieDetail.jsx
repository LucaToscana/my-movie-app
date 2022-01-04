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
    const [year, setYear] = useState("")

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
                    
                    if(res.first_air_date!==undefined){

                  var year =       res.first_air_date.substring(0,4)
                  setYear(year)
                    }
                    
                   
          else if(res.release_date!==undefined){

                        var year =      res.release_date.substring(0,4)
                        setYear(year)
                          }
                    setGenres(res.genres)
                    setProduction(res.production_companies)
                    getCredits(dataT, id).then(res => {
                        setCast(res)
                    })
                    if (id !== undefined) {
                        axios.get("https://api.themoviedb.org/3/" + dataT + "/" + id
                            + "/videos?api_key=1ef9fd0ce00ab1df135c8453b7222865&append_to_response=videos")
                            .then(res => {
                                if (res.status !== 404) {
                                    setTrailer(res.data.results)
                                    if (trailer.length > 0) {
                                        var url = trailer.filter(x => x.key !== "")[0].key
                                        setTrailerUrl(url)
                                    }
                                }
                            })

                    }
                }
            })

    }, [dataT, id, trailer,year]);




    return (
        <div >
             <div className="flex justify-between m-4 h-30 p-5   rounded-full bg-gradient-to-r from-purple-400 to-orange-400 ">
        <h2 className="font-mono text-white text-3xl	">{movie.original_title} {movie.original_name} </h2>  
        <p className="font-mono text-white text-1xl	"> {year}</p> </div>          <div className="flex justify-center">


        </div>
            <div className="m-3 flex justify-center">
                {movie.poster_path ? <img className="rounded-2xl " src={img_path + movie.poster_path} alt={movie.original_title} /> : <div >no image  </div>}

            </div>
            <div className="m-3 flex justify-center text-justify	">  
               <article className="prose lg:prose-xl prose-a:text-blue-600 hover:prose-a:text-blue-500  max-w-none">

  
  <p>
  {  movie.overview}
  </p>

         
            <div className="m-3 flex justify-around">

                {genres.map(genres => (
                    <div> <p key={genres.name} className="underline decoration-sky-500">{genres.name}</p></div>
                ))}

                <div >
                <p class="underline decoration-green-500">  vote:   {movie.vote_average}</p>

                </div>
            </div>
            </article></div>
            <div className="grid grid-flow grid-cols-4 ">

                {cast.slice(0, 10).map(cast => (
                    <div className="m-3">                {cast.profile_path ?
                        <> <img  className="rounded-2xl " src={img_cast + cast.profile_path} alt={cast.name} /><small key={cast.name}
                         className="font-normal rounded-2xl  leading-normal mt-0 mb-4 text-purple-800">{cast.name}</small> </> :
                        <small key={cast.name} className="font-normal leading-normal mt-0 mb-4 text-purple-800">{cast.name}</small> //    <small key={cast.name} className="font-normal leading-normal mt-0 mb-4 text-purple-800">{cast.name}</small>
                    }
                    </div>
                ))}            </div>
            <div className="m-3  flex justify-around">

                {production.map(production => (
                    <div>                {production.logo_path ? <img src={"https://image.tmdb.org/t/p/h30" + production.logo_path} alt={production.name} /> :
                        <small key={production.name}
                         className="font-normal leading-normal mt-0 mb-4 text-purple-800">{production.name}</small>
                    }
                    </div>
                ))}
            </div>




            {trailer.length > 0 ? <div class="aspect-w-16 aspect-h-9 mb-8">
                <iframe src={"https://www.youtube-nocookie.com/embed/" + trailerUrl} frameBorder="0" title={trailerUrl} ></iframe>                </div>
                : null}
            <div className="m-24"> </div>

        </div>

    );
};

export default MovieDetail;