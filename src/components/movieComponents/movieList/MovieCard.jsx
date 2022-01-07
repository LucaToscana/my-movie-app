import React, { useEffect, useState } from "react";
import FavoriteIcone from "../../FavoriteIcone";
import { Link } from "react-router-dom";
const MovieCard = ({ movies, dataType }) => {
    const [video, setVideo] = useState([])
    const [videoUrl, setVideoUrl] = useState([])
    const [id, setId] = useState(movies.id)

    const img_path = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/";

    const truncate = (str) => {
        var len = 300;
        if (str) {
            if (str.length >= 300) {
                return str.substring(0, len) + "...";
            }
            return str;
        }
    }


    return (
        <div className="flex justify-center m-1 ">
             <article className="prose lg:prose-xl  prose-a:text-blue-600 hover:prose-a:text-blue-500  ">
            <div className="max-w-sm p-2  bg-white			 shadow-lg rounded-lg m-1 p-3">

                <div className="w-full h-24 rounded-2xl text-center content-around">
                    <FavoriteIcone idMovie={movies.id} dataType={dataType} img={ movies.poster_path}  name={movies.name===undefined? movies.title:movies.name}></FavoriteIcone> 
                    
                    
                     <div className="w-50 "><p  className=" "><h4 class=" text-sm font-semibold uppercase leading-tight ">{movies.title}{movies.name}</h4></p> </div>
                    {movies.first_air_date !== undefined ? <div><p className="underline decoration-blue-500 text-sm	"> {movies.first_air_date.substring(0, 4)}</p></div>
                        : <div><p className="underline decoration-blue-500 text-sm	"> {movies.release_date.substring(0, 4)}</p></div>}
                </div>
                {<div className='grid grid-flow grid-cols-2 mt-4'>
                    <div className="w-full h-full rounded-2xl ">  
                         <Link
                        to={{
                            pathname: "/detailMovie",
                            state: { id: movies.id, dataType: dataType }
                        }}>{movies.poster_path !== null ? 
                        <div ><img className=" rounded-2xl" src={img_path + movies.poster_path} alt={movies.original_title} />
                        </div>  : <img className=" rounded-2xl" src={process.env.PUBLIC_URL + "/popcorn.png"} />}</Link></div>

                    <div className="m-3 h-48 w-full p-3" > <p className="text-xs">{truncate(movies.overview)}</p>
                    </div>
                    <span class="text-teal-600 text-md font-semibold"> rating: {movies.vote_average} </span>                </div>}
                   
                   
                    {/*genres.map(genres => (
                    <div> <p key={genres.name} className="underline decoration-sky-500">{genres.name}</p></div>
                    ))*/}
            </div>
            </article>
        </div>
    );
};

export default MovieCard;