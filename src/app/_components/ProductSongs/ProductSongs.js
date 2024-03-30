import "./ProductSongs.css"

import { useSelector } from "react-redux"


export default function ProductSongs() {
    const album = useSelector((state)=> state.data.album)

    return(
        <div className="productSongs">
                        <div className="songsTitle">
                            <h2>Tracklist</h2>
                        </div>
                        <div className="tracklist">
                            {
                                album.tracks.items.map((t,i)=>(
                                    <div key={i} className="track">
                                        <div className="trackInfo">
                                            <p>{i+1}.</p>
                                            <p>{t.name}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
    )
}