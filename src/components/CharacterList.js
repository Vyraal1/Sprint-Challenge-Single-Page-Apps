import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        setCharacters(res.data.results);
      })
      .catch(e => console.log(e));
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  console.log(characters);

  return (
    <section className="character-list">
      {characters.map(({ name, gender, status }) => {
        return (
          <CharacterCard
            key={name}
            name={name}
            gender={gender}
            status={status}
          />
        );
      })}
    </section>
  );
}
