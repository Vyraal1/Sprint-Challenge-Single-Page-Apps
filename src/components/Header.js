import React, { useState, useEffect } from "react";
import CharacterList from "./CharacterList";
import SearchForm from "./SearchForm";
import axios from "axios";

export default function Header() {
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

  const updateCharacters = entry => {
    const filteredCharacters = characters.filter(character =>
      character.name.includes(entry)
    );
    setCharacters(filteredCharacters);
  };

  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <SearchForm updateCharacters={updateCharacters} />
      <CharacterList characters={characters} />
    </header>
  );
}
