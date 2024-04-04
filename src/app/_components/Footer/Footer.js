"use client"
import "./Footer.css"

import Link from "next/link"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXTwitter, faFacebook, faSpotify, faSoundcloud } from "@fortawesome/free-brands-svg-icons"

import { useSelector } from "react-redux"

export default function Footer() {
    const darkMode = useSelector((state) => state.login.darkMode)


    return(
        <div className={darkMode ? "Footer dark" : "Footer"}>
            <div className="ftrCont About">
                <p><b>About us</b></p>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dolorem enim, delectus dolores temporibus praesentium.</p>
                </div>
            </div>
            <div className="ftrCont Support">
                <p><b>Support</b></p>
                <div>
                    <Link href="/">Contact us</Link>
                    <Link href="/">FAQ</Link>
                </div>
            </div>
            <div className="ftrCont Links">
                <p><b>Links</b></p>
                <div>
                    <Link href="/">lorem</Link>
                    <Link href="/">ipsum</Link>
                    <Link href="/">nodade</Link>
                </div>
            </div>
            <div className="ftrCont Social">
                <p><b>Social</b></p>
                <div className="socialIcon">
                    <Link href='https://twitter.com/?lang=fr' target="blank"><FontAwesomeIcon icon={faXTwitter} className="icon" target="blank"/></Link>
                    <Link href='https://www.facebook.com/?locale=fr_FR' target="blank"><FontAwesomeIcon icon={faFacebook} className="icon"/></Link>
                    <Link href='https://open.spotify.com/intl-fr' target="blank"><FontAwesomeIcon icon={faSpotify} className="icon"/></Link>
                    <Link href='/https://soundcloud.com/' target="blank"><FontAwesomeIcon icon={faSoundcloud} className="icon"/></Link>
                </div>
            </div>
        </div>
    )
}