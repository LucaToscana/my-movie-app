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
import Car from "../components/movieComponents/classExample";
import FavoriteMovieCardLine from "../components/movieComponents/movieList/CreditMovieCardLine";
import FavoriteIcone from "../components/FavoriteIcone";

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
    const p = paginateGood(favorite, moviesPerPage, currentPage)
    setLike(p)
    setMovieCount(favorite.length)


  }, [favorite, moviesPerPage, currentPage]);
  //search





  ;
  return (
    <div >
      <div className=" m-2 h-20 p-5  flex justify-between rounded-full bg-gradient-to-r from-purple-400 to-orange-400 ">

        <h2 className="font-mono text-white text-5xl	">FAVORITE</h2>
      </div>
      <Pagination
        moviesPerPage={20}
        //totalMovies={movieCount}
        // paginate={paginate}
        currentPage={currentPage + 1}
        paginateBack={() => {
          if (currentPage > 0) {
            setCurrentPage(currentPage - 1)

          }
        }
        }
        paginateFront={() => {
          if (currentPage + 1 < movieCount / 20
          ) {
            setCurrentPage(currentPage + 1)

          }
        }
        }
      />


      <div className="flex flex-wrap  gap-1 flex justify-center  ">

        {like.map((like) => (
          <div className="m-1">

            {
              like.img !== null ?
                <div className=" rounded-2xl h-48 w-48" style={{
                  backgroundImage: "url(" + img_path + like.img + ")",
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',

                }}>
                  {like.dataType !== "people" ? <Link
                    to={{
                      pathname: "/detailMovie",
                      state: { id: like.idMovie, dataType: like.dataType }
                    }}>
                    <div className="h-24"></div></Link> : <Link
                      to={{
                        pathname: "/detailArtist",
                        state: { id: like.idMovie, dataType: like.dataType }
                      }}>
                    <div className="h-24"></div></Link>}

                  <div class="bg-white h-24 p-2 rounded-lg shadow-lg">
                    <div class="flex ">
                      <FavoriteIcone idMovie={like.idMovie} dataType={like.dataType} img={like.img}
                        name={like.name}


                      ></FavoriteIcone>
                      <div >
                        <p className="underline decoration-blue-500 p-3">    {like.dataType}</p>
                      </div>
                    </div>

                    <h4 class=" text-sm font-semibold uppercase leading-tight ">
                      <p className="  text-center h-16">{like.name}</p></h4>



                  </div>



                </div>
                //  <img className=" rounded-2xl" src={img_path + like.img} />

                : <div className=" rounded-2xl h-48 w-48 bg-[url('../public/popcorn.png')]" style={{
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',

                }}>
                  {like.dataType !== "people" ? <Link
                    to={{
                      pathname: "/detailMovie",
                      state: { id: like.idMovie, dataType: like.dataType }
                    }}>
                    <div className="h-24"></div></Link> : <Link
                      to={{
                        pathname: "/detailArtist",
                        state: { id: like.idMovie, dataType: like.dataType }
                      }}>
                    <div className="h-24"></div></Link>}

                  <div class="bg-white h-24 p-2 rounded-lg shadow-lg">
                    <div class="flex ">
                      <FavoriteIcone idMovie={like.idMovie} dataType={like.dataType} img={like.img}
                        name={like.name}


                      ></FavoriteIcone>
                      <div >
                        <p className="underline decoration-blue-500 p-3">    {like.dataType}</p>
                      </div>
                    </div>

                    <h4 class=" text-sm font-semibold uppercase leading-tight ">
                      <p className="  text-center h-16">{like.name}</p></h4>



                  </div>



                </div>
                //<div className="bg-[url('../public/popcorn.png')] w-full  h-full rounded-2xl flex  text-center bg-no-repeat	justify-start "><p className="text-bold w-16 h-12 text-red-600 md:text-red-600">{like.name}</p></div>
            }




          </div>))

        }

      </div>





      <div className="mt-16"></div>
    </div>
  );
};

export default FavoriteView;