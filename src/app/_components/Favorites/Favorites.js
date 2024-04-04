'use client'

import "./Favorites.css"

import { useSelector } from "react-redux"
import { useRouter } from "next/navigation"

export default function Favorites() {
    const favorite = useSelector((state) => state.login.connectedUser.favorite)
    const darkMode = useSelector((state) => state.login.darkMode)


    return(
        <div className={darkMode ? "Favorites dark" : "Favorites"}>
            {
                favorite.map((f, i) => (
                    <div key={i} className="favorite">
                        <div key={i} className="data">
                            <img src={f.images[0].url} alt=""/>
                            <p>{f.name}</p>
                            <p>{f.artists[0].name}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}