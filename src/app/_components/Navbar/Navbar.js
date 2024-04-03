'use client'

import "./Navbar.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping,faStar,faCaretUp,faUser } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { useSelector } from 'react-redux'

export default function Navbar() {
    const login = useSelector((state) => state.login)

    return(
        <nav className="navBar">
            <div className="logoDiv">
                <img src="" alt="logo" />
            </div>
            <div className="navigation">
                <div className="links">
                    <Link href="/">HOME</Link>
                    <Link href="/products">PRODUCTS</Link>
                    <Link href="/login">LOGIN</Link>
                </div>

                {
                    login.logged ?
                    <div className="icons">
                        <Link href='/cart'><FontAwesomeIcon icon={faCartShopping} className="icon"/></Link>
                        <Link href='/favorite'><FontAwesomeIcon icon={faStar} className="icon"/></Link>
                        <div className="user">
                            <div className="avatar">
                                <FontAwesomeIcon icon={faUser}/>
                            </div>
                            <p>{login.connectedUser.name}</p>
                            <div className="triangle"><FontAwesomeIcon icon={faCaretUp}/></div>
                            <div className="scrollingMenu">
                                <button>log out</button>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="logedOffIcons">
                        <div className="user">
                            <div className="avatar">
                                <FontAwesomeIcon icon={faUser}/>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </nav>
    )
}