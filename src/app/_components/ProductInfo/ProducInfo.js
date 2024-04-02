import "./ProductInfo.css"

import { useSelector, useDispatch } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping,faStar } from "@fortawesome/free-solid-svg-icons"
import { addToCart } from "@/app/GlobalRedux/features/login/loginSlice"
import { useEffect } from "react"

export default function ProductInfo() {
    const login = useSelector((state)=> state.login)
    const album = useSelector((state)=> state.data.album)
    const dispatch = useDispatch()

    function handleCart() {
        console.log(album);
        dispatch(addToCart(album))
    }

    useEffect(()=>{
        console.log(login.connectedUser);
    },[login.connectedUser])

    return(
        <div className="productInfo">
            <img src={album.images[0].url} alt="" />
            <div className="productInfoText">
                <div className="productTitle">
                    <h1>{album.name}</h1>
                </div>
                <p><b>Artist : </b>{album.artists[0].name}</p>
                <p><b>Label : </b>{album.label}</p>
                <p><b>Release : </b>{album.release_date}</p>
                {
                    login.logged ?
                    <div className="productIcons">
                        <FontAwesomeIcon icon={faCartShopping} className="icon" onClick={handleCart}/>
                        <FontAwesomeIcon icon={faStar} className="icon"/>
                    </div>
                    :
                    <></>
                }
            </div>
        </div>
    )
}