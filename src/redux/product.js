import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const storeInLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const initialState = {
  itemList: fetchFromLocalStorage(),
  totalQty: 0,
  allTotalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existItem = state.itemList.find((seen) => seen._id === item._id);

      if (existItem) {
        const tempCart = state.itemList.map((item) => {
          if (item._id === action.payload._id) {
            let newQty = parseInt(item.qty) + action.payload.qty;
            let newTotalPrice = newQty * item.price;

            return {
              ...item,
              qty: newQty,
              totalPrice: newTotalPrice,
            };
          } else {
            return item;
          }
        });
        state.itemList = tempCart;
        state.totalQty = state.itemList.length;
        storeInLocalStorage(state.itemList);
      } else {
        state.itemList.push(action.payload);
        storeInLocalStorage(state.itemList);
      }
    },

    removeCart: (state, action) => {
      const cartItem = state.itemList.filter(
        (cartItem) => cartItem._id !== action.payload
      );

      state.itemList = cartItem;
      state.totalQty = state.itemList.length;
      storeInLocalStorage(state.itemList);
    },

    getCartTotal: (state, action) => {
      state.allTotalPrice = state.itemList.reduce((cartTotal, cartItem) => {
        return (cartTotal += cartItem.totalPrice);
      }, 0);
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
