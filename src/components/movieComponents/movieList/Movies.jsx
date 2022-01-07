import React, { useEffect, useState } from "react";
import axios from "axios";
import FavoriteIcone from "../../FavoriteIcone";
import MovieCard from "./MovieCard";

const Movies = ({ movies ,dataType}) => {




  useEffect(() => {
  }, [])




  return (
    <div className="flex justify-center">
    { movies!==null? <div className="flex flex-wrap  gap-4 flex justify-center ">
        
        {movies.map((movies) => (
          <MovieCard movies={movies} dataType={dataType}></MovieCard>
        ))

        }
      </div>:null}
    </div>
  );
};

export default Movies;