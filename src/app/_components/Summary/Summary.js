"use client"

import "./Summary.css"


export default function Summary() {
    

    return(
        <div className="summary">
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