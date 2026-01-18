import React from "react";
import { nanoid } from "nanoid";
import SingleColor from "./SingleColor";
const ColorList = ({ colors }) => {
  return (
    <div>
      {colors.map((color, index) => {
        return <SingleColor key={nanoid()} index={index} color={color} />;
      })}
    </div>
  );
};

export default ColorList;
