import "./App.css";
import { useState, useEffect } from "react";

function setRandom(quote) {
  return quote[Math.floor(Math.random() * quote.length)];
}

function App() {
  const [quote, setQuote] = useState("");
  const [quotes, setQuotes] = useState(null); //to store the currently displayed quote

  const quoteList = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data); //used to update the state variable quote with the data fetched from the API.
        setQuotes(data[0]); //used to set the initial value of the quotes state variable to the first quote from the array of quotes.
      });
  };

  useEffect(() => {
    quoteList();
  }, []);

  function getNewQuote() {
    setQuotes(setRandom(quote));
  }

  return (
    <div className="App">
      <h1>Project 3: Quote Generator</h1>
      <div className="container">
        <button onClick={getNewQuote}>New Quote</button>
        <h2>“{quotes?.text}</h2>
        <p>-{quotes?.author}</p>
      </div>
    </div>
  );
}

export default App;

// quotes => represents an array of quotes
// quote => holds a single string representing the currently displayed quote. It's not an array
