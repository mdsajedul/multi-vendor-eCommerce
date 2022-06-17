import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/ProductsSlice';
import loginReducer from '../Components/Login/Login/loginSlice'
import registrationReducer from '../Components/Login/Login/registrationSlice';


const store = configureStore({
    reducer: {
        productsReducer: productsReducer,
        loginReducer: loginReducer,
        registrationReducer: registrationReducer
    },

})

export default store;