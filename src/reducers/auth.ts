import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";

const initialState = {
    token: localStorage.getItem('token') + ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        SET_AUTH_TOKEN: (state, action: PayloadAction<string>) => {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + action.payload;
            localStorage.setItem('token', action.payload);
            state.token = action.payload;
        },
        INIT_AUTH_TOKEN: (state) => {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + state.token;
        },
        REMOVE_AUTH_TOKEN: (state) => {
            axios.defaults.headers.common['Authorization'] = '';
            localStorage.removeItem('token');
        }
    }
})


export const {SET_AUTH_TOKEN, INIT_AUTH_TOKEN, REMOVE_AUTH_TOKEN} = authSlice.actions;

export const getAuthToken = (state: RootState) => state.auth.token;

export default authSlice.reducer;
