import React, { useState, useEffect } from 'react';
import './Card.css'

const Card = ({ character }) => {
  const [likedCharacters, setLikedCharacters] = useState([]);
  
  useEffect(() => {
    setLikedCharacters(getFromLocalStorage());
  }, [character])

  const likeSuperHero = (id) => {
    let liked = getFromLocalStorage();

    if (!liked[id] && Object.keys(liked).length <= 4) {
      liked[id] = true;
    } else {
      delete liked[id];
    }
    
    localStorage.setItem('likedCharacters', JSON.stringify(liked));
    setLikedCharacters(liked);
  }

  const getFromLocalStorage = () => JSON.parse(localStorage.getItem('likedCharacters')) || [];


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
        {(likedCharacters && likedCharacters[character.id] === true)
          ? <span className="icon-fill" onClick={() => likeSuperHero(character.id)}></span>
          : <span className="icon" onClick={() => likeSuperHero(character.id)}></span>
        }
      </div>
    </div>
  )
}

export default Card;