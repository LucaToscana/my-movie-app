import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FavoriteIcone from "../components/FavoriteIcone";
import FavoriteMovieCardLine from "../components/movieComponents/movieList/CreditMovieCardLine";
import TopMovieCardLine from "../components/movieComponents/movieList/TopMovieCardLine";
import getCreditsArtist from "../service/GetCreditsArtist";
import getDetails from "../service/GetDetails";

const ArtistDetail = () => {

    /*https://api.themoviedb.org/3/person/{person_id}/combined_credits?api_key=<<api_key>>&language=en-US*/

    const img_path = "https://image.tmdb.org/t/p/w300_and_h450_bestv2";
    const img_cast = "https://image.tmdb.org/t/p/w138_and_h175_face"

    let data = useLocation();
    const [actors, setActors] = useState(data.state.actors)
    const [kf, setKf] = useState(data.state.kf)

    const [actorsDetail, setActorsDetail] = useState({})
    const [combCredit, setCombCredits] = useState({})


    const dataT = "person"
    const [birthday, setBirthday] = useState("")
    const [movie, setMovie] = useState()
    const [bio, setBio] = useState("")

    const [deathday, setDeathday] = useState("")
    const [place_of_birth, setPlace_of_birth] = useState("")
    useEffect(() => {
        var a = 0
        if (actors !== undefined) {
            a = actors.id

        } else {

            a = data.state.id
        }
        getDetails(dataT, a)
            .then(res => {
                setActors(res)
                setActorsDetail(res)
                setBio(res.biography)
                setBirthday(res.birthday)
                setDeathday(res.deathday)
                setPlace_of_birth(res.place_of_birth)
                getCreditsArtist(dataT, actors.id).then(res => {
                    setMovie(res)


                })

            })


    }, [movie, actors]);




    return (
        <div >
            <div className="flex justify-between m-4 h-30 p-5   rounded-full bg-gradient-to-r from-purple-400 to-orange-400 text-center	">
                <h2 className="font-mono text-white text-3xl 	">{actorsDetail.name} </h2>
                <div className="flex justify-center font-mono text-white text-3xl">
                    {birthday} / {deathday}
                </div>
            </div>
            <div className="p-3  flex justify-end ">
                <span className="p-3 m-2">     <FavoriteIcone idMovie={actorsDetail.id}
                    dataType={"people"} img={actorsDetail.profile_path}
                    name={actorsDetail.name === undefined ? actorsDetail.title : actorsDetail.name}>
                </FavoriteIcone> </span>
            </div>
            <div className="m-3 flex justify-center">

                {actorsDetail.profile_path ? <img className="rounded-2xl " src={img_path + actorsDetail.profile_path} alt={actorsDetail.name} /> : <div >no image  </div>}

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

                    <div className="flex flex-wrap   flex justify-center">

                        {movie !== undefined ? movie.map(movie => (<div className=" ">
                            <FavoriteMovieCardLine movies={movie} dataType={movie.media_type}></FavoriteMovieCardLine>
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