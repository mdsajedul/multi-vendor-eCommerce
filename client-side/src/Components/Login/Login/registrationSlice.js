import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const registration = createAsyncThunk('user/registration', async(data)=>{
    console.log(data)
   const response = await  axios.post(`http://localhost:8000/user/registration`,{
        name:data.fullname,
        email:data.email,
        password:data.password,
        gender:data.gender,
        dob:data.dob,
        username: data.username
    })
    console.log(response.data)
    return await response.data
})

export const registraionSlice = createSlice({
    name:'registration',
    initialState:{
        isLoading: false,
        error:null,
        message:null
    },
    extraReducers:(builder)=>{
        builder.addCase(registration.pending,(state)=>{
            state.isLoading = true;
            state.error = null;
            state.message = null
        })
        builder.addCase(registration.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.error = null;
            state.message = action.payload
        })
        builder.addCase(registration.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.error.message
            state.message = action.payload
        })
    }
})

export default registraionSlice.reducer;