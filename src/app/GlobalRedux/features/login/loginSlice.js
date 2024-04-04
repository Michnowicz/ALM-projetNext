'use client'

import { createSlice } from "@reduxjs/toolkit"



export const loginSlice = createSlice ({
    name: "login",
    initialState: {
        //logged: false,
        //connectedUser:{id:null, name: "", password: "", favorite: [], cart: []},
        logged: true,
        connectedUser:{id:null, name: "test", password: "", favorite: [], cart: []},
        users:[
            {id:0, name:"dummy", password: "test", favorite: [], cart: []},
        ],
        darkMode: false,
    },
    reducers: {
        CheckUser: (state, action) => {
            state.users.forEach(user => {
                if (action.payload[0]== user.name && action.payload[1] == user.password) {
                    state.connectedUser.id = user.id
                    state.connectedUser.name = user.name
                    state.connectedUser.password = user.password

                    state.logged = true
                }
            });
        },
        CreateUser: (state, action) => {
            let writeNewUser = true

            if (action.payload[1] == action.payload[2]) {
                if (action.payload[0] === "" || action.payload[1] === "" || action.payload[2] === "") {
                    console.log('nok');
                } else {
                    state.users.forEach(user => {
                        if (user.name == action.payload[0]) {
                            writeNewUser = false
                            console.log("username already taken");
                        }
                    });
                    if (writeNewUser) {
                        console.log('new user written');
                        const newUser = {id: state.users.length, name: action.payload[0], password: action.payload[1], favorite: [], cart: []}
                        state.users.push(newUser)
                        state.logged = true
                        state.connectedUser.id = newUser.id
                        state.connectedUser.name = newUser.name
                        state.connectedUser.password = newUser.password
                    }
                }
            }
        },
        addToCart: (state, action) => {
            const newProduct = {object: action.payload, quantity: 1}
            let writeProduct = true

            if (state.connectedUser.cart.length == 0) {
                state.connectedUser.cart.push(newProduct)
            } else {
                state.connectedUser.cart.forEach(c => {
                    if (c.object.name == newProduct.object.name) {
                        c.quantity += newProduct.quantity
                        writeProduct = false
                    }
                })
                if (writeProduct == true) {
                    state.connectedUser.cart.push(newProduct)
                }
            }
        },
        incrementCart: (state, action) => {
            state.connectedUser.cart[action.payload].quantity += 1
        },
        decrementCart: (state, action) => {
            if (state.connectedUser.cart[action.payload].quantity > 0) {
                state.connectedUser.cart[action.payload].quantity -= 1
            }
            if (state.connectedUser.cart[action.payload].quantity == 0) {
                state.connectedUser.cart.splice(action.payload, 1)
            }
        },
        deleteCart:(state, action) => {
            state.connectedUser.cart.splice(action.payload, 1)
        },
        addFavorite: (state, action) => {
            const newFavorite = action.payload
            let writeFavorite = true
            
            if (state.connectedUser.favorite.length == 0) {
                state.connectedUser.favorite.push(newFavorite)
            } else {
                for (let i = 0; i < state.connectedUser.favorite.length; i++) {
                    if (state.connectedUser.favorite[i].name == newFavorite.name) {
                        writeFavorite = false
                        state.connectedUser.favorite.splice(i, 1)
                    }
                }
                if (writeFavorite == true) {
                    state.connectedUser.favorite.push(newFavorite)
                }
            }
        },
        changeMode: (state) => {
            state.darkMode = !state.darkMode
        },
        logout: (state) => {
            state.logged = false
            state.connectedUser = {id:null, name: "", password: "", favorite: [], cart: []}
        },
    }
})

export const {CheckUser, CreateUser, addToCart, incrementCart, decrementCart, deleteCart, addFavorite, changeMode, logout} = loginSlice.actions
export default loginSlice.reducer