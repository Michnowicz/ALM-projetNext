'use client'
import "./Cart.css"
import CartProducts from "@/app/_components/CartProducts/CartProducts"
import Summary from "@/app/_components/Summary/Summary"

import { useSelector } from "react-redux"
import { useRouter } from "next/navigation"

export default function Cart() {
    const login = useSelector((state)=> state.login)
    const darkMode = useSelector((state)=> state.login.darkMode)
    const router = useRouter()



    return(
        <section className={darkMode ? "Cart dark" : "Cart"}>
            <div className="cartDiv">
                {
                    login.logged ?
                    <>
                        <CartProducts/>
                        <hr />
                        <Summary/>
                    </>
                    :
                    <div className="notLoged">
                        <h1>Please log in to see this page</h1>
                        <button onClick={()=>(router.push('/login'))}>Login</button>
                    </div>
                }
            </div>
        </section>
    )
}