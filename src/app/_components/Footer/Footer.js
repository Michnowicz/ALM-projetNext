import "./Footer.css"

import Link from "next/link"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { w } from "@fortawesome/free-solid-svg-icons"

export default function Footer() {



    return(
        <div className="Footer">
            <div className="ftrCont About">
                <p><b>About us</b></p>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dolorem enim, delectus dolores temporibus praesentium.</p>
                </div>
            </div>
            <div className="ftrCont Support">
                <p><b>Support</b></p>
                <div>
                    <Link href="/" target="_blank">Contact us</Link>
                    <Link href="/" target="_blank">FAQ</Link>
                </div>
            </div>
            <div className="ftrCont Links">
                <p><b>Links</b></p>
                <div>
                    <Link href="https://open.spotify.com/intl-fr" target="_blank">Spotify</Link>
                    <Link href="/" target="_blank">link</Link>
                    <Link href="/" target="_blank">link</Link>
                </div>
            </div>
            <div className="ftrCont Social">
                <p><b>Social</b></p>
                <div>
                
                </div>
            </div>
        </div>
    )
}