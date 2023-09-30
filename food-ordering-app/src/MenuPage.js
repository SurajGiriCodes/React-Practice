import React from "react";
import { useParams } from "react-router-dom";
import resturants from "./data";

const MenuPage = () => {
  const { restaurantId } = useParams();
  const resturant = resturants.find((r) => r.id === parseInt(restaurantId));

  return (
    <div>
      <h1>{resturant.name}Menu</h1>
      <ul>
        {resturant.menu.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuPage;
