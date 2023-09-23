import React from "react";

export default function reducer(state, action) {
  //clear cart
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  //remove items from each items
  if (action.type === "REMOVE") {
    return {
      ...state,
      cart: state.cart.filter((cartMenu) => cartMenu.id !== action.payload),
    };
  }

  //increase the quentity of items
  if (action.type === "INCREASE") {
    let tempCart = state.cart.map((menuItems) => {
      if (menuItems.id === action.payload) {
        return { ...menuItems, amount: menuItems.amount + 1 };
      }
      return menuItems;
    });
    return { ...state, cart: tempCart };
  }

  //Decrease the quantity of items
  if (action.type === "DECREASE") {
    let tempCart = state.cart
      .map((menu) => {
        if (menu.id === action.payload) {
          return { ...menu, amount: menu.amount - 1 };
        }
        return menu;
      })
      .filter((cartItem) => cartItem.amount !== 0); //remove item below 1
    return { ...state, cart: tempCart };
  }

  if (action.type === "GET_TOTALS") {
    const { total, amount } = state.cart.reduce(() => {}, {
      total: 0,
      amount: 0,
    });
    return { ...state, total, amount };
  }

  return state;
}

// . cartMenu.id represents the id of the current item being checked.

// . action.payload is typically an id value that you want to remove from the cart.

// . cartMenu.id !== action.payload checks if the id of the current item in the cart is NOT equal to the id specified in action.payload. If they are not equal, it means the item should be kept in the new array; if they are equal, it means the item should be removed.
