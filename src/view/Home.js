import React, { useState, useEffect, useRef } from "react";
import Movies from "../components/movieComponents/movieList/Movies";
import Pagination from "../Pagination";
import axios from "axios";

import getPopularOrSearch from "../service/getPopularOrSearch";
const Tv = () => {

 
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(20);
  const [movieCount, setMovieCount] = useState(0)
  const [searchTerm, setSearchTerm] = useState('search')
  const [keyword, setKeyword] = useState("")
  const [dataType, setDataType] = useState("movie")


  const updateResp = (data) => {
    setMovies(data.results)
    setMovieCount(data.total_results)
  }

  useEffect(() => {
    getPopularOrSearch(dataType, searchTerm, keyword, currentPage)
      .then(res => {
        if(res.status!==404)
      {  updateResp(res)
        
      }}
        )
  }, [keyword, currentPage, dataType, searchTerm]);
  //search

  const searchTermChange = (key) => {
    getPopularOrSearch(dataType, searchTerm, key, currentPage)
    .then(res => {
      if(res.status===200)
    {  updateResp(res)
      
    }}
      )
  }


  // Change page
  const paginateFront = () => {
    if (currentPage < 5) {
      getPopularOrSearch(dataType, searchTerm, keyword, currentPage + 1)
      .then(res => {
        if(res.status!==404)
      {  updateResp(res)
        
      }}
        )

      setCurrentPage(currentPage + 1)
    }
  }


  const paginateBack = () => {
    if (currentPage > 1) {

      getPopularOrSearch(dataType, searchTerm, keyword, currentPage - 1)
      .then(res => {
        if(res.status!==404)
      {  updateResp(res)
        
      }}
        )

      setCurrentPage(currentPage - 1);

    //  window.location.reload()
    }
  }


  // Change page
  const paginate = (pageNumber) => {
    getPopularOrSearch(dataType, searchTerm, keyword, pageNumber)
    .then(res => {
      if(res.status!==404)
    {  updateResp(res)
      
    }}
      )


    setCurrentPage(pageNumber)



  }



    ;
  return (
    <div >
      <div className="flex justify-center">

        <button className="bg-sky-600 hover:bg-sky-700 ">
          TV</button>
        <input id="myTextInput" className="border-solid border-gray-300 border py-2 px-4 w-48 
    rounded text-gray-700"//autofocus="autofocus"
          onChange={(e) => {
            searchTermChange(e.target.value)
            setKeyword(e.target.value);
          }}
        />
      </div>
   {movies!==null? <>  <Pagination
        moviesPerPage={moviesPerPage}
        totalMovies={movieCount}
        paginate={paginate}
        currentPage={currentPage}
        paginateBack={paginateBack}
        paginateFront={paginateFront}
      />
      <Movies movies={movies} dataType={dataType} />
      </>:null }
    </div>
  );
};

export default Tv;