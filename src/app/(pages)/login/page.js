'use client'

import "./Login.css"

import { useRouter } from "next/navigation"
import { useSelector, useDispatch } from 'react-redux'
import { CheckUser } from "../../GlobalRedux/features/login/loginSlice.js"
import { useState } from "react"


export default function Login() {
    const login = useSelector((state) => state.login)
    const dispatch = useDispatch()
    const router = useRouter()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        dispatch(CheckUser([username, password]))
        if (login.logged == true) {
            router.push('/login/loged')
        }
    }

    return(
        <section className="Login">
            <div className="logDiv">
                <div className="LogInDiv">
                    <h1>Login</h1>
                    <div className="LogInputs">
                        <input 
                            type="text" 
                            placeholder="username" 
                            className="pillInput" 
                            onChange={(e)=>(setUsername(e.target.value))}
                        />
                        <input 
                            type="text" 
                            placeholder="password" 
                            className="pillInput"
                            onChange={(e)=>(setPassword(e.target.value))}
                        />
                    </div>
                    <div className="LogInBtn" onClick={handleLogin}>
                        <button className="btnBlue">Login</button>
                    </div>
                </div>
                <div className="logBreak">
                    <hr />
                    <p>or</p>
                    <hr />
                </div>
                <div className="subscription">
                    <button className="btnBlue">Create Account</button>
                </div>
            </div>
        </section>
    )
}