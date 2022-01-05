import React, { useState, useEffect, useRef } from "react";
import Movies from "../components/movieComponents/movieList/Movies";
import Pagination from "../Pagination";
import { AiOutlineSearch } from "react-icons/ai"
import getPopularOrSearch from "../service/getPopularOrSearch";
import getDetails from "../service/GetDetails";
import { useSelector, useDispatch } from 'react-redux'
import MovieCard from "../components/movieComponents/movieList/MovieCard";
import { FiMonitor } from "react-icons/fi";
import { BsPeopleFill } from "react-icons/bs";
import { GiFilmProjector } from "react-icons/gi";
import TopMovieCard from "../components/movieComponents/movieList/TopMovieCard";
import { Link } from "react-router-dom";

const FavoriteView = () => {


  const img_path = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/";

  const [like, setLike] = useState([]);

  const [tv, setTv] = useState([]);

  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [moviesPerPage] = useState(20);
  const [movieCount, setMovieCount] = useState(0)
  const [searchTerm, setSearchTerm] = useState('search')
  const [keyword, setKeyword] = useState("")
  const [dataType, setDataType] = useState("movie")

  const [dataTypeTv, setDataTypeTv] = useState("tv")

  const favorite = useSelector(state => state.favorite.value)
  
  const paginateGood = (array, page_size, page_number) => {
    return array.slice(page_number * page_size, page_number * page_size + page_size);
  };

  useEffect(() => {
   const p =  paginateGood(favorite, moviesPerPage, currentPage)
    setLike(p)
    setMovieCount(like.length)


  }, [ favorite, moviesPerPage, currentPage]);
  //search

  



    ;
  return (
    <div >
      <div className=" m-2 h-20 p-5  flex justify-between rounded-full bg-gradient-to-r from-purple-400 to-orange-400 ">

        <h2 className="font-mono text-white text-5xl	">FAVORITE</h2>
        </div>
        <Pagination
        moviesPerPage={20}
        totalMovies={like.length+20}
       // paginate={paginate}
        currentPage={currentPage+1}
        paginateBack={()=>
          {if(currentPage>0)
         { setCurrentPage(currentPage-1)
        
          }}
        }
        paginateFront={()=>{
          if(currentPage<like.length/20
            ){
          setCurrentPage(currentPage+1)
        
          }}
        }
      />


      <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-5">

        {like.map((like) => (
          <div>
             <Link
                        to={{
                            pathname: "/detailMovie",
                            state: { id: like.idMovie, dataType: like.dataType }
                        }}>
            
           {
           like.img!==null?
           
           <img className=" rounded-2xl" src={img_path + like.img} />
                    
: <div className="bg-[url('../public/popcorn.png')] w-full  h-full rounded-2xl flex  text-center bg-no-repeat	justify-start "><p className="text-bold w-16 h-12 text-red-600 md:text-red-600">{like.name}</p></div>   
} 
           </Link>


                 

          </div>))

        }

      </div>





      <div className="mt-16"></div>
    </div>
  );
};

export default FavoriteView;