import { apiSlice } from "../api/apiSlice";


export const productsApi = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        getProducts: builder.query({
            query:()=> `user/products`,
        })
    })
})

export const {useGetProductsQuery} = productsApi;