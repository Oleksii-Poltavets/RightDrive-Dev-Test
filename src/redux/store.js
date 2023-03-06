import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './cardsReducer';

const store = configureStore({
    reducer: {
        cardsPage: cardsReducer
    }
});

export default store;