import "./ProductSongs.css"

import { useSelector } from "react-redux"


export default function ProductSongs() {
    const album = useSelector((state)=> state.data.album)
    const darkMode = useSelector((state)=> state.login.darkMode)

    return(
        <div className={darkMode ? "productSongs dark" :"productSongs"}>
                        <div className="songsTitle">
                            <h2>Tracklist</h2>
                        </div>
                        <div className="tracklist">
                            {
                                album.tracks.items.map((t,i)=>(
                                    <div key={i} className="track">
                                        {
                                            i <= 19 ?
                                            <div className="trackInfo">
                                                <p>{i+1}.</p>
                                                <p>{t.name}</p>
                                            </div>
                                            :
                                            ""
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
    )
}