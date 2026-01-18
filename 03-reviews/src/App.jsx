import data from "./data";
import React, { useState } from "react";
import {
  FaBeer,
  FaChevronLeft,
  FaChevronRight,
  FaQuoteRight,
} from "react-icons/fa";
const App = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = data[index];

  const checkNumber = (number) => {
    if (number > data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return data.length - 1;
    }
    return number;
  };
  const Next = () => {
    setIndex((index) => {
      return checkNumber(index + 1);
    });
  };

  const Prev = () => {
    setIndex((index) => {
      return checkNumber(index - 1);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * data.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img " />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>

        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={Prev}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={Next}>
            <FaChevronRight />
          </button>
        </div>
        <button onClick={randomPerson} className="btn btn-hipster">
          surprise me
        </button>
      </article>
    </main>
  );
};
export default App;
