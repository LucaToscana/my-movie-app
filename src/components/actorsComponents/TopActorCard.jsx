import React, { useEffect, useState } from "react";
import FavoriteIcone from "../FavoriteIcone";
import { Link } from "react-router-dom";
const TopActorCard = ({ actors, dataType }) => {
    const [actorList, setVideo] = useState([])
    const [id, setId] = useState()

    const img_path = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/";




    return (
      
 <div className=" justify-center w-48  justify-items-center ">
{/*
<div class="relative w-40 h-40 rounded-full overflow-hidden">
  <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" class="object-cover w-full h-full" />
  <div class="absolute w-full py-2.5 bottom-0 inset-x-0 bg-blue-400 text-white text-xs text-center leading-4">this is a text</div>
</div>
<div class="wrapper bg-gray-400 antialiased text-gray-900">
<div>

*/
}
    
{<div className=' justify-items-center  '>
                        <div className="w-full h-48 rounded-2xl  p-1 items-stretch flex items-center 	">     <Link
                            to={{
                            pathname: "/detailArtist",
                            state: { actors: actors, dataType: dataType }
                        }}>   {actors.profile_path !== null ?
                            <div><img className=" rounded-2xl" src={img_path + actors.profile_path} alt={actors.name} />
                            </div> :<img className="rounded-2xl" src={process.env.PUBLIC_URL + "/popcorn.png"} />}</Link> </div>


                    </div> }   
 <div class="relative px-3   ">
   <div class="bg-white p-2 rounded-lg shadow-lg">
    <div class="flex ">
    <FavoriteIcone idMovie={actors.id} dataType={dataType} img={ actors.profile_path} 
                        name={actors.name===undefined? actors.title:actors.name}
                        
                        
                        ></FavoriteIcone>   
      <div >
      <p className="underline decoration-blue-500 p-3">    {dataType}</p> 
  </div>  
    </div>
    
    <h4 class=" text-sm font-semibold uppercase leading-tight ">  <p className="  text-center h-10">{actors.name}</p></h4>
   
  </div>
 </div>
  
            {/*<div className="max-w-md p-2  bg-slate-100			 shadow-lg rounded-lg m-2 ">

                <div className="w-full h-24 rounded-2xl text-center content-around">

                    {

                        //   <FavoriteIcone idMovie={actors.id}></FavoriteIcone>


                    }
                    <p class="underline decoration-blue-500">{actors.name}</p>

                </div>
                <div  className="flex justify-center  " >

                {<div className='grid grid-flow grid-cols-1 '>
                    <div className="w-full h-full rounded-2xl pt-3 ">      <Link
                        to={{
                            pathname: "/detailArtist",
                            state: { actors: actors, dataType: dataType }
                        }}> {actors.profile_path !== null ? 
                        <div ><img className=" rounded-2xl" src={img_path + actors.profile_path} alt={actors.name} />
                        </div> : <img className=" rounded-2xl" src={process.env.PUBLIC_URL + "/popcorn.png"} />}</Link> </div>


                </div>}
</div>
            </div>*/}
      </div>
    );
};

export default TopActorCard;