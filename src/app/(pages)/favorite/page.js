'use client'

import "./Favorite.css"
import Favorites from "@/app/_components/Favorites/Favorites"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

import { useSelector } from "react-redux"

export default function Favorite() {
    const login = useSelector((state) => state.login)
    const router = useRouter()


    // useEffect(()=>{
    //     console.log(login.connectedUser.favorite);
    // },[login.connectedUser.favorite])

    return(
        <section className={login.darkMode ? "Favorite dark" : "Favorite"}>
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