import React from "react";

const Category = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            onClick={() => filterItems(category)}
            key={category}
            type="button"
            className="btn"
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Category;
