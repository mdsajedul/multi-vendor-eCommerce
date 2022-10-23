import { apiSlice } from "../api/apiSlice";


export const shopApi = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        getShop: builder.query({
            query:()=>`seller/get-shop`,
            providesTags:["getShop"]
        }),
        createShop: builder.mutation({
            query: (data)=> ({
                url:"/seller/create-shop",
                method:"POST",
                body:data,
            }),
            invalidatesTags:["getShop"]
        }),
    })
})

export const {useGetShopQuery,useCreateShopMutation} = shopApi;

