import React from "react";

export default function Menu({ menu }) {
  return (
    <div className="section-center">
      {menu.map((items) => {
        const { id, title, img, desc, price } = items;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">RS {price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
