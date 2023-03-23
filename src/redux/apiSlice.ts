import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductType } from "../typing";

export const productsApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://commerce-backend-rho.vercel.app/api/v1/",
    // prepareHeaders: (headers) => {
    //   headers.set(
    //     "X-RapidAPI-Key",
    //     "4ae043dd21mshe5825081cc693cbp1e9ab6jsnbf1165dce964"
    //   );
    //   // headers.set("X-RapidAPI-Host", "spotify23.p.rapidapi.com")
    //   return headers;
    // },
  }),

  endpoints: (builder) => ({
    getAllProducts: builder.query<ProductType[], void>({
      query: () => `product`,
    }),
    getOneProduct: builder.query<ProductType, string>({
      query: (id) => `product/${id}`,
    }),
    getSearchProduct: builder.query<ProductType, string>({
      query: (searchInput) => `product?search=${searchInput}`,
    }),
  }),
});
