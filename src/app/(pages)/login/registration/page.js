'use client';

import "./Registration.css"

import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from "next/navigation"
import { useState } from "react"
import { CreateUser } from "@/app/GlobalRedux/features/login/loginSlice";

export default function Registration () {
    const login = useSelector((state) => state.login)
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
        <section className="Registration">
            <div className="SignUp">
                <h1>Sign Up</h1>
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
                    <input 
                        type="text"
                        placeholder="repeat password"
                        className="pillInput"
                        onChange={(e)=>(setrepeat(e.target.value))}
                    />
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