'use client'

import { createSlice } from "@reduxjs/toolkit"



export const loginSlice = createSlice ({
    name: "login",
    initialState: {
        logged: false,
        connectedUser:{id:null, name: "", password: "", favorite: [], cart: []},
        users:[
            {id:0, name:"dummy", password: "test", favorite: [], cart: []},
        ],

        // to test favorite and cart
        test: [
            {id: "1U1el3k54VvEUzo3ybLPlM", quantity: 6},
            {id: "2Cdo72vcitFAvuxz76r82c", quantity: 4},
            {id: "5OZ44LaqZbpP3m9B3oT8br", quantity: 3},
            {id: "6oWve17aH3k9i9ITcL1cU5", quantity: 2}
        ],
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
            const newProduct = {id: action.payload.artists[0].id, quantity: 1}
            let writeProduct = true

            if (state.connectedUser.cart.length == 0) {
                state.connectedUser.cart.push(newProduct)
            } else {
                state.connectedUser.cart.forEach(f => {
                    if (f.id == newProduct.id) {
                        f.quantity += newProduct.quantity
                        writeProduct = false
                    }
                })
                if (writeProduct == true) {
                    state.connectedUser.cart.push(newProduct)
                }
            }
        },
    }
})

export const {CheckUser, CreateUser, addToCart} = loginSlice.actions
export default loginSlice.reducer