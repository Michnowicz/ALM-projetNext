'use client';
import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/login/loginSlice.js"
import dataReducer from "./features/data/dataSlice.js"

export const store = configureStore({
    reducer : {
        login : loginReducer,
        data : dataReducer,
    }
})