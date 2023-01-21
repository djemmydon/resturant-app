import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"



export const muusiApi = createApi({
    reducerPath: "muusiApi",
    baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com/",
    prepareHeaders: (headers) => {
    headers.set("X-RapidAPI-Key", "4ae043dd21mshe5825081cc693cbp1e9ab6jsnbf1165dce964")
    // headers.set("X-RapidAPI-Host", "spotify23.p.rapidapi.com")
    return headers;
    }
}),
    endpoints: (builder) => ({
        getAllMusic: builder.query({
            query: () => `/songs/get-count/40333609`
        })
    })
    

})

export const {useGetAllMusicQuery} = muusiApi