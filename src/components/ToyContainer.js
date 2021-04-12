import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onDelete, onLikes}) {

  const toyCollection = toys.map((toy)=> <ToyCard key={toy.id} toy={toy} onDelete={onDelete} onLikes={onLikes}/>)
  return (
    <div id="toy-collection">{toyCollection}</div>
  );
}

export default ToyContainer;
