import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/ProductsSlice';
import loginReducer from '../Components/Login/Login/loginSlice'
import registrationReducer from '../Components/Login/Login/registrationSlice';
import  productDetailReducer  from '../Components/Products/ProductDetail/ProductDetailSlice';
import cartReducer from '../features/cart/CartSlice';


const store = configureStore({
    reducer: {
        productsReducer: productsReducer,
        loginReducer: loginReducer,
        registrationReducer: registrationReducer,
        productDetailReducer: productDetailReducer,
        cartReducer:cartReducer
    },

})

export default store;