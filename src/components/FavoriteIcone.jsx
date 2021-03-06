import React, { useState, useEffect } from "react";
import { FcLike } from "react-icons/fc";
import { AiOutlineHeart } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux'
import { addFavorite, removeFavorite } from '../features/favoriteMovies/favoriteSlice'



const FavoriteIcone = ({ idMovie, dataType, img, name }) => {
  const [like, setLike] = useState(false);
  const [id, setId] = useState(idMovie)
  const favorite = useSelector(state => state.favorite.value)
  const dispatch = useDispatch()

  useEffect(() => {
    if (favorite.find(estFavorite)) {
      setLike(true)

    } else {
      setLike(false)
    }
  }, [idMovie, like]);


  function estFavorite(element) {
    var test = false
    if (element.idMovie === idMovie &&
      element.dataType === dataType
    ) {
      setLike(true)
      test = true
    }
    return test
  }
  return (

    <div className="mt-2">
      {like === true ? <div className="mt-2">
        <FcLike onClick={() => {
          dispatch(removeFavorite({ idMovie, dataType, img, name }))
          setLike(false)
        }
        }></FcLike></div>
        : <div className="mt-2"><AiOutlineHeart onClick={() => {
          dispatch(addFavorite({ idMovie, dataType, img, name }))
          setLike(true)
        }} ></AiOutlineHeart></div>}


    </div>


  );
};

export default FavoriteIcone;