import React from 'react';
import './Card.css'

const Card = ({ character }) => {

  return (
    <div className="Card">
      <div className="Card-poster">
        <img 
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
          alt={character.name}
        />
      </div>
      <div className="Card-info">
        <h3>{character.name}</h3>
        {character.liked && <span className="icon"></span>}
        {!character.liked && <span className="icon-fill"></span>}
      </div>
    </div>
  )
}

export default Card;