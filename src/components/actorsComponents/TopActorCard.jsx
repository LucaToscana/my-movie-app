import React, { useEffect, useState } from "react";
import FavoriteIcone from "../FavoriteIcone";
import { Link } from "react-router-dom";
const TopActorCard = ({ actors, dataType }) => {
    const [actorList, setVideo] = useState([])
    const [id, setId] = useState()

    const img_path = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/";

   


    return (
        <div className="flex justify-center">

         
         {  <div className="max-w-md p-2  bg-slate-100			 shadow-lg rounded-lg m-2 ">

                <div className="w-full h-24 rounded-2xl text-center content-around">
                
{
    
 //   <FavoriteIcone idMovie={actors.id}></FavoriteIcone>


}
<p class="underline decoration-blue-500">{actors.name}</p>
                      
                </div>
                {<div className='grid grid-flow grid-cols-1 '>
                    <div className="w-full h-full rounded-2xl pt-3 ">       {actors.profile_path !== null ? <Link
                        to={{
                            pathname: "/detailArtist",
                            state: { actors: actors, dataType: dataType }
                        }}>
                        <div ><img className=" rounded-2xl" src={img_path + actors.profile_path} alt={actors.name} />
                        </div> </Link> : null}</div>

                  
                </div>}

                    </div>}
        </div>
    );
};

export default TopActorCard;