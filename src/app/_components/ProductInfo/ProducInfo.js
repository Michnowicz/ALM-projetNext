import "./ProductInfo.css"

import { useSelector } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping,faStar } from "@fortawesome/free-solid-svg-icons"

export default function ProductInfo() {
    const album = useSelector((state)=> state.data.album)

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
                <div className="productIcons">
                    <FontAwesomeIcon icon={faCartShopping} className="icon"/>
                    <FontAwesomeIcon icon={faStar} className="icon"/>
                </div>
            </div>
        </div>
    )
}