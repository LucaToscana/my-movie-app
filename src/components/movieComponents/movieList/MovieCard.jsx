import React, { useEffect, useState } from "react";
import axios from "axios";
import FavoriteIcone from "../../FavoriteIcone";
import { Link } from "react-router-dom";
const MovieCard = ({ movies ,dataType}) => {
    const [video, setVideo] = useState([])
    const [videoUrl, setVideoUrl] = useState([])
    const [id, setId] = useState(movies.id)

    const img_path = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/";

    const truncate = (str) => {
        var len = 60;
        if (str) {
            if (str.length >= 60) {
                return str.substring(0, len) + "...";
            }
            return str;
        }
    }
    const api_key = '1ef9fd0ce00ab1df135c8453b7222865'

    useEffect(() => {/*
        if(movies.id!==undefined){
        axios.get("https://api.themoviedb.org/3/movie/" + movies.id + "/videos?api_key=1ef9fd0ce00ab1df135c8453b7222865&append_to_response=videos")
            .then(res => {
                if(res.status!==404){
                setVideo(res.data.results)
                var url = video.filter(x => x.key !=="")[0].key
                setVideoUrl(url)}
            })
        
    }*/}, []);



    return (
        <div className="flex justify-center">
            <div className="max-w-md p-2  bg-slate-100			 shadow-lg rounded-lg m-2 ">

                <div className="w-full h-24 rounded-2xl text-center content-around">
                    <FavoriteIcone idMovie={movies.id}></FavoriteIcone>  <div> {movies.title}{movies.name}</div>
                    {movies.first_air_date !== undefined ? <div>{movies.first_air_date.substring(0, 4)}</div>
                        : null}
                </div>
                {<div className='grid grid-flow grid-cols-2 '>
                <div className="w-full h-full rounded-2xl ">       {movies.poster_path !== null ? <Link
                        to={{
                            pathname: "/detailMovie",
                            state: { id: movies.id , dataType:dataType}
                        }}>
                        <div ><img className=" rounded-2xl" src={img_path + movies.poster_path} alt={movies.original_title} />
                        </div> </Link> : null}</div>

                    <div className="m-3 h-48" > <p className="text-sm ">{truncate(movies.overview)}</p>
                    </div>
                    {movies.vote_average}
                </div>}
                { /* video.length>0? <div class="aspect-w-16 aspect-h-9">
             <iframe width='1080' height='760' src={"https://www.youtube.com/embed/"+videoUrl} frameborder="0" allowfullscreen></iframe>                </div>
    :null*/}
            </div>
        </div>
    );
};

export default MovieCard;