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

  //
  if (action.type === "GET_TOTALS") {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;
        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }
  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }
  if (action.type === "DISPLAY_ITEMS") {
    return { ...state, cart: action.payload, loading: false };
  }
  if (action.type === "TOGGLE_AMOUNT") {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          if (action.payload.type === "inc") {
            return { ...cartItem, amount: cartItem.amount + 1 };
          }
          if (action.payload.type === "dec") {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: tempCart };
  }
  throw new Error("no matching action type");
}

// . cartMenu.id represents the id of the current item being checked.

// . action.payload is typically an id value that you want to remove from the cart.

// . cartMenu.id !== action.payload checks if the id of the current item in the cart is NOT equal to the id specified in action.payload. If they are not equal, it means the item should be kept in the new array; if they are equal, it means the item should be removed.
