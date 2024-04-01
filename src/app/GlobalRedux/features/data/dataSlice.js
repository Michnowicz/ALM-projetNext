'use client'

import { createSlice } from "@reduxjs/toolkit"

export const dataSlice = createSlice ({ 
    name: "data",
    initialState: {
        CLIENT_ID : "0cdefd8624f14ab59a6ca924aa01ec22",
        CLIENT_SECRET : "ad3d80b5bc8645788f3a1d416263e39e",
        accesToken : "",
        playlist:[],
        album:[],
        carousel: []
    },
    reducers: {
        getToken: (state, action) => {
            state.accesToken = action.payload
        },
        getPlaylist: (state, action) => {
            state.playlist = action.payload
        },
        getAlbum: (state, action) => {
            state.album = action.payload
        },
        getCarousel: (state) => {
            const randList = []

            while (state.carousel.length < 5) {
                let random = Math.floor(Math.random()*state.playlist.length)
                let different = true
                state.carousel.push(state.playlist[random])
            }
        }
    }
})


export const {getToken,getPlaylist,getAlbum, getCarousel } = dataSlice.actions
export default dataSlice.reducer