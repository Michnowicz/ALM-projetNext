'use client'

import "./Loged.css"

import { useSelector, useDispatch } from 'react-redux'

export default function Loged() {
    const login = useSelector((state) => state.login)
    const dispatch = useDispatch()

    return(
        <section className="Loged">
            {
                login.logged ?
                <h1>Welcome {login.connectedUser.name}</h1>
                :
                <h1>Please Log In to See the Page</h1>
            }
        </section>
    )
}