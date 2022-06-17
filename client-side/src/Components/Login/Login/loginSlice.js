import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const login = createAsyncThunk("login/login", async(data)=>{
    console.log(data)
    const response = await axios.post(`http://localhost:8000/user/login`,{  email: data.email, password: data.password });
    console.log(response.data)
    // sessionStorage.setItem('user',JSON.stringify({access_token:response.data.access_token,user:response.data.user}))
    return response.data
})

export const loginSlice = createSlice({
        name: "login",
        initialState:{
            isLoading: false,
            isAuth:false,
            error:'',
            user:{}
        },
        extraReducers: (builder)=>{
            builder.addCase(login.pending, (state)=>{
                state.isLoading = true;
                state.isAuth = false;
                state.error = null
            }   );
            builder.addCase(login.fulfilled, (state,action)=>{
                state.isLoading = false;
                state.isAuth = true;
                state.user = action.payload;
                state.error = '';
            }   );
            builder.addCase(login.rejected, (state,action)=>{
                state.isLoading = false;
                state.isAuth = false;
                state.user = {};
                state.error = action.error.message;
            }   );
        }

    })

    export default loginSlice.reducer;