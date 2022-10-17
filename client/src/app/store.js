import { configureStore} from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';
import authSliceReducer from '../features/auth/authSlice';
import cartSliceReducer from '../features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]:apiSlice.reducer,
    auth: authSliceReducer,
    cart: cartSliceReducer,
  },
  middleware: (getDefaultMiddlewares)=>getDefaultMiddlewares().concat(apiSlice.middleware)
});
