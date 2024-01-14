import React, {useState} from "react";

function ListingCard({
  listings: {id, image, description, location}, onDelete
}) {
  const [favorite, setFavortie] = useState(false);

  function handleDelete(){
    fetch(`http://localhost:6001/listings/${id}`,{
      method: 'DELETE',
    });
    onDelete(id);
  }


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={() => setFavortie(false)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => setFavortie(true)} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
