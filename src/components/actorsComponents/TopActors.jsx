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
    { actors!==null? <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-1 ">
        
        {actors.slice(0,3).map((actors) => (
          <TopActorCard actors={actors} dataType={dataType}></TopActorCard>
        ))

        }
      </div>:null}
    </div>
  );
};

export default TopActors;