import { useState } from "react";
import data from "./data";
const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setText(data.slice(0, amount));
  };
  return (
    <main className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={submitHandler}>
        <input
          max={8}
          min={1}
          // step={1}
          onChange={(e) => setCount(e.target.value)}
          value={count}
          type="number"
          name="number"
        />
        <input value="gen" className="btn" type="submit" />
      </form>
      <article className="lorem-text">
        {text.map((item) => {
          return <p key={Math.random()}> {item}</p>;
        })}
      </article>
    </main>
  );
};
export default App;
