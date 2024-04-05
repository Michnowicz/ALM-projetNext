'use client'

import "./Login.css"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { useSelector, useDispatch } from 'react-redux'
import { CheckUser } from "../../GlobalRedux/features/login/loginSlice.js"
import { useEffect, useState } from "react"


export default function Login() {
    const login = useSelector((state) => state.login)
    const darkMode = useSelector((state) => state.login.darkMode)
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
        <section className={darkMode? "Login dark" : "Login"}>
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
                        <div>
                            <input 
                                type="password" 
                                placeholder="password" 
                                className="pillInput"
                                onChange={(e)=>(setPassword(e.target.value))}
                            />
                            <p>{login.loginError}</p>
                        </div>
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
                <div className="registration">
                    <Link href='/login/registration'><button className="btnBlue">Create Account</button></Link>
                </div>
            </div>
        </section>
    )
}