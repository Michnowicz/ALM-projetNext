'use client';

import "./Registration.css"

import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from "next/navigation"
import { useState } from "react"
import { CreateUser } from "@/app/GlobalRedux/features/login/loginSlice";

export default function Registration () {
    const login = useSelector((state) => state.login)
    const darkMode = useSelector((state) => state.login.darkMode)
    const dispatch = useDispatch()
    const router = useRouter()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [repeat, setrepeat] = useState('')

    const handleNewUser = () => {
        dispatch(CreateUser([username, password, repeat]))
        if (login.logged == true) {
            router.push('/login/loged')
        }
    }

    return(
        <section className={darkMode? "Registration dark" : "Registration"}>
            <div className="SignUp">
                <h1>Sign Up</h1>
                <div className="LogInputs">
                    <div>
                        <input
                            type="text"
                            placeholder="username"
                            className="pillInput"
                            onChange={(e)=>(setUsername(e.target.value))}
                        />
                        <p>{login.registerError[0]}</p>
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="password"
                            className="pillInput"
                            onChange={(e)=>(setPassword(e.target.value))}
                        />
                        <p>{login.registerError[1]}</p>
                    </div>
                    <div>
                        <input 
                            type="password"
                            placeholder="repeat password"
                            className="pillInput"
                            onChange={(e)=>(setrepeat(e.target.value))}
                        />
                        <p>{login.registerError[2]}</p>
                    </div>
                </div>
                <div className="LogInBtn">
                    <button className="btnBlue"
                        onClick={handleNewUser}>
                        Sign up
                    </button>
                </div>
            </div>
        </section>
    )
}