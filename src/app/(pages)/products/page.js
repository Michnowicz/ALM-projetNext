'use client'

import { useEffect } from "react";
import "./Products.css";
import Searchbar from "@/app/_components/Searchbar/Searchbar";
import List from "@/app/_components/List/List"
import { getToken, getPlaylist } from "@/app/GlobalRedux/features/data/dataSlice";

import { useSelector, useDispatch } from "react-redux";

export default function Products() {
    const data = useSelector((state)=> state.data)
    const dispatch = useDispatch()


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

    return(
        <div className="Products">
            {
                data.playlist == "" ?
                <div className="load">Loading...</div>
                :
                <>
                    <Searchbar/>
                    <List/>
                </>
                }
        </div>
    )
}