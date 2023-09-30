import React from "react";
import restaurants from "./data";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Food Ordering App</h1>
      <h2>Choose a Restaurant</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <Link to={`/menu/${restaurant.id}`}>{restaurant.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
