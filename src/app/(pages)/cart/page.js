'use client'
import "./Cart.css"
import CartProducts from "@/app/_components/CartProducts/CartProducts"
import Summary from "@/app/_components/Summary/Summary"

import { useSelector, useDispatch } from "react-redux"
import { getToken, getPlaylist } from "@/app/GlobalRedux/features/data/dataSlice"
import { useEffect, useState } from "react"

export default function Cart() {
    const data = useSelector((state)=> state.data)
    const test = useSelector((state)=> state.login.test)
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
        if (data.accesToken != "" && data.playlist == "") {
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

    useEffect(()=>{
        console.log(test)
    },[])


    return(
        <section className="Cart">
            <div className="cartDiv">
                <CartProducts/>

                <hr />
                    
                <Summary/>
            </div>
        </section>
    )
}