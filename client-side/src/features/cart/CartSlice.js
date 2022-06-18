import { createSlice } from "@reduxjs/toolkit"


const initialState=[]

export const cartSlice = createSlice({
    name:'cart',
    initialState:initialState,
    reducers:{
        addToCart(state,{payload}){
            const {id} = payload;

            const find = state.find(product=>product.id===id);

            if(find){
                return state.map(product=>
                    product.id===id ? {
                        ...product,
                        quantity:product.quantity+1
                    }
                    :
                    product
                    );
            }
            else{
                state.push({
                    ...payload,
                    quantity: 1
                });
            }
        },
        increament(state, { payload }) {
            return state.map((product) =>
              product.id === payload
                ? {
                    ...product,
                    quantity: product.quantity + 1
                  }
                : product
            );
          },
          decrement(state, { payload }) {
            return state.map((product) =>
              product.id === payload
                ? {
                    ...product,
                    quantity: product.quantity - 1
                  }
                : product
            );
          },
          clear(state) {
            return [];
          }
    }
})

export const { addToCart, increament, decrement, clear } = cartSlice.actions;
const cartReducer = cartSlice.reducer;

export default cartReducer;