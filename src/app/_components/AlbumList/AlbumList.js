import { useEffect, useState } from "react"
import "./AlbumList.css"

import { useSelector } from "react-redux"


export default function AlbumList() {
    const data = useSelector((state)=> state.data)
    const [albums, setAlbums] = useState([])

    

    useEffect(()=>{
        if (data.accesToken != "") {
            async function getData() {
                var artistsParameters = {
                    method: 'GET',
                    headers: {
                        'Content-Type' : 'application/json',
                        'Authorization': 'Bearer ' + data.accesToken,
                    }
                }
                var album = await fetch(`https://api.spotify.com/v1/artists/${data.album.artists[0].id}/albums`, artistsParameters)
                    .then(response => response.json())
                    //.then(data => setAlbums(data.items))
                    .then(data => setAlbums(data.items.filter(d=>d.album_type == "album")))
            }
            getData()
        }
    },[data.accesToken, data.album])

    // useEffect(()=>{
    //     console.log(albums);
    // },[albums])

    return(
        <div className="AlbumList">
                        <div className="albumsTitle">
                            <h2>other albums</h2>

                        </div>
                        {
                            albums == "" ?
                            <p>loading...</p>
                            :
                            <div className="albums">
                                {
                                    albums.map((a,i)=>(
                                        <div key={i} className="album">
                                            <img src={a.images[1].url} alt="" />
                                            <p>{a.name}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        }
                    </div>
    )
}