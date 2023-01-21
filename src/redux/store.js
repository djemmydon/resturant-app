import { configureStore } from "@reduxjs/toolkit";
import { muusiApi } from "./apiSlice";
import cartSlice from "./product";





export const store = configureStore({
    reducer: {
        // [muusiApi.reducerPath]: muusiApi.reducer,
        cart: cartSlice.reducer
    },

    middleware: (defaultMiddleWare) => defaultMiddleWare().concat(muusiApi.middleware)
})