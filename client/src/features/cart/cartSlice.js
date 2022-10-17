import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    cart : []
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addToCart: (state,action)=>{
            const inCart = state.cart.find((item)=>item._id === action.payload.id)
            if(inCart){
                inCart.quantity++;
            }else{
                state.cart.push({...action.payload, quantity:1})
            }
        },
        incrementQuantity: (state,action)=>{
            const item = state.cart.find((item)=>item._id===action.payload.id)
            item.quantity++;
        },
        decrementQuantity: (state,action)=>{
            const item = state.cart.find((item)=>item._id===action.payload.id)
            if(item.quantity===1){
                item.quantity = 1;
            }
            else{
                item.quantity--;
            }
        },
        removeFromCart: (state,action)=>{
            const removeItem = state.cart.filter((item)=>item._id !== action.payload.id);
            state.cart = removeItem;
        }
    }
})

export default cartSlice.reducer;

export const {addToCart,incrementQuantity,decrementQuantity,removeFromCart} = cartSlice.actions