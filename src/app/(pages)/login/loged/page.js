'use client'

import "./Loged.css"

import { useSelector, useDispatch } from 'react-redux'

export default function Loged() {
    const login = useSelector((state) => state.login)
    const darkMode = useSelector((state) => state.login.darkMode)
    const dispatch = useDispatch()

    return(
        <section className={darkMode? "Loged dark" :"Loged"}>
            {
                login.logged ?
                <h1>Welcome {login.connectedUser.name}</h1>
                :
                <h1>Please Log In to See the Page</h1>
            }
        </section>
    )
}