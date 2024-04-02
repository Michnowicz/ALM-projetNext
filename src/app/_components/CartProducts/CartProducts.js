"use client"

import "./CartProducts.css"

import { useSelector,useDispatch } from "react-redux"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faT, faTrash } from "@fortawesome/free-solid-svg-icons"
import { incrementCart, decrementCart, deleteCart } from "@/app/GlobalRedux/features/login/loginSlice"
import { useEffect } from "react"

export default function CartProducts() {
    const test = useSelector((state)=> state.login.test)
    const dispatch = useDispatch()

    useEffect(()=>{
        console.log(test);
    },[test])

    return(
        <div className="cartProducts">
        {
            test.map((t,i)=>(
            <div key={i} className="cartProduct">
                <div className="cartInfo">
                    <div className="cartLeft">
                        <img src={t.object.images[0].url} alt="" />
                        <div className="cartText">
                            <h3>{t.object.name}</h3>
                            <p>{t.object.artists[0].name}</p>
                            <p><b>quantity: </b>{t.quantity}</p>
                        </div>
                    </div>
                    <div className="cartBtn">
                        <button onClick={()=>{dispatch(decrementCart(i))}}>-</button>
                        <button onClick={()=>{dispatch(incrementCart(i))}}>+</button>
                        <button onClick={()=>{dispatch(deleteCart(i))}}><FontAwesomeIcon icon={faTrash} className="icon"/></button>
                    </div>
                </div>
                {i < test.length - 1 ?
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