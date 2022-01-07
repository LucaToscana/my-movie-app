import React, { Component,useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch } from "react-router-dom";
import Home from './view/Home'
import Tv from './view/Tv'
import styles from "./App.module.css";
import './index.css';
import { Routes, Route } from 'react-router-dom';

//import useNavigation from "./hooks/useNavigation";
import navigationData from "./data/navigation";

import Navbar from './components/Navbar';
import Tabbar from './components/Tabbar';
import MovieCard from './components/movieComponents/movieList/MovieCard';
import MovieDetail from './view/MovieDetail';
import MovieView from './view/MovieView';
import Actors from './view/ActorView';
import Artists from './components/actorsComponents/Artists';
import ArtistDetail from './view/ArtistDetail';
import FavoriteView from './view/FavoriteView';
function App() {
  //const { currentRoute, setCurrentRoute } = useNavigation();

  useEffect(() => { 
if(localStorage.getItem("my_favorite")===null) {
  var colors = []
  
localStorage.setItem('my_favorite',colors)

}
}, []);

  return (

    <div >  <BrowserRouter>
      <Navbar
        navigationData={navigationData}
      /> 
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" exact component={Tv} />
        <Route path="/detailMovie" exact component={MovieDetail} />
        <Route path="/movies" exact component={MovieView} />
        <Route path="/actors" exact component={Actors} />
        <Route path="/detailArtist" exact component={ArtistDetail} />

        <Route path="/favorite" exact component={FavoriteView} />


        
      </Switch>
    
      <Tabbar
        navigationData={navigationData}
      />   </BrowserRouter>
    </div>
  );
}

export default App;