import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(
  ()=>{
    fetch("http://localhost:3001/toys")
    .then(r => r.json())
    .then(data => setToys(data))

  },
  [])


  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  
  function handleAddToy(newToy){
    setToys([...toys, newToy])
  }
  
  function handleDelete(toyToDelete){
      const updatedToys = toys.filter((toy) => toy.id !== toyToDelete.id)
      setToys(updatedToys)
    }

  function handleLikes(updatedToy){
    const updatedToys = toys.map((toy) =>
      toy.id === updatedToy.id ? updatedToy : toy
    );
    setToys(updatedToys);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDelete={handleDelete} onLikes={handleLikes}/>
    </>
  );
}

export default App;
