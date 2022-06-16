import axios from 'axios'

const {createSlice, createAsyncThunk} = require('@reduxjs/toolkit')


export const fetchProducts = createAsyncThunk("products/fetchProducts", async()=>{
    const response = await axios.get(`http://localhost:8000/user/products`);
    return response.data
})

export const productSlice = createSlice({
    name:"products",
    initialState: {
        products: [],
        isLoading: false,
        error: null
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchProducts.pending, (state)=>{
            state.isLoading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.products = action.payload;
            state.error = null;
        });
        builder.addCase(fetchProducts.rejected, (state,action)=>{
            state.isLoading = false;
            state.products = [];
            state.error = action.error.message;
        })
    }
})

export default productSlice.reducer;