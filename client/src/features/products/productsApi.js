import { apiSlice } from "../api/apiSlice";


export const productsApi = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        getProducts: builder.query({
            query:()=> `user/products`,
        }),
        getProductDetail: builder.query({
            query: (id)=>`user/product/${id}`,
        }),
        getProductsBySeller: builder.query({
            query:()=>`seller/get-all-products`,
        })
    })
})

export const {useGetProductsQuery, useGetProductDetailQuery, useGetProductsBySellerQuery} = productsApi;