import React, { useState, useEffect } from "react";

import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newToure = tours.filter((tour) => tour.id !== id);
    setTours(newToure);
  };

  const fetchdata = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const convert = await response.json();
      setLoading(false);
      setTours(convert);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no toure left</h2>
          <button className="btn" onClick={fetchdata}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
