import React from "react";

export default function Person({ image, name, age }) {

  return (
    <div className="person">
      <img src={image} alt={name}  className="img"/>
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </div>
  );
}
