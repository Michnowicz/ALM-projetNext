'use client'


import "./ProductDetails.css"
import ProductInfo from "@/app/_components/ProductInfo/ProducInfo"
import ProductSongs from "@/app/_components/ProductSongs/ProductSongs"
import AlbumList from "@/app/_components/AlbumList/AlbumList"

import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getToken, getAlbum } from "@/app/GlobalRedux/features/data/dataSlice"

export default function ProductDetails({params}) {
    const data = useSelector((state)=> state.data)
    const darkMode = useSelector((state)=> state.login.darkMode)
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
                var album = await fetch(`https://api.spotify.com/v1/albums/${params.productID}`, artistsParameters)
                    .then(response => response.json())
                    //.then(data => console.log(data))
                    .then(data => dispatch(getAlbum(data)))
            }
            getData()
        }
    }, [data.accesToken])


    return(
        <div className={darkMode ? "ProductDetails dark"  :"ProductDetails"}>
            {
                data.album == "" ?
                <div className="loading">loading...</div>
                :
                <div className="product">

                    <ProductInfo/>

                    <ProductSongs/>

                    <AlbumList/>

                </div>
            }
        </div>
    )
}