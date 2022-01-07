import React, { useState, useEffect, useRef } from "react";
import Movies from "../components/movieComponents/movieList/Movies";
import Pagination from "../Pagination";
import {AiOutlineSearch}   from "react-icons/ai"
import getPopularOrSearch from "../service/getPopularOrSearch";
import getPopularOrSearchActor from "../service/GetPopularOrSearchActor";
import Artists from "../components/actorsComponents/Artists";
const Actors = () => {

 
  const [actors, setActor] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [actorPerPage] = useState(20);
  const [actorCount, setActorCount] = useState(0)
  const [searchTerm, setSearchTerm] = useState('search')
  const [keyword, setKeyword] = useState("")
  const [dataType, setDataType] = useState("people")


  const updateResp = (data) => {
    setActor(data.results)
    setActorCount(data.total_results)
  }

  useEffect(() => {
    getPopularOrSearchActor(searchTerm, keyword,currentPage)
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
    <div ><div className=" m-2 h-20 p-5  flex justify-between rounded-full bg-gradient-to-r from-purple-400 to-orange-400 ">
   
  <h2 className="font-mono text-white text-4xl	">ARTIST</h2> 
    <input id="myTextInput" className="border-solid border-gray-300 border py-2 px-4 w-1/3 
    rounded text-gray-700"
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        /></div>
      <div className="flex justify-center">
   
       
      
      </div>
   {actors!==null? <> 
    <Pagination
        moviesPerPage={actorPerPage}
        totalMovies={actorCount}
        paginate={paginate}
        currentPage={currentPage}
        paginateBack={paginateBack}
        paginateFront={paginateFront}
      />
      <Artists artists={actors} dataType={dataType} />
      </>:null }
    </div>
  );
};

export default Actors;