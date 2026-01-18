import { toast } from "react-toastify";
import React from "react";
import { nanoid } from "nanoid";
const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;
  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("Color copied to clipboard ");
      } catch (error) {
        toast.error("Failed to copy color to clipboard");
      }
    } else {
      toast.error("Clipboard access not available");
    }
  };

  return (
    <div
      onClick={saveToClipboard}
      style={{ background: `#${hex}` }}
      className={index > 10 ? "color color-light" : "color"}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}%</p>
    </div>
  );
};

export default SingleColor;
