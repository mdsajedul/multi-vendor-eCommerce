import { apiSlice } from "../api/apiSlice";


export const productsApi = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        getProducts: builder.query({
            query:()=> `user/products`,
            providesTags:['Product']
        }),
        getProductDetail: builder.query({
            query: (id)=>`user/product/${id}`,
        }),
        getProductsBySeller: builder.query({
            query:()=>`seller/get-all-products`,
            providesTags:['Product']
        }),
        deleteProductBySeller: builder.mutation({
            query: (id) => ({
                url: `seller/delete-product/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:['Product']
        })
    })
})

export const {useGetProductsQuery, useGetProductDetailQuery, useGetProductsBySellerQuery, useDeleteProductBySellerMutation } = productsApi;