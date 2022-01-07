import React, { useState, useEffect, useRef } from "react";
import Movies from "../components/movieComponents/movieList/Movies";
import Pagination from "../Pagination";
import { AiOutlineSearch } from "react-icons/ai"
import getPopularOrSearch from "../service/getPopularOrSearch";
import getPopularOrSearchActor from "../service/GetPopularOrSearchActor";
import { FcFilm, FcFilmReel } from "react-icons/fc";
import TopMovies from "../components/movieComponents/movieList/TopMovies";
import { GiFilmProjector } from "react-icons/gi";
import { FiMonitor } from "react-icons/fi";
import axios from "axios";
import TopActors from "../components/actorsComponents/TopActors";
import { BsPeopleFill } from "react-icons/bs";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import Collapse from '@material-ui/core/Collapse';
const Tv = () => {
  const endUrl = "https://api.themoviedb.org/3"
  const api_key = '1ef9fd0ce00ab1df135c8453b7222865'
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedTv, setIsCheckedTv] = useState(false);
  const [isCheckedArtist, setIsCheckedArtist] = useState(false);

  const [tv, setTv] = useState([]);
  const [act, setAct] = useState([]);

  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [searchTerm, setSearchTerm] = useState('search')
  const [keyword, setKeyword] = useState("")
  const [keywordTv, setKeywordTv] = useState("")
  const [keywordAct, setKeywordAct] = useState("")

  const [dataType, setDataType] = useState("movie")
  /*
    end_url = () => { return "https://api.themoviedb.org/3" }
    api_key = () => { return '1ef9fd0ce00ab1df135c8453b7222865' }
  */
  /*
  
    getPopularPeople = () => {
        fetch(this.end_url() + "/person/popular?api_key=" + this.api_key() + "&language=en-US&page=1" )
        .then(res => res.json())
        .then(data => this.setState({people: data, peopleLoading:false}))
    }
  
  */
  const updateResp = (data) => {
    setMovies(data.results)
  }

  const updateRespTv = (data) => {
    setTv(data.results)

  }


  const updateRespAct = (data) => {
    setAct(data.results)

  }


  useEffect(() => {
    getPopularOrSearch(dataType, searchTerm, keyword, currentPage)
      .then(res => {
        if (res.status !== 404) {
          updateResp(res)

        }
      }
      )

    getPopularOrSearch('tv', searchTerm, keywordTv, currentPage)
      .then(res => {
        if (res.status !== 404) {
          updateRespTv(res)

        }
      })

    getPopularOrSearchActor(searchTerm, keywordAct)
      .then(res => {
        if (res.status !== 404) {
          updateRespAct(res)

        }
      })






  }, [keywordAct, keyword, currentPage, dataType, searchTerm, keywordTv]);










  return (
    <div >    <div className=" m-2 h-20 p-5  flex justify-between rounded-full bg-gradient-to-r from-purple-400 to-orange-400 ">

      <h2 className="font-mono text-white text-5xl	"><GiFilmProjector></GiFilmProjector></h2>
      <input id="myTextInput" className="border-solid border-gray-300 border py-2 px-4 w-1/3 
      rounded text-gray-700"
        disabled={isChecked === false ? "disabled" : ""}

        onChange={(e) => {
          setKeyword(e.target.value);
        }}
      />   <div><FormControlLabel
        control={<Switch checked={isChecked} onChange={() => {
          setIsChecked((prev) => !prev);
        }} />}
      /></div></div>

      <div >
        <Collapse in={isChecked}>
          <TopMovies movies={movies} dataType={dataType} />

        </Collapse>
      </div>


      <div className=" m-2 h-20 p-5  flex justify-between rounded-full bg-gradient-to-r from-purple-400 to-orange-400 ">

        <h2 className="font-mono text-white text-5xl	"><FiMonitor></FiMonitor></h2>
        <input className="border-solid border-gray-300 border py-2 px-4 w-1/3  
     rounded text-gray-700"
          disabled={isCheckedTv === false ? "disabled" : ""}
          onChange={(e) => {
            setKeywordTv(e.target.value);
          }}
        />
        <div><FormControlLabel
          control={<Switch checked={isCheckedTv} onChange={() => {
            setIsCheckedTv((prev) => !prev);

          }} />}
        /></div>



      </div>
      <div className="flex justify-center">



      </div>
      <div >
        <Collapse in={isCheckedTv}>
          <TopMovies movies={tv} dataType={'tv'} />
        </Collapse>
      </div>
      <div className=" m-2 h-20 p-5  flex justify-between rounded-full bg-gradient-to-r from-purple-400 to-orange-400 ">

        <h2 className="font-mono text-white text-5xl	"><BsPeopleFill /></h2>
        <input className="border-solid border-gray-300 border py-2 px-4 w-1/3 
     rounded text-gray-700"
          disabled={isCheckedArtist === false ? "disabled" : ""}
          onChange={(e) => {
            setKeywordAct(e.target.value);
          }}
        /> <div><FormControlLabel
          control={<Switch checked={isCheckedArtist} onChange={() => {
            setIsCheckedArtist((prev) => !prev);
          }} />}
        /></div></div>


      <div >
        <Collapse in={isCheckedArtist}>
          <TopActors actors={act} dataType={"people"} />
        </Collapse></div>
      <div className="mt-16"></div>
    </div>
  );
};

export default Tv;