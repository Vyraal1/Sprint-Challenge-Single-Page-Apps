import React from "react";

export default function CharacterCard(props) {
  return (
    <div className="character-card">
      <h2>{props.name}</h2>
      <p>{props.gender}</p>
      <p>{props.status}</p>
    </div>
  );
}
