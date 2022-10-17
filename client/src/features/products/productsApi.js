import { apiSlice } from "../api/apiSlice";


export const productsApi = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        getProducts: builder.query({
            query:()=> `user/products`,
        }),
        getProductDetail: builder.query({
            query: (id)=>`user/product/${id}`,
        })
    })
})

export const {useGetProductsQuery, useGetProductDetailQuery} = productsApi;