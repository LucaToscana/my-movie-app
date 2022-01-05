import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TopMovieCard from "../components/movieComponents/movieList/TopMovieCard";
import getDetails from "../service/GetDetails";

const ArtistDetail = () => {
    const img_path = "https://image.tmdb.org/t/p/w300_and_h450_bestv2";
    const img_cast = "https://image.tmdb.org/t/p/w138_and_h175_face"

    let data = useLocation();
    const [actors, setActors] = useState(data.state.actors)
    const [kf, setKf] = useState(data.state.kf)

    const [actorsDetail, setActorsDetail] = useState({})

    
    const dataT = "person"
    const [birthday, setBirthday] = useState("")
    const [movie, setMovie] = useState(data.state.actors.known_for)
    const [bio, setBio] = useState("")

    const [deathday, setDeathday] = useState("")
const[place_of_birth,setPlace_of_birth]=useState("")
    useEffect(() => {
        getDetails(dataT, actors.id)
            .then(res => {
                setActorsDetail(res)
                setBio(res.biography)
                setBirthday(res.birthday)
                setDeathday(res.deathday)
                setPlace_of_birth(res.place_of_birth)

            })
    }, [bio,movie,place_of_birth,actorsDetail,actors]);




    return (
        <div >{JSON.stringify(kf)}
            <div className="flex justify-between m-4 h-30 p-5   rounded-full bg-gradient-to-r from-purple-400 to-orange-400 text-center	">
                <h2 className="font-mono text-white text-3xl 	">{actors.name} </h2>
                <div className="flex justify-center font-mono text-white text-3xl">
                    {birthday} / {deathday}
                </div>
            </div>

            <div className="m-3 flex justify-center">
                {actors.profile_path ? <img className="rounded-2xl " src={img_path + actors.profile_path} alt={actors.name} /> : <div >no image  </div>}

            </div>
            <div className="m-3 flex justify-center">

                {actorsDetail.profile_path &&
                    (actorsDetail.profile_path !== actors.profile_path) ? <img className="rounded-2xl " src={img_path + actorsDetail.profile_path} alt={actors.name} /> : <div > </div>}
            </div>
            <div className="m-3 flex justify-center text-justify 	text-center	">

                <article className="prose lg:prose-xl prose-a:text-blue-600 hover:prose-a:text-blue-500  text-center	 ">
                <p className="underline decoration-green-500 text-1xl  text-center	">place of birth</p> 
{place_of_birth}

<p className="underline decoration-green-500 text-1xl  text-center	">biography</p> 

                    <p>
                        {bio}</p>
                    {movie !== undefined ? <p className="underline decoration-green-500 text-xl  text-center	">known for</p> : null}

                    <div className="grid  grid-cols-3 m-3 ">

                        {movie !== undefined ? movie.map(movie => (<div className="m-3 ">  <TopMovieCard movies={movie} dataType={movie.media_type}></TopMovieCard>
                        </div>))
                            : null}
                    </div>


                    { }

                </article></div>





            <div className="m-24"> </div>

        </div>

    );
};

export default ArtistDetail;