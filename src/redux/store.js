import { configureStore } from "@reduxjs/toolkit";
import { muusiApi } from "./apiSlice";
import cartSlice from "./product";
import UserSlice from "./user";

export const store = configureStore({
  reducer: {
    // [muusiApi.reducerPath]: muusiApi.reducer,
    cart: cartSlice.reducer,
    user: UserSlice.reducer,
  },

  middleware: (defaultMiddleWare) =>
    defaultMiddleWare().concat(muusiApi.middleware),
});
