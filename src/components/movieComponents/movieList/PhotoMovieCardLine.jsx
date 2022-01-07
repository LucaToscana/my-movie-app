import React, { useEffect, useState } from "react";
import FavoriteIcone from "../../FavoriteIcone";
import { Link } from "react-router-dom";
const PhotoMovieCardLine = ({ movies, dataType ,srcImg}) => {
    const [video, setVideo] = useState([])
    const [videoUrl, setVideoUrl] = useState([])
    const [id, setId] = useState(movies.id)
    var styleBG=  "background-image: url("+srcImg+")"

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
                        <div className="w-48 h-48 rounded-2xl  p-1 items-stretch flex items-center 	">     <Link
                            to={{
                                pathname: "/detailMovie",
                                state: { id: movies.id, dataType: dataType }
                            }}>   {movies.poster_path !== null ?
                            <div><img className=" rounded-2xl" src={sss} alt={movies.name} />
                            </div> : <img className="object-none rounded-2xl" src={process.env.PUBLIC_URL + "/popcorn.png"} />}</Link> </div>


                    </div> }   
 <div class="relative px-3   ">
   <div class="bg-white p-2 rounded-lg shadow-lg">
    <div class="flex ">
    <FavoriteIcone idMovie={movies.id} dataType={dataType} img={ movies.poster_path} 
                        name={movies.name===undefined? movies.title:movies.name}
                        
                        
                        ></FavoriteIcone>   
      <div >
      <p className="underline decoration-blue-500 p-3">    {dataType}</p> 
  </div>  
    </div>
    
    <h4 class=" text-sm font-semibold uppercase leading-tight ">
        <p className="  text-center h-20">{movies.name}{movies.title}</p></h4>
 
  
  </div>
 </div>
  


        {/*    <div className=" max-w-md p-2  bg-slate-100			 shadow-lg rounded-lg m-2 ">


             
                    <div className="w-full h-48 rounded-2xl text-center content-around">
                    <div className='grid grid-flow grid-cols-2  '>
                        <FavoriteIcone idMovie={movies.id} dataType={dataType} img={ movies.poster_path} 
                        name={movies.name===undefined? movies.title:movies.name}
                        
                        
                        ></FavoriteIcone>     <p className="underline decoration-blue-500 ">    {movies.media_type}</p>       </div>           

                        <p className="underline decoration-blue-500  text-center h-20">{movies.name}{movies.title}</p>

                        <p className="underline decoration-blue-500 h-10 ">
                            {movies.first_air_date !== undefined ? movies.first_air_date.substring(0, 4) :null}
                            {movies.release_date !== undefined ?  movies.release_date.substring(0, 4):null}</p>

                    </div>
                    <div  className="flex justify-center mt-5 " >
                    {<div className='grid grid-flow grid-cols-1  '>
                        <div className="w-full h-full rounded-2xl  p-1 items-stretch flex items-center 	">     <Link
                            to={{
                                pathname: "/detailMovie",
                                state: { id: movies.id, dataType: dataType }
                            }}>   {movies.poster_path !== null ?
                            <div><img className=" rounded-2xl" src={img_path + movies.poster_path} alt={movies.name} />
                            </div> : <img className=" rounded-2xl" src={process.env.PUBLIC_URL + "/popcorn.png"} />}</Link> </div>


                    </div>}</div>

            </div>
                            */}
        </div>
    );
};

export default PhotoMovieCardLine;