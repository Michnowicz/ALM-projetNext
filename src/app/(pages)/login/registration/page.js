'use client';

import "./Registration.css"

import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Registration () {
    const login = useSelector((state) => state.login)
    const dispatch = useDispatch()
    const router = useRouter()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [repeat, setrepeat] = useState('')

    return(
        <section className="Registration">
            <div className="SignUp">
                <h1>SignUp</h1>
                <div className="LogInputs">
                    <input type="text" placeholder="username" className="pillInput"/>
                    <input type="text" placeholder="password" className="pillInput"/>
                    <input type="text" placeholder="repeat password" className="pillInput"/>
                </div>
            </div>
        </section>
    )
}