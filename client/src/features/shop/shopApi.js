import { apiSlice } from "../api/apiSlice";


export const shopApi = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        getShop: builder.query({
            query:()=>`seller/get-shop`,
        }),
        createShop: builder.mutation({
            query: (data)=> ({
                url:"/seller/create-shop",
                method:"POST",
                body:data,
                // headers:{
                //     "Content-Type":"multipart/form-data",
                //     " boundary":"--abc"
                // }
            }),
        }),
    })
})

export const {useGetShopQuery,useCreateShopMutation} = shopApi;

// "Content-Type":"multipart/form-data"