'use client'

import { createSlice } from "@reduxjs/toolkit"



export const loginSlice = createSlice ({
    name: "login",
    initialState: {
        logged: false,
        connectedUser:{id:null, name: "", password: ""},
        users:[
            {id:0, name:"dummy", password: "test"},
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
                        const newUser = {id: state.users.length, name: action.payload[0], password: action.payload[1]}
                        state.users.push(newUser)
                        state.logged = true
                        state.connectedUser.id = newUser.id
                        state.connectedUser.name = newUser.name
                        state.connectedUser.password = newUser.password
                    }
                }
            }
        },
    }
})

export const {CheckUser, CreateUser} = loginSlice.actions
export default loginSlice.reducer