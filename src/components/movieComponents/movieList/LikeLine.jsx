import React, { useEffect, useState } from "react";
import FavoriteIcone from "../../FavoriteIcone";
import { Link } from "react-router-dom";
const LikeLine = ({ like, img }) => {
    const [video, setVideo] = useState([])
    const [videoUrl, setVideoUrl] = useState([])
    const [id, setId] = useState(like.idMovie)

    const img_path = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/";



    return (
        <div className=" justify-center w-24  justify-items-center ">

            <Link
                to={{
                    pathname: "/detailMovie",
                    state: { id: like.idMovie, dataType: like.dataType }
                }}>

                {<div style={{
                    backgroundImage: "url(" + img_path + like.img + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',

                }} className=' justify-items-center rounded-2xl '>
                    <div className="w-24 h-48 rounded-2xl  p-1 	">     </div>


                </div>}
                <div >


                </div>


            </Link>
        </div>
    );
};

export default LikeLine;