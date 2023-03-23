import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./apiSlice";
import cartSlice from "./product";
import UserSlice from "./user";

export const store = configureStore({
  reducer: {
    // [muusiApi.reducerPath]: muusiApi.reducer,
    cart: cartSlice.reducer,
    user: UserSlice.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },

  middleware: (defaultMiddleWare) =>
    defaultMiddleWare().concat(productsApi.middleware),
});
