import React, { useState } from "react";

export default function SearchForm(props) {
  const initialState = "";
  const [entry, setEntry] = useState(initialState);

  const handleChanges = event => {
    setEntry(event.target.value);
  };

  const submitForm = event => {
    event.preventDefault();
    props.updateCharacters(entry);
    setEntry(initialState);
  };

  return (
    <form onSubmit={submitForm} className="search-form">
      <label htmlFor="search">Search for a Character </label>
      <input onChange={handleChanges} type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}
