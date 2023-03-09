import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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
  toggleLogin: false,
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
        toast("Product added to cart successfully ✔️");
      } else {
        state.itemList.push(action.payload);
        storeInLocalStorage(state.itemList);
        toast("Product added to cart successfully ✔️");
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

    getCartTotal: (state) => {
      state.allTotalPrice = state.itemList.reduce((cartTotal, cartItem) => {
        return (cartTotal += cartItem.totalPrice);
      }, 0);
    },

    updateCart: (state, action) => {
      let tempCart = state.itemList.map((item) => {
        if (item._id === action.payload._id) {
          let tempQty = item.qty;
          let tempTotalPrice = item.totalPrice;
          if (action.payload.type === "INC") {
            tempQty++;
            tempTotalPrice = tempQty * item.price;
          }

          if (action.payload.type === "DEC") {
            if (item.qty <= 1) tempQty = 1;
            tempQty--;
            tempTotalPrice = tempQty * item.price;
          }

          return { ...item, qty: tempQty, totalPrice: tempTotalPrice };
        }
      });

      state.itemList = tempCart;
      storeInLocalStorage(state.itemList);
    },
    toggle: (state, action) => {
      if (action.payload.type === "OPEN")
        state.toggleLogin = !state.toggleLogin;

      return state;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
