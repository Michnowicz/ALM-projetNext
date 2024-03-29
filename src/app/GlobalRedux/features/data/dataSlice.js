'use client'

import { createSlice } from "@reduxjs/toolkit"

export const dataSlice = createSlice ({ 
    name: "data",
    initialState: {
        CLIENT_ID : "0cdefd8624f14ab59a6ca924aa01ec22",
        CLIENT_SECRET : "ad3d80b5bc8645788f3a1d416263e39e",
        accesToken : "",
        playlist:[],
    },
    reducers: {
        getToken: (state, action) => {
            state.accesToken = action.payload
        },
        getPlaylist: (state, action) => {
            state.playlist = action.payload
        }
    }
})


export const {getToken,getPlaylist,} = dataSlice.actions
export default dataSlice.reducer