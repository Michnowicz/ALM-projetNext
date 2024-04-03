'use client'

import "./Favorites.css"

import { useSelector } from "react-redux"

export default function Favorites() {
    const favorite = useSelector((state) => state.login.connectedUser.favorite)


    return(
        <div className="Favorites">
            {
                favorite.map((c, i) => (
                    <div key={i} className="favorite">
                        <div key={i} className="data">
                            <img src={c.images[0].url} alt=""/>
                            <p>{c.name}</p>
                            <p>{c.artists[0].name}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}