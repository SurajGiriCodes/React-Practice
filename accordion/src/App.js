import Question from "./Question";
import data from "./data";
import React, { useState } from "react";

function App() {
  const [questions, setQuestions] = useState(data);
  console.log(questions);
  return (
    <main>
      <div className="container">
        <h3>Question And Answer</h3>
        <section className="info">
          {questions.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
