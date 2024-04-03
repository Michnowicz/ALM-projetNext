'use client'

import "./Favorite.css"
import Favorites from "@/app/_components/Favorites/Favorites"

import { useRouter } from "next/navigation"

import { useSelector } from "react-redux"

export default function Favorite() {
    const login = useSelector((state) => state.login)
    const router = useRouter()


    return(
        <section className="Favorite">
            <div className="favDiv">
                {
                    login.logged ?
                    <>
                        <h2>Favorite</h2>
                        <Favorites/>
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