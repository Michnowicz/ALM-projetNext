'use client'

import "./List.css"

import { useSelector } from "react-redux"
import { useRouter } from "next/navigation"


export default function List() {
    const data = useSelector((state)=> state.data)
    const search = useSelector((state)=> state.search)
    const router = useRouter()


    function handleID(id) {  //change page by clicking on card
        router.push(`/products/${id}`)
    }

    return(
        <div className="List">
            {
                search.filter == "artist"?
                data.playlist.filter(p => p.track.artists[0].name.toLowerCase().includes(search.search)).map((p,i) => (
                    <div key={i} className="data" onClick={()=>(handleID(p.track.album.id))}>
                        <img src={p.track.album.images[0].url} alt="" />
                        <p>{p.track.artists[0].name}</p>
                        <p>{p.track.album.name}</p>
                    </div>
                ))
                :
                data.playlist.filter(p => p.track.album.name.toLowerCase().includes(search.search)).map((p,i) => (
                    <div key={i} className="data" onClick={()=>(handleID(p.track.album.id))}>
                        <img src={p.track.album.images[0].url} alt="" />
                        <p>{p.track.artists[0].name}</p>
                        <p>{p.track.album.name}</p>
                    </div>
                ))
            }
        </div>
    )
}