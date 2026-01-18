import React from "react";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { useState } from "react";
const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) {
      toast.error("please provide value");
      return;
    }
    addItem(newItemName);
    setNewItemName("");
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <h4>grocery bud</h4>
        <div className="form-control">
          <input
            onChange={(e) => setNewItemName(e.target.value)}
            value={newItemName}
            type="text"
            className="form-input"
          />
          <button type="submit" className="btn">
            Add item
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
