'use client'

import "./Carousel.css"
import { useSelector, useDispatch } from "react-redux"
import { getCarousel } from "@/app/GlobalRedux/features/data/dataSlice"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function Carousel() {
    const data = useSelector((state)=>state.data)
    const dispatch = useDispatch()
    const router = useRouter()

    const [position, setPosition] = useState(0)

    useEffect(()=>{
        if (data.playlist != "") {
            dispatch(getCarousel())
        }
    },[data.playlist])

    useEffect(()=>{
        setTimeout(()=>{
            if (position == 1920) {
                setPosition(0)
            } else {
                setPosition(position+480)
            }
        },3000)
    },[position])

    function handleID(id) {  //change page by clicking on card
        router.push(`/products/${id}`)
    }

    // useEffect(()=>{
    //     if (data.carousel != "") {
    //         console.log(data.carousel);
    //     }
    // },[data.carousel])


    return(
        <div className="Carousel">
            <div className="carImages">
                {
                    data.carousel.map((c,i)=>(
                        <div key={i} className="car" onClick={()=>(handleID(c.track.album.id))}>
                            <div className="carImage" style={{right: position}}>
                                <img src={c.track.album.images[0].url} alt="" />
                                <div className="carText">
                                    <h4>{c.track.artists[0].name}</h4>
                                    <h3>{c.track.album.name}</h3>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}