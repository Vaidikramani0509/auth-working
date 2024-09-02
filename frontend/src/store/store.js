// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './products/productsSlice'

export const store = configureStore({
    reducer: {
        posts: postsReducer
    }
});
