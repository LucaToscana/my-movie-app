import React, { useEffect, useState } from "react";
import axios from "axios";
import FavoriteIcone from "../FavoriteIcone";
import TopActorCard from "./TopActorCard";

const Artists = ({ artists ,dataType}) => {




  useEffect(() => {
  }, [])




  return (
    <div className="flex justify-center">
    { artists!==null? <div className="flex flex-wrap  gap-4 flex justify-center ">
        
        {artists.map((artists) => (
          <TopActorCard actors={artists} dataType={dataType}></TopActorCard>
        ))

        }
      </div>:null}
    </div>
  );
};

export default Artists;