import { apiSlice } from "../api/apiSlice";


export const shopApi = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        getShop: builder.query({
            query:()=>`seller/get-shop`,
        })
    })
})

export const {useGetShopQuery} = shopApi;