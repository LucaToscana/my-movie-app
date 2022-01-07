import React, { useEffect, useState } from "react";
import axios from "axios";
import FavoriteIcone from "../../FavoriteIcone";
import MovieCard from "./MovieCard";
import TopMovieCard from "./TopMovieCard";
import TopMovieCardLine from "./TopMovieCardLine";

const Movies = ({ movies ,dataType}) => {
  const [video, setVideo] = useState([])
  const [videoUrl, setVideoUrl] = useState([])
  const [id, setId] = useState(movies.id)



  useEffect(() => {
  }, [])




  return (
    <div className="flex justify-center  ">
    { movies!==null? <div className="flex flex-wrap  gap-4 flex justify-center  ">
        
        {movies.slice(0,6).map((movies) => (
          <TopMovieCardLine movies={movies} dataType={dataType}></TopMovieCardLine>
          
        ))

        }
      </div>:null}
    </div>
  );
};

export default Movies;