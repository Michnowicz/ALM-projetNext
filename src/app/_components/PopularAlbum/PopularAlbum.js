'use client'


import "../List/List.css"
import "./PopularAlbum.css"

import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getToken, getPlaylist } from "@/app/GlobalRedux/features/data/dataSlice"
import { Link } from "next/link"
import { useRouter } from "next/navigation"


export default function PopularAlbum() {
    const data = useSelector((state)=> state.data)
    const dispatch = useDispatch()
    const router = useRouter()

    
    useEffect(()=>{ //API parameters
        let authParameters = {
            method: 'POST',
            headers: {
                'Content-type' : 'application/x-www-form-urlencoded'
            },
            body: `grant_type=client_credentials&client_id=${data.CLIENT_ID}&client_secret=${data.CLIENT_SECRET}`
        }

        fetch('https://accounts.spotify.com/api/token',authParameters)
            .then(result => result.json())
            .then(data => dispatch(getToken(data.access_token)))
    },[])

    useEffect(()=>{ //write playlist data in dataSlicer
        if (data.accesToken != "") {
            async function getData() {
                var artistsParameters = {
                    method: 'GET',
                    headers: {
                        'Content-Type' : 'application/json',
                        'Authorization': 'Bearer ' + data.accesToken,
                    }
                }
                var albums = await fetch(`https://api.spotify.com/v1/playlists/5H4AAJscwGg31Jq4FMI4vf`, artistsParameters)
                    .then(response => response.json())
                    .then(data => dispatch(getPlaylist(data.tracks.items)))
            }
            getData()
        }
    }, [data.accesToken])


    // useEffect(()=>{
    //     if (data.playlist != "") {
    //         console.log(data.playlist);
    //     }
    // },[data.playlist])


    function handleID(id) {  //change page by clicking on card
        router.push(`/products/${id}`)
    }

    return(
        <div className="PopularAlbum">
            <h2>Most Popular Album</h2>
            <div className="allData">
                {
                    data.playlist == "" ?
                    <div className="load">Loading...</div>
                    :
                    data.playlist.filter(p=>p.track.popularity > 60).map((p,i) => (
                            i < 5 ?
                            <div key={i} className="data" onClick={()=>(handleID(p.track.album.id))}>
                                <img src={p.track.album.images[0].url} alt="" />
                                <p>{p.track.artists[0].name}</p>
                                <p>{p.track.album.name}</p>
                            </div>
                            :
                            ""
                    ))
                }

            </div>
        </div>
    )
}