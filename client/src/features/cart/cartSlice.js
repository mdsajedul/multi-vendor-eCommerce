import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    cart : [],
    shop:[]
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addToCart: (state,action)=>{
            const inCart = state.cart.find((item)=>item._id === action.payload._id)
            const inShop = state.cart.find((item)=>item.shopId===action.payload.shopId)
            if(inCart){
                inCart.quantity++;
            }else{
                state.cart.push({...action.payload, quantity:1})
            }
            if(!inShop){
                state.shop.push({shopId:action.payload.shopId, shopName:action.payload.shopName})
            }
        },
        incrementQuantity: (state,action)=>{
            const item = state.cart.find((item)=>item._id===action.payload._id)
            item.quantity++;
        },
        decrementQuantity: (state,action)=>{
            const item = state.cart.find((item)=>item._id===action.payload._id)
            if(item.quantity===1){
                item.quantity = 1;
            }
            else{
                item.quantity--;
            }
        },
        removeFromCart: (state,action)=>{
            const removeItem = state.cart.filter((item)=>item._id !== action.payload._id);
            state.cart = removeItem;
        },
        removeAllFromCart: (state)=>{
            state.cart = [];
            state.shop = []
        }
    }
})

export default cartSlice.reducer;

export const {addToCart,incrementQuantity,decrementQuantity,removeFromCart,removeAllFromCart} = cartSlice.actions