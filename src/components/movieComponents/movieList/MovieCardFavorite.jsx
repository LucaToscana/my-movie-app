import React, { useEffect, useState } from "react";
import FavoriteIcone from "../../FavoriteIcone";
import { Link } from "react-router-dom";
const MovieCardFavorite = ({ movies, dataType }) => {
    const [video, setVideo] = useState([])
    const [videoUrl, setVideoUrl] = useState([])
    const [id, setId] = useState(movies.id)

    const img_path = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/";

    const truncate = (str) => {
        var len = 120;
        if (str) {
            if (str.length >= 120) {
                return str.substring(0, len) + "...";
            }
            return str;
        }
    }


    return (
        <div className="flex justify-center m-1 ">
             <article className="prose lg:prose-xl  prose-a:text-blue-600 hover:prose-a:text-blue-500 ">
            <div className="max-w-md p-2  bg-slate-100			 shadow-lg rounded-lg m-2 ">

                <div className="w-full h-24 rounded-2xl text-center content-around">
                    <FavoriteIcone idMovie={movies.id} dataType={dataType} img={ movies.poster_path}  name={movies.name===undefined? movies.title:movies.name}></FavoriteIcone> 
                    
                    
                     <div className="w-50"><p  className="underline decoration-blue-500 ">{movies.title}{movies.name}</p> </div>
                    {movies.first_air_date !== undefined ? <div><p className="underline decoration-blue-500 text-sm	">  {movies.first_air_date.substring(0, 4)}</p></div>
                        : null}
                </div>
                {<div className='grid grid-flow-row-dense grid-cols-2 grid-rows-4'>
                    <div className="w-full h-full rounded-2xl ">       {movies.poster_path !== null ? <Link
                        to={{
                            pathname: "/detailMovie",
                            state: { id: movies.id, dataType: dataType }
                        }}>
                        <div ><img className=" rounded-2xl" src={img_path + movies.poster_path} alt={movies.original_title} />
                        </div> </Link> : null}</div>

                    <div className="m-3 h-48 w-full p-1" > <p className="text-xs">{truncate(movies.overview)}</p>
                    </div>
                    {movies.vote_average}
                </div>}

            </div>
            </article>
        </div>
    );
};

export default MovieCardFavorite;