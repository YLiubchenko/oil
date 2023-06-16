import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/productSlice.ts';

export const store = configureStore({
    reducer: {
        products: productReducer,
    }
});