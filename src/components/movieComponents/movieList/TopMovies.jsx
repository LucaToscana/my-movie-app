import React, { useEffect, useState } from "react";
import axios from "axios";
import FavoriteIcone from "../../FavoriteIcone";
import MovieCard from "./MovieCard";
import TopMovieCard from "./TopMovieCard";

const Movies = ({ movies ,dataType}) => {
  const [video, setVideo] = useState([])
  const [videoUrl, setVideoUrl] = useState([])
  const [id, setId] = useState(movies.id)



  useEffect(() => {
  }, [])




  return (
    <div >
    { movies!==null? <div className="grid  grid-cols-3 grid-rows-1 ">
        
        {movies.slice(0,3).map((movies) => (
          <TopMovieCard movies={movies} dataType={dataType}></TopMovieCard>
        ))

        }
      </div>:null}
    </div>
  );
};

export default Movies;