import React, { useEffect, useState } from "react";
import FavoriteIcone from "../../FavoriteIcone";
import { Link } from "react-router-dom";
const TopMovieCard = ({ movies, dataType }) => {
    const [video, setVideo] = useState([])
    const [videoUrl, setVideoUrl] = useState([])
    const [id, setId] = useState(movies.id)

    const img_path = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/";

   


    return (
        <div className="flex justify-center">
            <div className="max-w-md p-2  bg-slate-100			 shadow-lg rounded-lg m-2 ">

                <div className="w-full h-24 rounded-2xl text-center content-around">
                    <FavoriteIcone idMovie={movies.id}></FavoriteIcone>  <div>     <p class="underline decoration-blue-500">{movies.title}{movies.name}</p></div>
                    {movies.first_air_date !== undefined ? <div>{movies.first_air_date.substring(0, 4)}</div>
                        : <div>{ movies.release_date.substring(0,4)}</div>}
                </div>
                {<div className='grid grid-flow grid-cols-1 '>
                    <div className="w-full h-full rounded-2xl pt-6 ">       {movies.poster_path !== null ? <Link
                        to={{
                            pathname: "/detailMovie",
                            state: { id: movies.id, dataType: dataType }
                        }}>
                        <div ><img className=" rounded-2xl" src={img_path + movies.poster_path} alt={movies.original_title} />
                        </div> </Link> : null}</div>

                  
                </div>}

            </div>
        </div>
    );
};

export default TopMovieCard;