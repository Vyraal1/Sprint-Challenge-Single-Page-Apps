import React from "react";
import CharacterCard from "./CharacterCard";

export default function CharacterList(props) {
  return (
    <section className="character-list">
      {props.characters.map(character => (
        <CharacterCard
          key={character.name}
          name={character.name}
          gender={character.gender}
          status={character.status}
        />
      ))}
    </section>
  );
}
