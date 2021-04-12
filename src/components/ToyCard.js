import React from "react";

function ToyCard({toy, onDelete, onLikes}) {

  const {name, image, likes, id} = toy

  function handleDeleteClick(){
       fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        onDelete(toy)
      })

  }

  function handleLikesClick(){

    const updateObj = {
      likes: toy.likes + 1,
    }
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH", 
       headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateObj),
    })
      .then((r) => r.json())
      .then(onLikes)

  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={handleLikesClick} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDeleteClick} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
