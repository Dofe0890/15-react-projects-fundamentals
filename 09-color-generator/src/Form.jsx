import React from "react";
import { useState } from "react";

const Form = ({ addColor }) => {
  const [color, setColor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };
  return (
    <div className="container">
      <h4>color generator</h4>
      <form
        className="color-form"
        onSubmit={handleSubmit}
        action="
      "
      >
        <input
          onChange={(e) => setColor(e.target.value)}
          value={color}
          type="color"
        />
        <input
          onChange={(e) => setColor(e.target.value)}
          placeholder="#fe9384"
          value={color}
          type="text"
        />
        <button style={{ background: color }} className="btn" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;
