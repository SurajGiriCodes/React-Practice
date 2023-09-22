import React from "react";

export default function Menu({ items }) {
  return (
    <div className="section-center">
      {items.map((menuItems) => {
        const { id, img, name, price, details } = menuItems;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={name} className="imgclass" />
            <div className="items-info">
              <header>
                <h4>{name}</h4>
                <h4 className="price">RS {price}</h4>
              </header>
              <p className="item-text">{details}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
