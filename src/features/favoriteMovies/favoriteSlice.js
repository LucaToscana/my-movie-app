import { createSlice } from '@reduxjs/toolkit'

const isFavorite =()=>{

  var favoritesMovies =[] 
if(localStorage.getItem("my_favorite"))
{  return  JSON.parse(localStorage.getItem("my_favorite"))
}else{return favoritesMovies  }}






export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    value: isFavorite()
  },
  reducers: {
    addFavorite: (state, action) => {
 
      state.value.push(action.payload)
      localStorage.setItem("my_favorite", JSON.stringify(state.value)); //store colors

    },
    removeFavorite: (state, action) => {
      const index = state.value.indexOf(action.payload)
      if (index > -1) {
        state.value.splice(index, 1);
      }
      localStorage.setItem("my_favorite", JSON.stringify(state.value));
    },
  }
})

// Action creators are generated for each case reducer function
export const { addFavorite, removeFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer