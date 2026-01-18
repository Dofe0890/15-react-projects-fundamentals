import { useState } from "react";
import data from "./data";
import SingleQuestion from "./SingleQuestion";
const App = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>questions and answers about login</h3>
        <div>
          {questions.map((item) => {
            return <SingleQuestion key={item.id} {...item}></SingleQuestion>;
          })}
        </div>
      </section>
    </main>
  );
};
export default App;
