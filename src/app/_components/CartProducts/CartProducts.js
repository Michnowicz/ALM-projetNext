"use client"

import "./CartProducts.css"

import { useSelector,useDispatch } from "react-redux"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { incrementCart, decrementCart, deleteCart } from "@/app/GlobalRedux/features/login/loginSlice"

export default function CartProducts() {
    const cart = useSelector((state)=> state.login.connectedUser.cart)
    const dispatch = useDispatch()


    return(
        <div className="cartProducts">
        {
            cart.map((c,i)=>(
            <div key={i} className="cartProduct">
                <div className="cartInfo">
                    <div className="cartLeft">
                        <img src={c.object.images[0].url} alt="" />
                        <div className="cartText">
                            <h3>{c.object.name}</h3>
                            <p>{c.object.artists[0].name}</p>
                            <p><b>quantity: </b>{c.quantity}</p>
                        </div>
                    </div>
                    <div className="cartBtn">
                        <button onClick={()=>{dispatch(decrementCart(i))}}>-</button>
                        <button onClick={()=>{dispatch(incrementCart(i))}}>+</button>
                        <button onClick={()=>{dispatch(deleteCart(i))}}><FontAwesomeIcon icon={faTrash} className="icon"/></button>
                    </div>
                </div>
                {
                i < cart.length - 1 ?
                    <hr />
                    :
                    ""
                }
            </div>
            ))
        }
        </div>
    )
}