import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      {props.character_data.map((character) => (
        <div className="card-container" key={character.id}>
          <h2>{character.name}</h2>
          <img
            className="character-img"
            src={character.image}
            alt="rick and morty character"
          />
          <p>Species: {character.species}</p>
          <p>Location: {character.location.name}</p>
        </div>
      ))}
    </div>
  );
}
