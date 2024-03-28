import "./Navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping,faStar,faCaretUp,faUser } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {


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
                <div className="icons">
                    <FontAwesomeIcon icon={faCartShopping} className="icon"/>
                    <FontAwesomeIcon icon={faStar} className="icon"/>
                    <div className="user">
                        <div className="avatar">
                            <FontAwesomeIcon icon={faUser}/>
                        </div>
                        <p>username</p>
                        <div className="triangle"><FontAwesomeIcon icon={faCaretUp}/></div>
                    </div>
                </div>
            </div>
        </nav>
    )
}