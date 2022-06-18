import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


export const fetchProductDetail = createAsyncThunk('product/productDetail', async(id)=>{
    const response = await axios.get(`http://localhost:8000/user/product/${id}`);
    return response.data
})

const initialState={
    isLoading:false,
    product:{},
    error:null
}

export const productDetailSlice = createSlice({
    name:'productDetail',
    initialState:initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchProductDetail.pending, (state)=>{
            state.isLoading= true;
        });
        builder.addCase(fetchProductDetail.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.product = action.payload;
            state.error = null
        });
        builder.addCase(fetchProductDetail.rejected,(state,action)=>{
            state.isLoading= false;
            state.product = null;
            state.error = action.error.message;
        })
    }
})

export default productDetailSlice.reducer;