'use client'

import "./Navbar.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping,faStar,faUser,faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { useSelector, useDispatch } from 'react-redux'
import { changeMode, logout } from "@/app/GlobalRedux/features/login/loginSlice"
import { useEffect, useState } from "react"


export default function Navbar() {
    const login = useSelector((state) => state.login)
    const darkMode = useSelector((state) => state.login.darkMode)
    const dispatch = useDispatch()

    const [slide, setSlide] = useState(false)
    const [path, setPath] =useState('')

    function handleSlide() {
        dispatch(changeMode())
        setSlide(!slide)
    }

    


    return(
        <nav className={darkMode ? "navBar dark" : "navBar"}>
            <div className="logoDiv">
                <div>
                    <img src={"/image/musicRest.png"}/>
                </div>
            </div>
            <div className="navigation">
                <div className="links">
                    <Link href="/">HOME</Link>
                    <Link href="/products">PRODUCTS</Link>
                    <Link href="/login">LOGIN</Link>
                    {
                        login.logged ?
                        <Link href="/" onClick={()=>(dispatch(logout()))}>LOGOUT</Link>
                        :
                        <></>
                    }
                    
                </div>
                {
                    login.logged ?
                    <div className="icons">
                        <Link href='/cart'><FontAwesomeIcon icon={faCartShopping} className="icon"/></Link>
                        <Link href='/favorite'><FontAwesomeIcon icon={faStar} className="icon"/></Link>
                        <div className={slide ? "darkMode right" : "darkMode left"} onClick={handleSlide}>
                            <div>
                                <FontAwesomeIcon icon={login.darkMode ? faMoon : faSun} className="icon" />
                            </div>
                        </div>
                        <div className="user">
                            <div className="avatar">
                                <FontAwesomeIcon icon={faUser}/>
                            </div>
                            <p>{login.connectedUser.name}</p>
                        </div>
                    </div>
                    :
                    <>
                        <div className="logedOffIcons">
                            <div className={slide ? "darkMode right" : "darkMode left"} onClick={handleSlide}>
                                <div>
                                    <FontAwesomeIcon icon={login.darkMode ? faMoon : faSun} className="icon" />
                                </div>
                            </div>
                            <div className="user">
                                <div className="avatar">
                                    <FontAwesomeIcon icon={faUser}/>
                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>
        </nav>
    )
}