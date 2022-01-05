import React, { useEffect, useState } from "react";
import axios from "axios";
import FavoriteIcone from "../../FavoriteIcone";
import MovieCard from "./MovieCard";

const Movies = ({ movies ,dataType}) => {




  useEffect(() => {
  }, [])




  return (
    <div className="flex justify-center">
    { movies!==null? <div className="grid grid-flow-row-dense grid-cols-2 grid-rows-4 ">
        
        {movies.map((movies) => (
          <MovieCard movies={movies} dataType={dataType}></MovieCard>
        ))

        }
      </div>:null}
    </div>
  );
};

export default Movies;