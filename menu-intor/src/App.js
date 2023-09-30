import React, { useState } from "react";
import Menu from "./Menu";
import items from "./data";
import Categories from "./Categories";

const allCategories = ["all", ...new Set(items.map((item) => item.category))]; //new Set user seperate common items in array

function App() {
  const [menu, setMenu] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenu(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenu(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu menu={menu} />
      </section>
    </main>
  );
}

export default App;
