import React from "react";
import Person from "./Person.jsx";

export default function List({ people }) {
  return (
    <div>
      {people.map((person) => (
        <Person key={person.id} {...person} />
      ))}
    </div>
  );
}
