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
            {object: {name: "Red Moon In Venus", artists:[{name: 'Kali Uchis'}] , images: [{url:"https://i.scdn.co/image/ab67616d0000b27381fccd758776d16b87721b17"},{},{url:"https://i.scdn.co/image/ab67616d0000485181fccd758776d16b87721b17"}],}, quantity: 6},

            {object: {name: "Phrases", artists:[{name: 'TOPAZ'}] , images: [{url:"https://i.scdn.co/image/ab67616d0000b2732a53db5b9ceb3a0d5830fb3c"},{},{url:"https://i.scdn.co/image/ab67616d000048512a53db5b9ceb3a0d5830fb3c"}],}, quantity: 4},
            
            {object: {name: "What's Going On", artists:[{name: 'Marvin Gaye'}] , images: [{url:"https://i.scdn.co/image/ab67616d0000b273b36949bee43217351961ffbc"},{},{url:"https://i.scdn.co/image/ab67616d00004851b36949bee43217351961ffbc"}],}, quantity: 3},
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
            const newProduct = {object: action.payload, quantity: 1}
            let writeProduct = true

            if (state.connectedUser.cart.length == 0) {
                state.connectedUser.cart.push(newProduct)
            } else {
                state.connectedUser.cart.forEach(f => {
                    if (f.object.artists[0].id == newProduct.object.artists[0].id) {
                        f.quantity += newProduct.quantity
                        writeProduct = false
                    }
                })
                if (writeProduct == true) {
                    state.connectedUser.cart.push(newProduct)
                }
            }
        },
        incrementCart: (state, action) => {
            state.test[action.payload].quantity += 1
        },
        decrementCart: (state, action) => {
            if (state.test[action.payload].quantity > 0) {
                state.test[action.payload].quantity -= 1
            }
            if (state.test[action.payload].quantity == 0) {
                state.test.splice(action.payload, 1)
            }
        },
        deleteCart:(state, action) => {
            state.test.splice(action.payload, 1)
        },
    }
})

export const {CheckUser, CreateUser, addToCart, incrementCart, decrementCart, deleteCart, } = loginSlice.actions
export default loginSlice.reducer