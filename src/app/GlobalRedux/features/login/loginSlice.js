'use client'

import { createSlice } from "@reduxjs/toolkit"


export const loginSlice = createSlice ({
    name: "login",
    initialState: {
        logged: false,
        logins: ["",""],
        users:[
            {name:"dummy", password: "test"}
        ],

    reducers: {}
    }
})

export const {} = loginSlice.actions
export default loginSlice.reducer