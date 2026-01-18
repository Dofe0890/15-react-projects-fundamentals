import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
const SingleQuestion = ({ title, info }) => {
  const [appear, setAppear] = React.useState(false);

  return (
    <div className="container">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={() => setAppear(!appear)}>
          {appear ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>

      {appear && <p>{info}</p>}
    </div>
  );
};

export default SingleQuestion;
