import "./App.css";
import { useState } from "react";
import Fqa from "./Fqa";

const list = [
  {
    id: 1,
    question: "How many programmers does it take to screw a lightbulb?",
    answer:
      "Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
    open: true,
  },
  {
    id: 2,
    question:
      "If you were offered the position of mayor of your city, would you take it?",
    answer:
      "Questions explained agreeable preferred strangers too him her son. Set put shyness offices his females him distant.",
    open: true,
  },
  {
    id: 3,
    question: "What board game do you like the most?",
    answer:
      "Had strictly mrs handsome mistaken cheerful. We it so if resolution invitation remarkably unpleasant conviction. As into ye then form.",
    open: true,
  },
];

function App() {
  const [faqs, setFaqs] = useState(list);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="App">
      <h1>Questions</h1>
      <div className="container">
        <h4>Project 2: FAQ/Accordion Frequently Asked Questions</h4>
        {faqs.map((faq, index) => (
          <Fqa faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default App;
