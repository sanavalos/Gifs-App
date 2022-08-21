import React, { useState, useEffect } from "react";
import Card from "./Card";
import getGifs from "../services/getGifs";

function Cards({ gifName, page }) {
  const [gifs, setGifs] = useState([]);
  const [empty, setEmpty] = useState(false)

  useEffect(() => {
    if(gifs.length > 0){
     setEmpty(true) 
    } else {
     setEmpty(false)
    }
  }, [])
  

  useEffect(() => {
      getGifs({ gifName, page })
      .then((gifs) => setGifs(gifs));
    },
    [gifName, page]
  );

  return (
    <div className="d-flex align-content-around flex-wrap mx-5 px-5 justify-content-start">
      {gifs.length > 0 ? gifs.map(({ title, id, image, url }) => (
        <Card key={id} title={title} id={id} image={image} url={url} />
      )) 
      :
      empty === true && <h1>Your search was so random haha</h1>
     }
    </div>
  );
}

export default Cards;
