import React, { useEffect, useState } from "react";
import axios from "axios";

import TopActorCard from "./TopActorCard";

const TopActors = ({ actors ,dataType}) => {
  const [actorsL, setActos] = useState([])
  const [id, setId] = useState(actors.id)



  useEffect(() => {
  }, [])




  return (
    <div >
    { actors!==null? <div className="flex flex-wrap  gap-4 flex justify-center ">
        
        {actors.slice(0,6).map((actors) => (
          <TopActorCard actors={actors} dataType={dataType}></TopActorCard>
        ))

        }
      </div>:null}
    </div>
  );
};

export default TopActors;