import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";


export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder)=> ({
        register: builder.mutation({
            query: (data)=> ({
                url:"/user/registration",
                method:"POST",
                body:data
            }),
            async onQueryStarted(arg,{queryFulfilled,dispatch}){
                try{
                    const result = await queryFulfilled;

                    localStorage.setItem('auth',JSON.stringify({
                        accessToken: result.data.accessToken,
                        user: result.data.user
                    }))
                    dispatch(userLoggedIn({
                        accessToken: result.data.accessToken,
                        user: result.data.user,
                    }))
                }
                catch(err){

                }
            }
        }),
        login: builder.mutation({
            query:(data)=> ({
                url:"/user/login",
                method:"POST",
                body:data
            }),
            providesTags:["user"],
            async onQueryStarted(arg,{queryFulfilled,dispatch}){
                try{
                    const result = await queryFulfilled;

                    localStorage.setItem('auth',JSON.stringify({
                        accessToken: result.data.accessToken,
                        user: result.data.user,
                    }))

                    dispatch(userLoggedIn({
                        accessToken: result.data.accessToken,
                        user: result.data.user,
                    }))
                }
                catch(e){

                }
            }
        }),
        roleChange: builder.mutation({
            query:(data)=>({
                url:"user/change-role",
                method:"PATCH",
                body:data
            }),
            invalidatesTags:["user"]
        })

    })
})

export const {useLoginMutation,useRegisterMutation,useRoleChangeMutation} = authApi;