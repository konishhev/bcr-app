import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./cards.ts";
import authSlice from "./auth.ts";

const store = configureStore({
    reducer: {
        cards: cardSlice,
        auth: authSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;