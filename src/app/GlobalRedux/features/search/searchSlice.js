'use client'

import { createSlice } from "@reduxjs/toolkit"



export const searchSlice = createSlice ({
    name: "search",
    initialState: {
        search: "",
    },
    reducers: {
        addSearch: (state, action) => {
            state.search = action.payload.toLowerCase()
        }
    }
})

export const {addSearch} = searchSlice.actions
export default searchSlice.reducer