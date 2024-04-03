'use client'

import { createSlice } from "@reduxjs/toolkit"



export const searchSlice = createSlice ({
    name: "search",
    initialState: {
        search: "",
        filter: "artist",
    },
    reducers: {
        addSearch: (state, action) => {
            state.search = action.payload.toLowerCase()
        },
        setFilter: (state, action) => {
            state.filter = action.payload
        },
    }
})

export const {addSearch, setFilter} = searchSlice.actions
export default searchSlice.reducer