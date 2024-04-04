"use client"

import "./Summary.css"
import { useSelector } from "react-redux"

export default function Summary() {
    const darkMode = useSelector((state)=> state.login.darkMode)

    return(
        <div className={darkMode ? "summary dark" : "summary"}>
            <div className="sumDiv">
                <div className="sumText">
                    <b>Delivery : </b>
                    <p>free</p>
                </div>
                <div className="sumText">
                    <b>Total price : </b>
                    <p>€ 0</p>
                </div>
            </div>
            <div className="sumBtn">
                <button>Order</button>
            </div>
        </div>
    )
}