import React from "react";
import Tour from "./Tour";

export default function Tours({ tours, removeTour }) {
  return (
    <section>
      <div className="title">
        <h2>ours tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tours.id} {...tour} removeTour={removeTour}></Tour>;
        })}
      </div>
    </section>
  );
}
